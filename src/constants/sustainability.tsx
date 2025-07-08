import React from "react";

import {
  Recycle,
  Droplets,
  Leaf,
  Users,
  Building,
  Lightbulb,
} from "lucide-react";

export const initiatives = [
  {
    icon: <Droplets className="w-12 h-12 mx-auto md:mx-0" />,
    title: "Água e meio ambiente",
    description: [
      "Tratamento das águas residuárias;",
      "Uso de água de reuso em sanitários e áreas externas;",
      "Não utilização de terra diatomácea para filtração;",
      "Plantação de eucaliptos em torno da fábrica.",
    ],
  },
  {
    icon: <Recycle className="w-12 h-12 mx-auto md:mx-0" />,
    highlight: true,
    title: "Consumo consciente",
    description: [
      "Programa nacional de conservação de energia elétrica: iluminação, substituição de lâmpadas incandescentes e fluorescentes por LED.",
      "Caldeiras: uso consciente de gás natural, não poluição do ar atmosférico",
      "Comprometimento com o uso racional de energia elétrica, água e gás natural.",
    ],
  },
  {
    icon: <Recycle className="w-12 h-12 mx-auto md:mx-0" />,
    title: "Reciclagem",
    description: [
      "Reciclagem de todos os materiais resultantes dos processos produtivos: latas de alumínio, madeira, plásticos, papelão, óleo lubrificante e graxas.",
    ],
  },
];

export const practices = [
  {
    icon: <Leaf className="w-8 h-8" />,
    title: "Meio Ambiente",
    description: "Redução de resíduos, logística reversa e reflorestamento.",
  },
  {
    icon: <Building className="w-8 h-8" />,
    title: "Governança",
    description: "Transparência e políticas éticas em todas as operações.",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Social",
    description: "Programas de inclusão e parcerias com comunidades locais.",
  },
  {
    icon: <Lightbulb className="w-8 h-8" />,
    title: "Inovação Sustentável",
    description: "Tecnologia para minimizar impactos ambientais.",
  },
];
