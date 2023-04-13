import { INavItem } from "./interface";

export const initItemMobile: INavItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Design",
    path: "/design",
  },
  {
    name: "Collections",
    path: "/collections",
    children: [
      {
        name: "Accessories",
        path: "/collections/accessories",
      },
      {
        name: "Garden Decor",
        path: "/collections/garden-decor",
      },
      {
        name: "Gift",
        path: "/collections/gift",
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

export const initItemDesktop: INavItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Design",
    path: "/design",
  },
  {
    name: "Collections",
    path: "/collections",
    megaMenu: [
      {
        title: "Test",
        items: [
          {
            name: "Accessories",
            path: "/collections/accessories",
          },
          {
            name: "Garden Decor",
            path: "/collections/garden-decor",
          },
          {
            name: "Gift",
            path: "/collections/gift",
          },
        ],
      }
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
