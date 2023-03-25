export interface INavItem {
  name: string;
  path: string;
  children?: INavItem[];
  megaMenu?: IMegaItem[];
}

export interface IMegaItem {
    title: string;
    items: INavItem[];
}