import { INavItem } from "./interface";

export const initItemMobile: INavItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Design",
    path: "/design",
    children: [
      {
        name: "Design 2",
        path: "/design2",
      },
    ],
  },
  {
    name: "Collections",
    path: "/collections",
    children: [
      {
        name: "Test",
        path: "/collections/test",
      },
    ],
  },
  {
    name: "About Us",
    path: "/aboutUs",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];
