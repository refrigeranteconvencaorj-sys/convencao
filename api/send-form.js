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

  const MAIL_HOST = process.env.MAIL_HOST
  const MAIL_PORT = process.env.MAIL_PORT
  const MAIL_USER = process.env.MAIL_USER
  const MAIL_PASS = process.env.MAIL_PASS
  const MAIL_SECURE = process.env.MAIL_SECURE
  if (!MAIL_HOST || !MAIL_PORT || !MAIL_USER || !MAIL_PASS) {
    return res.status(500).json({ message: "Dados do e-mail de envio não informados" });
  }

  const objTransporter = {
    service: "gmail",
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
  }
  const transporter = createTransport(objTransporter);

  const verify = await transporter.verify()
  if (!verify) {
    return res.status(500).json({ message: "Erro ao conectar ao SMTP", objTransporter });
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

      console.log(`[SEND]: Enviando e-mail para de '${MAIL_USER}' para '${to}'`)
      const result = await transporter.sendMail(mailOptions);
      console.log(result)
      res.status(200).json({ message: "Enviado!", mailOptions });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error?.message || "Erro ao enviar e-mail" });
  }
}
