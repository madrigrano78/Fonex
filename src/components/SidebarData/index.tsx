import React from "react";
import * as BsIcons from "react-icons/bs";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Fones",
    icon: <BsIcons.BsHeadphones />,
    path: "/headphone",
  },
  {
    title: "Comparação",
    icon: <BsIcons.BsFillBarChartFill />,
    path: "/compare",
  },
  {
    title: "Vendas",
    icon: <AiIcons.AiFillPieChart />,
    path: "/sales",
  },
  {
    title: "Sobre mim",
    icon: <BsIcons.BsFillExclamationDiamondFill />,
    path: "/about",
  },
];
