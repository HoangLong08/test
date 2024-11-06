import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { GetListHistoryActivityResponse } from './setting-app.type';

// type ExtendedParameterGet = ParameterGet & { type?: string };

const settingApp = {
  getListHistoryActivity(params: ParameterGet): Promise<GetListHistoryActivityResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/app-trackings/activity-logs?${newParams}`;
    return instanceAxios.get(url);
  },

  getVietcombankExchangeRate(): Promise<any> {
    const url = `/app-settings/vietcombank/exchange-rate`;
    return instanceAxios.get(url);
  },

  getTheme(): Promise<any> {
    const url = `/app-settings/theme`;
    return instanceAxios.get(url);
  },

  putTheme(params: { backgroundColor: string; textColor: string }): Promise<any> {
    const url = `/app-settings/theme`;
    return instanceAxios.put(url, params);
  },

  downloadExcel(): Promise<any> {
    const url = '/app-trackings/activity-logs/downloads';
    return instanceAxios.get(url, { responseType: 'blob' });
  },
};

export default settingApp;
