import { MetaPagination } from '@/config/constant';
import { AxiosResponse } from 'axios';

export type ItemSubscriptions = {
  id: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  isActive: boolean;
};

export type GetSubscriptionsResponse = AxiosResponse<{
  statusCode: number;
  data: ItemSubscriptions[];
  meta: MetaPagination;
}>;

export type GetDetailSubscriptionsResponse = AxiosResponse<{
  data: ItemSubscriptions[];
}>;

export interface ParameterPost {
  email: string;
  languageCode: string;
}

export type SubscriptionsStateReducer = {
  listSubscriptions: {
    data: ItemSubscriptions[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailSubscriptions: {
    data: ItemSubscriptions;
    load: boolean;
    error: string;
  };
};
