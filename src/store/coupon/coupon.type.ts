import { MetaPagination, ParameterGet, ParameterRequestLanguage } from '@/config/constant';
import { TranslateType } from '../translation/translation.type';

export interface ItemCoupon {
  id: string;
  createdAt: string;
  updatedAt: string;
  code: string;
  title: TranslateType;
  description: TranslateType;
  discountPresent: number;
  isDiscountPresent: boolean;
  startDate: string;
  endDate: string;
  activationLimit: number;
}

export interface ParamGetCoupon extends ParameterGet {
  startDate?: string;
  endDate?: string;
}

export interface ParameterPost {
  code?: string;
  title: ParameterRequestLanguage;
  description: ParameterRequestLanguage;
  discountPresent?: number;
  startDate?: string;
  endDate?: string;
  activationLimit?: number;
}
export interface ParameterPut extends Omit<ParameterPost, 'id'> {
  id: string;
}

export type CouponStateReducer = {
  listCouponAdmin: {
    data: ItemCoupon[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };

  couponDetail: {
    data: ItemCoupon;
    load: boolean;
    error: string;
  };

  couponDetailAdmin: {
    data: ItemCoupon;
    load: boolean;
    error: string;
  };
};
