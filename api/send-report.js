import { createTransport } from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const to = process.env.MAIL_REPORT_TO;
  if (!to) {
    return res.status(500).json({ message: "E-mail de destino não informado" });
  }

  const MAIL_HOST = process.env.MAIL_HOST;
  const MAIL_PORT = process.env.MAIL_PORT;
  const MAIL_USER = process.env.MAIL_USER;
  const MAIL_PASS = process.env.MAIL_PASS;
  const MAIL_SECURE = process.env.MAIL_SECURE;
  if (!MAIL_HOST || !MAIL_PORT || !MAIL_USER || !MAIL_PASS) {
    return res.status(500).json({ message: "Dados do e-mail de envio não informados" });
  }

  const { mensagem } = req.body || {};
  if (!mensagem || !String(mensagem).trim()) {
    return res.status(400).json({ message: "Mensagem obrigatória" });
  }

  const objTransporter = {
    host: String(MAIL_HOST),
    port: Number(MAIL_PORT),
    secure: MAIL_SECURE == "true",
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  };

  try {
    const transporter = createTransport(objTransporter);

    const verify = await transporter.verify();
    if (!verify) {
      console.error("Erro ao conectar ao SMTP");
      console.error(objTransporter);
      return res.status(500).json({ message: "Erro ao conectar ao SMTP" });
    }

    console.log(`[SEND]: Enviando denúncia de '${MAIL_USER}' para '${to}'`);
    await transporter.sendMail({
      from: MAIL_USER,
      to,
      subject: "Nova denúncia - Canal de Denúncias",
      text: `Mensagem:\n${mensagem}`,
    });

    return res.status(200).json({ message: "Enviado!" });
  } catch (error) {
    console.error("Erro ao enviar e-mail da denúncia");
    console.error(error, objTransporter);
    return res.status(500).json({ error: error?.message || "Erro ao enviar e-mail" });
  }
}
