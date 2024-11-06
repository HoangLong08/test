import { MetaPagination, ParameterGet } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { TranslateType } from '../translation/translation.type';

export type ItemNational = {
  id: string;
  createdAt: string;
  updatedAt: string;
  zipCode: string;
  name: string;
};

export type GetNationalResponse = AxiosResponse<{
  statusCode: number;
  data: ItemNational[];
  meta: MetaPagination;
}>;

export type GetDetailNationalResponse = AxiosResponse<{
  data: ItemNational[];
}>;

export interface ParameterPostNational {
  name: string;
  zipCode: string;
}

export interface ParameterPutNational extends Omit<ParameterPostNational, 'id'> {
  id: string;
}

export interface ParameterPostExcelImportPostalService {
  effectiveDate: string;
  expirationDate: string;
  file: File;
}

export interface ParameterPostPostalTariff {
  weight: number;
  express: number;
  subEco: number;
  airMail: number;
  effectiveDate: string;
  expirationDate: string;
  nationalId: string;
  excelCode: string;
}

export interface ParameterPutPostalTariff extends Omit<ParameterPostPostalTariff, 'id'> {
  id: string;
}

export type IShippingEstimate = {
  // id: string;
  [key: string]: number;
};

export type ItemPostalTariff = {
  excelCode: string;
  effectiveDate: string;
  expirationDate: string;
  metaData: {
    id: string;
    createdAt: string;
    deleteAt: string | null;
    updatedAt: string;
    effectiveDate: string;
    excelCode: string;
    expirationDate: string;
    weight: number;
    express: number;
    subEco: number;
    airMail: number;
  }[];
};

export interface ExtendedParameterGetDomesticPostals extends ParameterGet {
  weight?: number;
}

export type ItemDomesticPostal = {
  excelCode: string;
  effectiveDate: string;
  expirationDate: string;
  metaData: {
    id: string;
    createdAt: string;
    updatedAt: string;
    weight: number;
    intraProvinces: number;
    intraDomain: number;
    nearDomain: number;
    HaNoi_DaNang_HCM: number;
  }[];
};

export type ItemNotice = {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  type: string;
  notice: TranslateType;
};

export interface ParameterPostExcelImportDomesticPostal {
  effectiveDate: string;
  expirationDate: string;
  file: File;
}

export type NationalStateReducer = {
  listNational: {
    data: ItemNational[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listNationalByAdmin: {
    data: ItemNational[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  detailNational: {
    data: ItemNational;
    load: boolean;
    error: string;
  };

  listPostalTariffByIdNationalAdmin: {
    data: ItemPostalTariff[];
    load: boolean;
    error: string;
  };

  listDomesticPostal: {
    data: ItemDomesticPostal[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  listDomesticPostalByAdmin: {
    data: ItemDomesticPostal[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  noticeNation: {
    data: ItemNotice;
    load: boolean;
    error: string;
  };

  noticeInternal: {
    data: ItemNotice;
    load: boolean;
    error: string;
  };

  shippingEstimate: {
    data: IShippingEstimate;
    load: boolean;
    error: string;
  };

  shippingEstimateDomestics: {
    data: IShippingEstimate;
    load: boolean;
    error: string;
  };
};
