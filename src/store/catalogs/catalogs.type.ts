import { AxiosResponse } from 'axios';
import { MetaDataSeo, ParameterRequestLanguage } from '@/config/constant';
import { TranslateType } from '../translation/translation.type';

export interface SubCatalog {
  id: string;
  createdAt: string;
  updatedAt: string;
  code: string;
  name: TranslateType;
  slug: string;
  index: number;
  isActive: boolean;
}

export interface ItemCatalog extends MetaDataSeo {
  id: string;
  createdAt: string;
  updatedAt: string;
  code: string;
  name: TranslateType;
  slug: string;
  index: number;
  isActive: boolean;
  catalogs: SubCatalog[];
}

export type GetCatalogsGroupAllResponse = AxiosResponse<{
  statusCode: number;
  data: ItemCatalog[];
}>;

export type GetDetailCatalogsMainResponse = AxiosResponse<{
  data: ItemCatalog;
}>;

export interface ParameterPost extends MetaDataSeo {
  code: string;
  name: ParameterRequestLanguage;
  detail: {
    code: string;
    name: ParameterRequestLanguage;
    seoKeywords?: string;
    seoTitle?: string;
    seoDescription?: string;
  };
}

export interface ParameterPostSub extends MetaDataSeo {
  code: string;
  name: ParameterRequestLanguage;
  catalogId: string;
}

export interface ParameterPut extends MetaDataSeo {
  id: string;
  code?: string;
  name: ParameterRequestLanguage;
}

export interface ParameterPutSub extends MetaDataSeo {
  id: string;
  code?: string;
  name: ParameterRequestLanguage;
  catalogId: string;
}

export type CatalogsStateReducer = {
  listCatalogsGroupAll: {
    data: ItemCatalog[];
    load: boolean;
    error: string;
  };

  listCatalogsGroupAllByAdmin: {
    data: ItemCatalog[];
    load: boolean;
    error: string;
  };

  detailCatalogsMain: {
    data: ItemCatalog;
    load: boolean;
    error: string;
  };

  detailCatalogsSub: {
    data: ItemCatalog;
    load: boolean;
    error: string;
  };
};
