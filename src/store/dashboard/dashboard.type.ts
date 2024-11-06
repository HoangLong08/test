import { TranslateType } from '../translation/translation.type';

export interface DashboardParams {
  fromDate?: string;
  toDate?: string;
}

export interface DashboardType {
  totalUsers: number;
  totalProducts: number;
  totalOrders: number;
  totalVisitors: number;
  revenue: {
    weekStartDate: string;
    sumAmount: number;
    thanhTien: number;
  }[];
  bestSeller: {
    productid: string;
    name: TranslateType;
    totalquantity: number;
  }[];
}

export interface DashboardRevenueType {
  date: string;
  intomoney: number;
}
