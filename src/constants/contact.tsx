import React from "react";

import { MessageCircle, Users, UserPlus, AlertOctagon } from "lucide-react";

import links from "./links"

export const contactChannels = [
  {
    link: "/atendimento/sac",
    icon: <MessageCircle className="w-12 h-12 mx-auto md:mx-0" />,
    title: "SAC",
    description:
      "Tem alguma dúvida, sugestão ou reclamação? Nosso time está pronto para te ajudar! Entre em contato e responderemos o mais breve possível.",
    buttonText: "Contatar SAC",
    buttonColor: "bg-primary hover:bg-green-800",
  },
  {
    link: "/atendimento/denuncia",
    icon: <AlertOctagon className="w-12 h-12 mx-auto md:mx-0" />,
    title: "Denuncie",
    description: "Tem algo a reportar ou denunciar, denuncie!",
    buttonText: "Denunciar",
    buttonColor: "bg-primary hover:bg-green-800",
  },
  {
    link: "/atendimento/trabalhe-conosco",
    icon: <Users className="w-12 h-12 mx-auto md:mx-0" />,
    title: "Trabalhe Conosco",
    description:
      "Quer fazer parte do time da Refrigerantes Convenção? Envie seu currículo e acompanhe nossas oportunidades!",
    buttonText: "Enviar Currículo",
    buttonColor: "bg-primary hover:bg-green-800",
  },
  {
    link: links.whatsapp,
    icon: <UserPlus className="w-12 h-12 mx-auto md:mx-0" />,
    title: "Seja um Cliente",
    description:
      "Fale com a gente agora mesmo pelo WhatsApp.",
    buttonText: "Quero ser Cliente",
    buttonColor: "bg-primary hover:bg-green-800",
  },
];
