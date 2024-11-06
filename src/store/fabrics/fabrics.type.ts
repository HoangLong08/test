import { MetaPagination, ParameterGet, ParameterRequestLanguage } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { TranslateType } from '../translation/translation.type';

export interface GroupFabricResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  code: string;
}

export type GetAllGroupFabricResponse = AxiosResponse<{
  statusCode: number;
  data: GroupFabricResponse[];
  meta: MetaPagination;
}>;

export type GetDetailGroupFabricResponse = AxiosResponse<{
  data: GroupFabricResponse;
}>;

export interface ParameterGroupFabricPost {
  name: string;
  code: string;
}

export interface ParameterGroupFabricPut {
  id: string;
  code: string;
  name: string;
}

export type ItemFabrics = {
  id: string;
  createdAt: string;
  updatedAt: string;
  code: string;
  name: TranslateType;
  image: string;
  type: string;
  isActive: true;
  colorCode: string;
  detail: string;
  group: GroupFabricResponse;
};

export type GetFabricsResponse = AxiosResponse<{
  statusCode: number;
  data: ItemFabrics[];
  meta: MetaPagination;
}>;

export type GetDetailFabricsResponse = AxiosResponse<{
  data: ItemFabrics;
}>;

export type GetFabricsStateReducer = {
  statusCode: number;
  data: ItemFabrics[];
  meta: MetaPagination;
};

export interface ParameterPost {
  code?: string;
  name: ParameterRequestLanguage;
  image: string;
  type: string;
  colorCode?: string;
  groupId: string;
  detail: string;
}
export interface ParameterPut extends Omit<ParameterPost, 'id'> {
  id: string;
}

export type FabricsStateReducer = {
  listFabrics: {
    data: ItemFabrics[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listFabricsByAdmin: {
    data: ItemFabrics[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailFabrics: {
    data: ItemFabrics;
    load: boolean;
    error: string;
  };

  listGroupFabricAll: {
    data: GroupFabricResponse[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailGroupFabric: {
    data: GroupFabricResponse;
    load: boolean;
    error: string;
  };
};

export interface ParamGetFabricsAdmin extends ParameterGet {
  type?: string | undefined;
  groupId?: string | undefined;
  sortCode?: string | undefined;
}
