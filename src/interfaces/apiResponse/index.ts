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

export interface ICategoryPayload {
    status: number;
    payload: ICategory[];
}