import { MetaPagination, ParameterGet, ParameterRequestLanguage } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { TranslateType } from '../translation/translation.type';

export type ItemProducts = {
  id: string;
  createdAt: string;
  updatedAt: string;
  code: string;
  name: TranslateType;
  priority: string;
  thumbnail: string;
  images: string[];
  description: TranslateType;
  slug: string;
  isActive: boolean;
  weight: number;
  favorite: number;
  ribbonIds: string[];
  reviewQuestionIds: string[];
  catalogs: {
    id: string;
    createdAt: string;
    updatedAt: string;
    catalog: {
      id: string;
      createdAt: string;
      updatedAt: string;
      code: string;
      name: TranslateType;
      slug: string;
      index: 8.001;
    };
    catalogDetail: {
      id: string;
      createdAt: string;
      updatedAt: string;
      code: string;
      name: TranslateType;
      slug: string;
      index: number;
    };
  }[];
  detail: {
    id: string;
    createdAt: string;
    updatedAt: string;
    amount: number;
    discountPercentage: number;
    saleOffText: string;
    tien: number;
    // tienGiamGia: number;
    isQuoteLater: boolean;
    size: {
      id: number;
      createdAt: string;
      updatedAt: string;
      name: string;
    };
    fabric: {
      id: string;
      createdAt: string;
      updatedAt: string;
      code: string;
      name: TranslateType;
      image: string;
      type: string;
      isActive: true;
    };
  }[];
  mixMatch?: {
    id: string;
    product: {
      code: string;
      id: string;
      name: TranslateType;
      slug: string;
    };
  }[];

  seoKeywords?: string;
  seoTitle?: string;
  seoDescription?: string;
};

export type GetDetailProductsResponse = AxiosResponse<{
  data: ItemProducts[];
}>;

export type GetProductsStateReducer = {
  statusCode: number;
  data: ItemProducts[];
  meta: MetaPagination;
};

export interface ParameterPost {
  code: string;
  name: ParameterRequestLanguage;
  thumbnail: string;
  favorite: number;
  images: string[];
  priority: string;
  description: ParameterRequestLanguage;
  weight: number;
  ribbonIds: string[];
  catalogIds: {
    catalogId: string;
    catalogDetailId?: string;
  };
  detail: {
    amount: number;
    discountPercentage: number;
    saleOffText: string;
    tien: number;
    sizeId: string;
    fabricId: string;
    isMadeToMeasureSize: boolean;
    isSpecialFabric: boolean;
  }[];
  mixMatchIds?: string[];
  seoKeywords: string;
  seoTitle: string;
  seoDescription: string;
}
export interface ParameterPut extends Omit<ParameterPost, 'id'> {
  id: string;
}

export interface ParameterPostProductSoLike {
  id: string;
  productIds: string[];
  catalogIds: string[];
  catalogDetailIds?: string[];
}

export type ItemProductsHome = {
  code: string;
  createdAt: string;
  detail: {
    amount: number;
    discountPercentage: number;
    id: string;
    tien: number;
    // tienGiamGia: number;
    isQuoteLater: boolean;
    fabric: {
      id: string;
      name: TranslateType;
      type: string;
      code: string;
      image: string;
    };
    size: {
      id: string;
      name: string;
    };
    saleOffText: string;
    tienUocTinh: number;
    estimatedAmount: number;
  };
  fabricQuantity: number;
  favorite: number;
  id: string;
  updatedAt: string;
  name: TranslateType;
  ribbonIds: string[];
  slug: string;
  thumbnail: string;
  weight: number;
};

export interface ProductByGroupCatalog {
  catalogDetail: {
    id: string;
    name: TranslateType;
    slug: string;
  };
  value: ItemProductsHome[];
}

export interface ProductsAllForDropdown {
  productId: string;
  productCode: string;
}

export type GetProductsResponse = AxiosResponse<{
  statusCode: number;
  data: ItemProductsHome[];
  meta: MetaPagination;
}>;

export type GetProductsByGroupCatalogResponse = AxiosResponse<{
  data: ProductByGroupCatalog[];
}>;

export type ItemProductByAllCatalogs = {
  catalog: {
    id: string;
    code: string;
    name: TranslateType;
    slug: string;
    index: number;
    isActive: true;
  };
  products: ItemProductsHome[];
};

export interface ItemTracking {
  id: string;
  createdAt: string;
  updatedAt: string;
  sourceFolder: string;
  byUserId: string;
  byUserName: string;
  byUserEmail: string;
  successCount: number;
  failedCount: 0;
  type: number;
}

export type ProductsStateReducer = {
  listProducts: {
    data: ItemProducts[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listProductsByAdmin: {
    data: ItemProducts[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listProductAtHomePage: {
    data: {
      data: ItemProductsHome[];
    }[];
    load: boolean;
    error: string;
  };

  detailProducts: {
    data: ItemProducts;
    load: boolean;
    error: string;
  };

  detailProductsByAdmin: {
    data: ItemProducts;
    load: boolean;
    error: string;
  };

  listProductsMixAndMatch: {
    data: ItemProductsHome[];
    load: boolean;
    error: string;
  };

  listProductsAlsoLike: {
    data: ItemProductsHome[];
    load: boolean;
    error: string;
  };

  listProductsFilter: {
    data: ItemProductsHome[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listProductsFilterByGroupCatalog: {
    data: ProductByGroupCatalog[];
    load: boolean;
    error: string;
  };

  productsAllForDropdownByAdmin: {
    data: ProductsAllForDropdown[];
    load: boolean;
    error: string;
  };

  productByAllCatalogs: {
    data: ItemProductByAllCatalogs[];
    load: boolean;
    error: string;
  };

  listS3Tracking: {
    data: ItemTracking[];
    load: boolean;
    error: string;
  };
};

export interface PatchMultiDeleteProduct {
  isActive: boolean;
  productIds: string[];
  productCode: string[];
}

export interface BodyFilterSearch extends ParameterGet {
  catalogIds?: string[];
  catalogDetailIds?: string[];
  ribbons?: string[];
  sortByPrice?: string;
  isActive?: boolean;
  lowestPriceVND?: string | number;
  highestPriceVND?: number;
  lowestPriceUSD?: string | number;
  highestPriceUSD?: number;
  catalogId?: string;
  language?: string;
}

export interface BodyFilterGroupSearch {
  catalogIds?: string[];
  catalogDetailIds?: { id: string; name: TranslateType; slug: string }[];
  catalogId?: string;
}

export interface ParamGetProductAdmin extends ParameterGet {
  code?: string | undefined;
  catalogId?: string | undefined;
  sortCode?: string | undefined;
}
