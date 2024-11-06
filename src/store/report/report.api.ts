import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { ParamsCustomerRetail } from './report.type';

const baseUrl = '/app-settings/report';
const report = {
  getReportForOrder(params: ParamsCustomerRetail): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    return instanceAxios.get(`${baseUrl}/orders?${newParams}`);
  },

  getReportForShippingByCountry(params: ParamsCustomerRetail): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    return instanceAxios.get(`${baseUrl}/on-shipping-costs-by-country?${newParams}`);
  },

  getReportForSaleRevenue(params: ParamsCustomerRetail): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    return instanceAxios.get(`${baseUrl}/sales-revenue?${newParams}`);
  },
};
export default report;
