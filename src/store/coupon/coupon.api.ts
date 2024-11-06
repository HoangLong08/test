import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import omit from 'lodash/omit';
import { ParameterPost, ParameterPut, ParamGetCoupon } from './coupon.type';

const coupon = {
  getCouponCheckAvailable(params: { coupon: string; email: string }): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/coupons/check-avaliable?${newParams}`;
    return instanceAxios.get(url);
  },

  getCouponByAdmin(params: ParamGetCoupon): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/coupons/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  getCouponById(params: string): Promise<any> {
    const url = `/coupons/${params}/by-admin`;
    return instanceAxios.get(url);
  },

  postCoupon(params: ParameterPost): Promise<any> {
    const url = `/coupons`;
    return instanceAxios.post(url, params);
  },

  putCoupon(params: ParameterPut): Promise<any> {
    const url = `/coupons/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  deleteCoupon(id: string): Promise<any> {
    const url = `/coupons/${id}`;
    return instanceAxios.delete(url);
  },
};

export default coupon;
