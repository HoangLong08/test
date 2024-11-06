import { MetaDataSeo, MetaPagination, ParameterRequestLanguage } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { TranslateType } from '../translation/translation.type';

export interface ItemAboutUs extends MetaDataSeo {
  id: string;
  title: TranslateType;
  description: TranslateType;
  content: TranslateType;
  thumbnail: string;
  slug: string;
  index: number;
  isShowAtHome: boolean;
  isShowAtFooter: boolean;
  isShowAtGetMeasured: boolean;
  extends?: {
    id: string;
    image: string;
    title: TranslateType;
    description: TranslateType;
    rate: number;
    aboutUsId?: string;
    createdAt?: string;
  }[];
}

export interface ItemNews extends MetaDataSeo {
  id: string;
  createdAt: string;
  updatedAt: string;
  index: string;
  thumbnail: string;
  title: TranslateType;
  slug: string;
  description: TranslateType;
  content: TranslateType;
  isActive: boolean;
  isShowAtFooter: boolean;
}

export type GetAboutUsResponse = AxiosResponse<{
  statusCode: number;
  data: ItemAboutUs[];
  meta: MetaPagination;
}>;

export type GetDetailAboutUsResponse = AxiosResponse<{
  data: ItemAboutUs[];
}>;

export type GetFaqsStateReducer = {
  statusCode: number;
  data: ItemAboutUs[];
  meta: MetaPagination;
};

export interface ParameterPost extends MetaDataSeo {
  thumbnail: string;
  title: ParameterRequestLanguage;
  description: ParameterRequestLanguage;
  content: ParameterRequestLanguage;
  extends?: any;
}

export interface ParameterPostExtends {
  image: string;
  title: ParameterRequestLanguage;
  description: ParameterRequestLanguage;
  rate: string;
  aboutUsId?: string;
}

export interface ParameterPutExtends extends Omit<ParameterPostExtends, 'id'> {
  id: string;
}
export interface ParameterPut extends Omit<ParameterPost, 'id'> {
  id: string;
}

export interface ParameterPostNews extends MetaDataSeo {
  thumbnail: string;
  title: ParameterRequestLanguage;
  description: ParameterRequestLanguage;
  content: ParameterRequestLanguage;
}
export interface ParameterPutNews extends Omit<ParameterPostNews, 'id'> {
  id: string;
}

export interface StoreLocationType {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  name?: string;
  image?: string;
  address?: TranslateType;
  email?: string;
  telephone?: string;
  direction?: string;
  whatApps: string;
}

export interface ItemAboutUsExtend {
  id: string;
  createdAt: string;
  updatedAt: string;
  image: string;
  title: TranslateType;
  description: TranslateType;
  rate: number;
}

export type AboutUsStoreLocationStateReducer = {
  listAboutUs: {
    data: ItemAboutUs[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listAboutUsByGetMeasuredForAll: {
    data: ItemAboutUs[];
    load: boolean;
    error: string;
  };

  listAboutUsFooter: {
    data: ItemAboutUs[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailAboutUs: {
    data: ItemAboutUs;
    load: boolean;
    error: string;
  };

  getStoreLocationByAdmin: {
    data: StoreLocationType[];
    load: boolean;
    error: string;
  };

  getStoreLocation: {
    data: StoreLocationType[];
    load: boolean;
    error: string;
  };

  getDetailStoreLocation: {
    data: StoreLocationType;
    load: boolean;
    error: string;
  };

  infoAboutUsShowAtHome: {
    data: ItemAboutUs;
    load: boolean;
    error: string;
  };

  listNews: {
    data: ItemNews[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailNews: {
    data: ItemNews;
    load: boolean;
    error: string;
  };

  listNewsByAdmin: {
    data: ItemNews[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailNewsByAdmin: {
    data: ItemNews;
    load: boolean;
    error: string;
  };

  listNewsFooter: {
    data: ItemNews[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailAboutUsExtend: {
    data: ItemAboutUsExtend;
    load: boolean;
    error: string;
  };
};
