import { createTransport } from "nodemailer";
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

  const SMTP_HOST = process.env.SMTP_HOST
  const SMTP_PORT = process.env.SMTP_PORT
  const MAIL_USER = process.env.MAIL_USER
  const MAIL_PASS = process.env.MAIL_PASS
  if (!SMTP_HOST || !SMTP_PORT || !MAIL_USER || !MAIL_PASS) {
    return res.status(500).json({ message: "Dados do e-mail de envio não informados" });
  }

  const transporter = createTransport({
    service: "gmail",
    host: String(SMTP_HOST),
    port: Number(SMTP_PORT),
    secure: true,
    auth: {
      user: MAIL_USER,
      pass: MAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  const verify = transporter.verify()
  if (!verify) {
    return res.status(500).json({ message: "Erro ao conectar ao SMTP" });
  }

  try {
    const form = formidable({ multiples: true, keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        return res.status(500).json({ error: "Erro no upload" });
      }

      const {
        nome
        , tel_fixo
        , tel_cel
        , email
        , estado
        , cidade
        , mensagem
      } = fields;
      const file = files.curriculo;

      const text = `
        Nome: ${nome}
        \n Telefone Fixo: ${tel_fixo}
        \n Telefone Celular: ${tel_cel}
        \n E-mail: ${email}
        \n UF: ${estado}
        \n Cidade: ${cidade}
        \n Mensagem: ${mensagem}
      `
      const mailOptions = {
        from: MAIL_USER,
        to,
        subject: `Nova candidatura: ${nome}`,
        text,
        attachments: [
          {
            filename: file.originalFilename,
            path: file.filepath,
          },
        ],
      };

      transporter.sendMail(mailOptions);
      res.status(200).json({ message: "Enviado!" });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error?.message || "Erro ao enviar e-mail" });
  }
}
