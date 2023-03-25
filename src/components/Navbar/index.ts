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

export const initItemDesktop: INavItem[] = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "Design",
    path: "/design",
    megaMenu: [
      {
        title: "Cakes",
        items: [
          {
            name: "Architecture Art",
            path: "/",
          },
          {
            name: "Literature Art",
            path: "/",
          },
          {
            name: "Theater Art",
            path: "/",
          },
        ],
      },
      {
        title: "Arts",
        items: [
          {
            name: "Architecture Art",
            path: "/",
          },
          {
            name: "Literature Art",
            path: "/",
          },
          {
            name: "Theater Art",
            path: "/",
          },
        ],
      },
    ],
  },
  {
    name: "Collections",
    path: "/collections",
    megaMenu: [
      {
        title: "Test",
        items: [
          {
            name: "Test",
            path: "/collections/test",
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
