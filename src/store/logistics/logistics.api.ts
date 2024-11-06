import { instanceAxios } from '@/config/axios';
import { ParameterGet, ParameterRequestLanguage } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import omit from 'lodash/omit';
import {
  ExtendedParameterGetDomesticPostals,
  GetDetailNationalResponse,
  GetNationalResponse,
  ParameterPostExcelImportDomesticPostal,
  ParameterPostExcelImportPostalService,
  ParameterPostNational,
  ParameterPostPostalTariff,
  ParameterPutNational,
  ParameterPutPostalTariff,
} from './logistics.type';

const logistics = {
  getNational(): Promise<GetNationalResponse> {
    const url = `/nationals`;
    return instanceAxios.get(url);
  },

  getNationalByAdmin(params: ParameterGet): Promise<GetNationalResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/nationals/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  postNational(params: ParameterPostNational): Promise<GetNationalResponse> {
    const url = `/nationals`;
    return instanceAxios.post(url, params);
  },

  postExcelImportPostalService(params: ParameterPostExcelImportPostalService): Promise<any> {
    const url = `/nationals/${params.effectiveDate}/effective/${params.expirationDate}/expiration/excel-imports`;
    const formData = new FormData();
    formData.append('files', params.file);
    return instanceAxios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  getDetailNationalById(id: string): Promise<GetDetailNationalResponse> {
    const url = `/nationals/${id}`;
    return instanceAxios.get(url);
  },

  putNational(params: ParameterPutNational): Promise<GetNationalResponse> {
    const url = `/nationals/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  deleteNational(id: string): Promise<any> {
    const url = `/nationals/${id}`;
    return instanceAxios.delete(url);
  },

  getPostalTariffByIdNationalAdmin(nationalId: string): Promise<any> {
    const url = `/nationals/${nationalId}/postal-tariff/by-admin`;
    return instanceAxios.get(url);
  },

  getDetailPostalTariff(id: string): Promise<any> {
    const url = `/nationals/${id}/postal-tariff`;
    return instanceAxios.get(url);
  },

  postDetailPostalTariff(params: ParameterPostPostalTariff): Promise<any> {
    const url = `/nationals/postal-tariff`;
    return instanceAxios.post(url, params);
  },

  putDetailPostalTariff(params: ParameterPutPostalTariff): Promise<any> {
    const url = `/nationals/${params.id}/postal-tariff`;
    return instanceAxios.put(url, omit(params, 'id', 'excelCode', 'nationalId'));
  },

  deletePostalTariff(params: {
    nationalId: string;
    excelCode: string;
    fromDate: string;
    toDate: string;
  }): Promise<any> {
    const url = `/nationals/postal-tariff/${params.nationalId}/national/${params.excelCode}/excel-code/${params.fromDate}/from-date/${params.toDate}/to-date`;
    return instanceAxios.delete(url);
  },

  deletePostalTariffSmall(id: string): Promise<any> {
    const url = `/nationals/${id}/postal-tariff`;
    return instanceAxios.delete(url);
  },

  getDomesticPostals(params: ExtendedParameterGetDomesticPostals): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/domestic-postals?${newParams}`;
    return instanceAxios.get(url);
  },

  getDomesticPostalsByAdmin(params: ExtendedParameterGetDomesticPostals): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/domestic-postals/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  postExcelImportDomesticPostals(params: ParameterPostExcelImportDomesticPostal): Promise<any> {
    const url = `/domestic-postals/excel-imports/${params.effectiveDate}/effective-date/${params.expirationDate}/expiration-date`;
    const formData = new FormData();
    formData.append('files', params.file);
    return instanceAxios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  deleteDomesticPostals(params: {
    excelCode: string;
    expirationDate: string;
    effectiveDate: string;
  }): Promise<any> {
    const url = `/domestic-postals/${params.excelCode}/excel-code/${params.effectiveDate}/effective-date/${params.expirationDate}/expiration-date`;
    return instanceAxios.delete(url);
  },

  getNoticeByType(noticeType: string): Promise<any> {
    const url = `/nationals/postal/${noticeType}/notice`;
    return instanceAxios.get(url);
  },

  putNoticeByType(params: { noticeType: string; notice: ParameterRequestLanguage }): Promise<any> {
    const url = `/nationals/postal/${params.noticeType}/notice`;
    return instanceAxios.put(url, { notice: params.notice });
  },

  // vận chuyển quốc tế
  getPostalTariffShippingEstimate(params: { weight: number; nationalId: string }) {
    const url = `/nationals/postal-tariff/shipping-estimate`;
    return instanceAxios.post(url, params);
  },

  // vận chuyển trong nước
  getPostalTariffShippingEstimateDomestics(params: { weight: number; receiver: any }) {
    const url = `/domestic-postals/shipping-estimate`;
    return instanceAxios.post(url, params);
  },

  postPostalTariffShippingEstimateDomestics(params: {
    weight: number;
    intraProvinces: number;
    intraDomain: number;
    nearDomain: number;
    HaNoi_DaNang_HCM: number;
    effectiveDate: string;
    expirationDate: string;
  }) {
    const url = `/domestic-postals`;
    return instanceAxios.post(url, params);
  },

  putPostalTariffShippingEstimateDomestics(params: {
    id: string;
    weight: number;
    intraProvinces: number;
    intraDomain: number;
    nearDomain: number;
    HaNoi_DaNang_HCM: number;
    effectiveDate: string;
    expirationDate: string;
  }) {
    const url = `/domestic-postals/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },
};

export default logistics;
