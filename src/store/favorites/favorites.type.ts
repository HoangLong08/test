import { MetaPagination, ParameterGet } from '@/config/constant';
import { TranslateType } from '../translation/translation.type';

export interface ProductFavorite {
  id: string;
  createdAt: string;
  user: {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
  product: {
    id: string;
    name: TranslateType;
    thumbnail: string;
  };
}

export interface Product {
  id: string;
  createdAt: string;
  code: string;
  name: TranslateType;
  slug: string;
  thumbnail: string;
  favorite: number;
  ribbonIds: string[];
  detail: {
    id: string;
    amount: number;
    discountPercentage: number;
    tien: number;
    // tienGiamGia: number;
    size: {
      id: string;
      name: string;
    };
    fabric: {
      id: string;
      name: TranslateType;
      type: string;
      image: string;
      code: string;
    };
    isQuoteLater: boolean;
    saleOffText: string;
    tienUocTinh: number;
    estimatedAmount: number;
  };
  weight: number;
}

export interface ProductFavoriteUser {
  id: string;
  createdAt: string;
  updatedAt: string;
  product: Product;
}

export interface ParamSearchFavorites extends ParameterGet {
  userId: string;
}

export interface GetListProductFavoriteResponse {
  statusCode: number;
  data: ProductFavorite[];
  meta: MetaPagination;
}

export interface GetDetailProductFavoriteResponse {
  data: ProductFavorite;
}

export interface FavoritesStateReducer {
  listMyFavorites: {
    data: ProductFavoriteUser[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listFavoritesByAdmin: {
    data: ProductFavorite[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  myIdsProductFavorites: {
    data: string[];
    load: boolean;
    error: string;
  };

  detailFavorites: {
    data: ProductFavorite;
    load: boolean;
    error: string;
  };
}
