import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { DashboardType, DashboardParams } from './dashboard.type';

const baseUrl = 'businesses/dashboard';
const dashboard = {
  getDashboardAdmin(params: DashboardParams): Promise<DashboardType> {
    const newParams = cleanAndSerializeQueryParams(params);
    return instanceAxios.get(`${baseUrl}?${newParams}`);
  },
};

export default dashboard;
