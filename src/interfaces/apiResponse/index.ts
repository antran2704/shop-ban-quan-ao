export interface ISubCategories {
  _id: string;
  label: string;
  slug: string;
}

export interface IFilterCategory {
  title: string;
  listFilterItem: string[];
}

// interface data Categories
export interface ICategory {
  _id: string;
  title: string;
  thumbnail: string;
  createdAt: string;
  updatedAt: string;
  slug: string;
  subCategories: ISubCategories[];
  filters: IFilterCategory[];
}

export interface IProduct {
  name: string;
  category: string;
  shortDescription: string;
  description: string;
  price: number;
  promotionPrice: number;
  thumbnail: string;
  listImages: string[];
  hotProduct: boolean;
  quantity: number;
  sold: number;
  outOfStock: boolean;
  viewer: number;
  stars: number;
  brand: string;
  listSizes: [
    {
      value: string;
      outOfStock: boolean;
    }
  ];
  listColors: [
    {
      value: string;
      outOfStock: boolean;
    }
  ];
  slug: string;
}

export interface ICategoryPayload {
  status: number;
  payload: ICategory[];
}
