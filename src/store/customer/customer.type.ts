import { AxiosResponse } from 'axios';

export type ParamPostCustomer = {
  name: string;
  image: string;
  description: string;
};

export type ParamPutCustomer = {
  name: string;
  image: string;
  description: string;
  id: string;
};

export type PutCustomer = {
  messageCode: string;
};

export type PutCustomerResponse = AxiosResponse<PutCustomer>;

export type PostCustomerResponse = AxiosResponse<{
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    image: string;
    description: string;
  };
}>;

export type GetCustomerResponse = AxiosResponse<{
  statusCode: number;
  data: {
    id: string;
    createdAt: string;
    updatedAt: string;
    name: string;
    image: string;
    description: string;
  };
  meta: {
    page: number;
    take: number;
    itemCount: number;
    pageCount: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };
}>;

export type MetaCustomer = {
  page?: number;
  take?: number;
  itemCount?: number;
  pageCount?: number;
  hasPreviousPage?: boolean;
  hasNextPage?: boolean;
};

export type ParamGetCustomer = {
  order: '' | 'ASC' | 'DESC';
  page: number;
  take: number;
  searchKey: string;
};

export type ItemCustomer = {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  image: string;
  description: string;
};

export type DeleteCustomerResponse = {
  statusCode: number;
  messageCode: string;
  data: {};
};

export type DetailCustomer = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: null | string;
  name: string;
  image: string;
  description: string;
};

export type GetDetailCustomerResponse = AxiosResponse<{
  data: DetailCustomer;
}>;

export interface CustomerState {
  listCustomer: {
    data: ItemCustomer[];
    meta: MetaCustomer;
    load: boolean;
    error: string;
  };
  detailCustomer: {
    data: DetailCustomer;
    load: boolean;
    error: string;
  };
  deleteCustomer: {
    data: {};
    load: boolean;
  };
  putCustomer: {
    load: boolean;
    data: {};
    messageCode: string;
    error: string;
  };
  postCustomer: {
    load: boolean;
    data: {};
    error: string;
  };
}
