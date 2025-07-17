import React from "react";

import { Droplets, Zap } from "lucide-react";

import refrigeranteGuarana from "../assets/produtos/refrigerante-guarana.png";
import refrigeranteGuaranaZero from "../assets/produtos/refrigerante-guarana-zero.png";
import refrigeranteFrutaina from "../assets/produtos/refrigerante-frutaina.png";
import refrigeranteLaranja from "../assets/produtos/refrigerante-laranja.png";
import refrigeranteUva from "../assets/produtos/refrigerante-uva.png";
import refrigeranteVitts from "../assets/produtos/refrigerante-vitts.png";
import refrigeranteAbacaxi from "../assets/produtos/refrigerante-abacaxi.png";
import refrigeranteLimao from "../assets/produtos/refrigerante-limao.png";
import refrigeranteCola from "../assets/produtos/refrigerante-cola.png";

import especialChinotto from "../assets/produtos/especial-chinotto.png";
import especialEnergéticoMSX from "../assets/produtos/especial-energético-msx.png";
import especialEnergético2LMSX from "../assets/produtos/especial-energético-msx-2l.png";

export const productCategories = [
  {
    icon: <Droplets className="w-12 h-12" />,
    name: "refrigerantes",
    title: "Refrigerantes",
    description: "Versão tradicional em PET",
    color: "bg-green-500",
    products: [
      {
        name: "guarana",
        label: "Guaraná",
        description:
          "O Guaraná Convenção é o refrigerante popular queridinho dos brasileiros. Juntamos a super energia contagiante do guaraná com o sabor inconfundível de Convenção. Essa mistura é suficiente para dar aquele gostinho de quero mais.",
        image: refrigeranteGuarana,
        sizes: ["350ml", "600ml", "2 litros"],
        energyValue: ["28kcal", "56kcal", "3"],
        carbohydrates: ["7g", "14g", "5"],
        totalSugars: ["7g", "14g", ""],
        addedSugars: ["7g", "14g", "28"],
        sodium: ["18mg", "36mg", "2"],
      },
      {
        name: "guarana-zero",
        label: "Guaraná Zero Açúcar",
        description: "",
        image: refrigeranteGuaranaZero,
        sizes: [""],
        energyValue: ["", "", ""],
        carbohydrates: ["", "", ""],
        totalSugars: ["", "", ""],
        addedSugars: ["", "", ""],
        sodium: ["7,3mg", "", ""],
      },
      {
        name: "frutaina",
        label: "Frutaína",
        description:
          "É nostalgia pura! Falar desse refrigerante é lembrar da infância. A Frutaína Convenção é o mix de diferentes sabores de refrigerantes: guaraná, maçã e limão. Tudo disponível em tamanhos diferentes para cada sede. Cada gole é uma nova lembrança!",
        image: refrigeranteFrutaina,
        sizes: ["350ml", "600ml", "2 litros"],
        energyValue: ["28kcal", "56kcal", "3"],
        carbohydrates: ["7g", "14g", "5"],
        totalSugars: ["7g", "14g", ""],
        addedSugars: ["7g", "14g", "28"],
        sodium: ["18mg", "36mg", "2"],
      },
      {
        name: "laranja",
        label: "Laranja",
        description:
          "O favorito suco de laranja com o sabor Convenção, duas combinações extremamente brasileiras. Uma ótima pedida para a sua mesa!",
        image: refrigeranteLaranja,
        sizes: ["350ml", "600ml", "2 litros"],
        energyValue: ["28kcal", "56kcal", "3"],
        carbohydrates: ["7g", "14g", "5"],
        totalSugars: ["7g", "14g", ""],
        addedSugars: ["7g", "14g", "28"],
        sodium: ["18mg", "36mg", "2"],
      },
      {
        name: "uva",
        label: "Uva",
        description:
          "O Convenção uva é a união perfeita do suco de uva com o sabor Convenção. Gostoso em qualquer momento e lugar, perfeito para dividir com os amigos e família.",
        image: refrigeranteUva,
        sizes: ["350ml", "600ml", "2 litros"],
        energyValue: ["28kcal", "56kcal", "3"],
        carbohydrates: ["7g", "14g", "5"],
        totalSugars: ["7g", "14g", ""],
        addedSugars: ["7g", "14g", "28"],
        sodium: ["18mg", "36mg", "2"],
      },
      {
        name: "limao",
        label: "Limão",
        description:
          "A união perfeita entre azedinho da fruta e o sabor Convenção. Refrescante e único, assim é o limão Convenção",
        image: refrigeranteLimao,
        sizes: ["600ml", "2 litros"],
        energyValue: ["28kcal", "56kcal", "3"],
        carbohydrates: ["7g", "14g", "5"],
        totalSugars: ["7g", "14g", ""],
        addedSugars: ["7g", "14g", "28"],
        sodium: ["19mg", "38mg", "2"],
      },
      {
        name: "vitts",
        label: "Vitt's",
        description:
          "O Vitt's Convenção é o sabor cítrico do limão com toque Convenção. Pode ser consumido puro ou misturado a alguma outra bebida. Perfeito para refrescar o seu dia!",
        image: refrigeranteVitts,
        sizes: ["350ml", "600ml", "2 litros"],
        energyValue: ["28kcal", "56kcal", "3"],
        carbohydrates: ["7g", "14g", "5"],
        totalSugars: ["7g", "14g", ""],
        addedSugars: ["7g", "14g", "28"],
        sodium: ["19mg", "38mg", "2"],
      },
      {
        name: "abacaxi",
        label: "Abacaxi",
        description:
          "O Abacaxi Convenção é um refrigerante ímpar. Com sabor marcante e sem igual, o difícil vai ser dividir.",
        image: refrigeranteAbacaxi,
        sizes: ["350ml", "600ml", "2 litros"],
        energyValue: ["89kcal/374kJ", "", "3"],
        carbohydrates: ["22g", "", "5"],
        totalSugars: ["22g", "", ""],
        addedSugars: ["", "", ""],
        sodium: ["15mg", "", "1%"],
      },
      {
        name: "cola",
        label: "Cola",
        description:
          "O refrigerante cola Convenção possui uma formulação exclusiva que vai te conquistar. Saia da rotina e experimente o novo.",
        image: refrigeranteCola,
        sizes: ["350ml", "600ml", "2 litros"],
        energyValue: ["92kcal/386kJ", "", "5%"],
        carbohydrates: ["23g", "", "5"],
        totalSugars: ["23g", "", ""],
        addedSugars: ["", "", ""],
        sodium: ["8mg", "", "0%"],
      },
    ],
  },
  {
    icon: <Zap className="w-12 h-12" />,
    name: "especial",
    title: "Bebidas Especiais",
    description: "Inovação e sabores únicos",
    color: "bg-red-500",
    products: [
      {
        name: "msx-convencao",
        label: "Energético MSX 269 ml",
        description:
          "Bebida sem conservantes e funcional, desenvolvida com ingredientes estimulantes e termogênicos para dar um up na sua energia. Temos a quantidade ideal para cada ocasião. MSX, liberte seu instinto",
        image: especialEnergéticoMSX,
        sizes: ["269ml", "2 litros"],
        energyValue: ["89", "178", "9%"],
        carbohydrates: ["7", "14", "5"],
        totalSugars: ["7g", "14g", ""],
        addedSugars: ["7g", "14g", "28"],
        sodium: ["14mg", "38mg", "2"],
        vitaminaB2: ["0,48mg", "1mg", "100%"],
        vitaminaB3: ["7mg", "13mg", "100%"],
        vitaminaB5: ["2mg", "4mg", "100%"],
        vitaminaB6: ["0.52mg", "1mg", "100%"],
        vitaminaB12: ["0.50mgc", "1mgc", "100%"],
      },
       {
        name: "msx-convencao_2L",
        label: "Energético MSX 2L",
        description:
          "Bebida sem conservantes e funcional, desenvolvida com ingredientes estimulantes e termogênicos para dar um up na sua energia. Temos a quantidade ideal para cada ocasião. MSX, liberte seu instinto",
        image: especialEnergético2LMSX,
        sizes: ["269ml", "2 litros"],
        energyValue: ["89", "178", "9%"],
        carbohydrates: ["7", "14", "5"],
        totalSugars: ["7g", "14g", ""],
        addedSugars: ["7g", "14g", "28"],
        sodium: ["14mg", "38mg", "2"],
        vitaminaB2: ["0,48mg", "1mg", "100%"],
        vitaminaB3: ["7mg", "13mg", "100%"],
        vitaminaB5: ["2mg", "4mg", "100%"],
        vitaminaB6: ["0.52mg", "1mg", "100%"],
        vitaminaB12: ["0.50mgc", "1mgc", "100%"],
      },
      {
        name: "chinotto",
        label: "Chinotto",
        description:
          "Nossa bebida de origem italiana. Composta por extratos vegetais e ervas aromáticas, perfeita para ser consumida após as refeições. O verdadeiro sabor da Itália em 269ml de puro sabor.",
        image: especialChinotto,
        sizes: ["269ml"],
        energyValue: ["28kcal", "75kcal", "4"],
        carbohydrates: ["7g", "19g", "6"],
        totalSugars: ["7g", "19g", ""],
        addedSugars: ["7g", "19g", "38"],
        sodium: ["12mg", "32mg", "2"],
      },
    ],
  },
];
