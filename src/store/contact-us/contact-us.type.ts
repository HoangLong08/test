import { AxiosResponse } from 'axios';
import { MetaPagination } from '@/config/constant';

// eslint-disable-next-line no-shadow
export enum ContactUsStatus {
  NEW = 'NEW',
  PROCESSING = 'PROCESSING',
  COMPLETED = 'COMPLETED',
  CANCELED = 'CANCELED',
}

export interface ContactUsResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  code: number;
  email: string;
  fullName: string;
  phoneNumber: string;
  message: string;
  status: string;
}

export type GetAllContactUsResponse = AxiosResponse<{
  statusCode: number;
  data: ContactUsResponse[];
  meta: MetaPagination;
}>;

export type GetDetailContactUsResponse = AxiosResponse<{
  data: ContactUsResponse;
}>;

export interface ParameterPost {
  email: string;
  fullName: string;
  phoneNumber: string;
  message: string;
}

export interface ParameterPut {
  id: string;
  status: string;
}

export interface ParameterPatchMultiDelete {
  contactUsIds: string[];
}

export type ContactUsReducer = {
  listContactUsAll: {
    data: ContactUsResponse[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailContactUs: {
    data: ContactUsResponse;
    load: boolean;
    error: string;
  };
};
