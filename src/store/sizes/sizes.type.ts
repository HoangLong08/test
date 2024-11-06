import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { TranslateType } from '../translation/translation.type';

export type ItemSizes = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
  isActive: boolean;
};

export type GetSizesResponse = AxiosResponse<{
  statusCode: number;
  data: ItemSizes[];
  meta: MetaPagination;
}>;

export type GetDetailSizesResponse = AxiosResponse<{
  data: ItemSizes[];
}>;

export type GetSizesStateReducer = {
  statusCode: number;
  data: ItemSizes[];
  meta: MetaPagination;
};

export interface ParameterPost {
  name: string;
}
export interface ParameterPut extends Omit<ParameterPost, 'id'> {
  id: string;
}

export type ItemSizesGuide = {
  id: string;
  createdAt: string;
  updatedAt: string;
  index: number;
  code: string;
  title: TranslateType;
  content: TranslateType;
};

export interface ParameterPostSizeGuide {
  code: string;
  title: TranslateType;
  content: TranslateType;
}
export interface ParameterPutSizeGuide extends Omit<ParameterPostSizeGuide, 'id'> {
  id: string;
}

export type SizesStateReducer = {
  listSizes: {
    data: ItemSizes[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };
  listSizesByAdmin: {
    data: ItemSizes[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailSizes: {
    data: ItemSizes;
    load: boolean;
    error: string;
  };

  listSizesGuide: {
    data: ItemSizesGuide[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listSizesGuideByAdmin: {
    data: ItemSizesGuide[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailSizesGuide: {
    data: ItemSizesGuide;
    load: boolean;
    error: string;
  };
};
