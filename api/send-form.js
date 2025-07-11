import nodemailer from "nodemailer";
import formidable from "formidable";

export const config = {
  api: {
    // necessário para lidar com multipart/form-data
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).end();
  }

  const to = process.env.MAIL_WORK_TO
  if (!to) {
    return res.status(500).json({ message: "E-mail de destino não informado", env: process.env });
  }

  const MAIL_USER = process.env.MAIL_USER
  const MAIL_PASS = process.env.MAIL_PASS
  if (!MAIL_USER || !MAIL_PASS) {
    return res.status(500).json({ message: "Dados do e-mail de envio não informados" });
  }

  const form = new formidable.IncomingForm({ keepExtensions: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Erro no upload" });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS,
      },
    });

    const { nome, email, mensagem } = fields;
    const file = files.curriculo;

    const mailOptions = {
      from: email,
      to,
      subject: `Nova candidatura: ${nome}`,
      text: mensagem,
      attachments: [
        {
          filename: file.originalFilename,
          path: file.filepath,
        },
      ],
    };

    try {
      transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Enviado!" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Erro ao enviar e-mail" });
    }
  });
}
