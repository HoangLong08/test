import { MetaPagination, ParameterRequestLanguage } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { TranslateType } from '../translation/translation.type';

export interface FaqsGroupResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  index: number;
  code: string;
  title: TranslateType;
}

export interface FaqsDetailResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  index: number;
  code: string;
  title: TranslateType;
  faqs: {
    id: string;
    createdAt: string;
    updatedAt: string;
    index: number;
    code: string;
    question: TranslateType;
    answer: TranslateType;
  }[];
}

export type ItemFaqs = {
  id: string;
  question: TranslateType;
  answer: TranslateType;
  createdAt?: string;
  index?: number;
  code?: string;
  group?: FaqsGroupResponse;
};

export type GetFaqsResponse = AxiosResponse<{
  statusCode: number;
  data: ItemFaqs[];
  meta: MetaPagination;
}>;

export type GetDetailFaqsResponse = AxiosResponse<{
  data: ItemFaqs[];
}>;

export type GetFaqsStateReducer = {
  statusCode: number;
  data: ItemFaqs[];
  meta: MetaPagination;
};

export interface ParameterPost {
  code: string;
  groupId: string;
  question: TranslateType;
  answer: TranslateType;
}
export interface ParameterPut extends Omit<ParameterPost, 'id'> {
  id: string;
}

export interface GetFaqsGroupResponse {
  statusCode: number;
  data: FaqsGroupResponse[];
  meta: MetaPagination;
}

export interface ParameterPostFaqsGroup {
  code: string;
  title: ParameterRequestLanguage;
}
export interface ParameterPutFaqsGroup {
  id: string;
  title: ParameterRequestLanguage;
}

export type FaqsStateReducer = {
  listFaqs: {
    data: ItemFaqs[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listFaqsByAdmin: {
    data: ItemFaqs[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailFaqs: {
    data: ItemFaqs;
    load: boolean;
    error: string;
  };

  getGroupFaqs: {
    data: FaqsGroupResponse[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  getGroupFaqsByAdmin: {
    data: FaqsGroupResponse[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  getDetailGroupFaqs: {
    data: FaqsDetailResponse[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  getDetailGroupFaqsById: {
    data: FaqsGroupResponse;
    load: boolean;
    error: string;
  };
};
