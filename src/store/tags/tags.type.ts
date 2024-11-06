import { MetaPagination, ParameterRequestLanguage } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { TranslateType } from '../translation/translation.type';

export type ItemTags = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: TranslateType;
  color: string;
  isActive: boolean;
  background: string;
  code: string;
};

export type GetTagsResponse = AxiosResponse<{
  statusCode: number;
  data: ItemTags[];
  meta: MetaPagination;
}>;

export type GetDetailTagsResponse = AxiosResponse<{
  data: ItemTags[];
}>;

export interface ParameterPost {
  code?: string;
  name: ParameterRequestLanguage;
  color: string;
  background: string;
}
export interface ParameterPut extends Omit<ParameterPost, 'id'> {
  id: string;
}

export type TagsStateReducer = {
  listTags: {
    data: ItemTags[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listTagsByAdmin: {
    data: ItemTags[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailTags: {
    data: ItemTags;
    load: boolean;
    error: string;
  };
};
