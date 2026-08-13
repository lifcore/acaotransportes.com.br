import { NextResponse } from 'next/server';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { Resend } from 'resend';

function getDb() {
  if (!getApps().length) {
    initializeApp({
      credential: cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        // Vercel guarda quebras de linha da chave como "\n" literal — precisa converter de volta
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
    });
  }
  return getFirestore();
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { nome, empresa, email, telefone, cidade, assunto, mensagem } = body;

    if (!nome || !email || !telefone || !mensagem) {
      return NextResponse.json({ error: 'Preencha os campos obrigatórios.' }, { status: 400 });
    }

    // 1) Grava o lead no Firestore — isso SEMPRE acontece, independente do e-mail funcionar
    const db = getDb();
    await db.collection('leads_site').add({
      nome,
      empresa: empresa || '',
      email,
      telefone,
      cidade: cidade || '',
      assunto: assunto || '',
      mensagem,
      origem: 'site institucional',
      status: 'novo',
      createdAt: new Date(),
    });

    // 2) Tenta enviar o e-mail de aviso — se falhar, não derruba a resposta de sucesso,
    //    porque o lead já está salvo no Firestore de qualquer forma
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || 'Site Ação Transportes <onboarding@resend.dev>',
        to: [process.env.RESEND_TO_EMAIL || 'comercial@acaotransportes.com.br'],
        replyTo: email,
        subject: `Novo contato pelo site — ${nome}${empresa ? ` (${empresa})` : ''}`,
        html: `
          <h2>Novo contato pelo site institucional</h2>
          <p><strong>Nome:</strong> ${nome}</p>
          <p><strong>Empresa:</strong> ${empresa || '—'}</p>
          <p><strong>E-mail:</strong> ${email}</p>
          <p><strong>Telefone/WhatsApp:</strong> ${telefone}</p>
          <p><strong>Cidade:</strong> ${cidade || '—'}</p>
          <p><strong>Assunto:</strong> ${assunto || '—'}</p>
          <p><strong>Mensagem:</strong></p>
          <p>${mensagem.replace(/\n/g, '<br>')}</p>
        `,
      });
    } catch (emailErr) {
      console.error('Lead salvo, mas falhou o envio do e-mail de aviso:', emailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Erro ao gravar lead no Firestore:', err);
    return NextResponse.json({ error: 'Não foi possível enviar. Tente novamente.' }, { status: 500 });
  }
}
