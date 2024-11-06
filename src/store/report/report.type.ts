import { ParameterGet } from '@/config/constant';

export interface ParamsCustomerRetail extends ParameterGet {
  startDate?: string;
  endDate?: string;
}

export type IReportCustomerRetail = {
  [key: string]: any;
};
