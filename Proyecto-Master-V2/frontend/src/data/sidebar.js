import { FaTh, FaRegChartBar, FaCommentAlt } from "react-icons/fa";
import { BiImageAdd } from "react-icons/bi";

const menu = [
  {
    title: "Panel de Control",
    icon: <FaTh />,
    path: "/dashboard",
  },
  {
    title: "Añadir productos",
    icon: <BiImageAdd />,
    path: "/add-product",
  },
  {
    title: "Cuenta de usuario",
    icon: <FaRegChartBar />,
    childrens: [
      {
        title: "Perfil",
        path: "/profile",
      },
      {
        title: "Editar Perfil",
        path: "/edit-profile",
      },
    ],
  },
  {
    title: "Report Bug",
    icon: <FaCommentAlt />,
    path: "/contact-us",
  },
];

export default menu;
