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
    return res.status(500).json({ message: "E-mail de destino não informado" });
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
  try {
    const transporter = createTransport(objTransporter);

    const verify = await transporter.verify()
    if (!verify) {
      console.error("Erro ao conectar ao SMTP")
      console.error(objTransporter)
      return res.status(500).json({ message: "Erro ao conectar ao SMTP" });
    }

    const form = formidable({ multiples: true, keepExtensions: true });

    form.parse(req, async (err, fields, files) => {
      if (err) {
        console.error("Erro ao fazer parse do formulário")
        console.error(err)
        return res.status(500).json({ error: "Erro no upload" });
      }

      let text = '';
      text += `\nNome: ${fields.nome}`;
      text += `\nTelefone Fixo: ${fields.tel_fixo}`;
      text += `\nTelefone Celular: ${fields.tel_cel}`;
      text += `\nE-mail: ${fields.email}`;
      text += `\nUF: ${fields.estado}`;
      text += `\nCidade: ${fields.cidade}`;
      text += `\nMensagem: ${fields.mensagem}`;

      const file = files.curriculo[0];

      const mailOptions = {
        from: MAIL_USER,
        to,
        subject: `Nova candidatura: ${fields.nome}`,
        text,
        attachments: [
          {
            filename: file.originalFilename,
            path: file.filepath,
          },
        ],
      };

      console.log(`[SEND]: Enviando e-mail para de '${MAIL_USER}' para '${to}'`)
      await transporter.sendMail(mailOptions);

      res.status(200).json({ message: "Enviado!" });
    });
  } catch (error) {
    console.error("Erro ao enviar e-mail do formulário")
    console.error(error, objTransporter);
    res.status(500).json({ error: error?.message || "Erro ao enviar e-mail" });
  }
}
