import { instanceAxios } from '@/config/axios';
import omit from 'lodash/omit';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { removeNullOrEmptyValues } from '@/utils/removeNullOrEmptyValues';
import {
  ParamOrderQuantityItem,
  ParamPostOrder,
  OrderDetail,
  ParamGetHistoryOrder,
  GetHistoryOrderResponse,
  ShoppingCartType,
  ParamOrderToPayment,
  ParamGetTrackingOrder,
} from './order.type';

const baseURL = '/orders';
const orders = {
  postOrderCheckoutPayPalAnonymous(body: ParamPostOrder): Promise<any> {
    const url = `${baseURL}/paypal-checkout/anonymous`;
    return instanceAxios.post(url, body);
  },

  postOrderPriceQuotedLaterAnonymous(body: ParamPostOrder): Promise<any> {
    const url = `${baseURL}/price-quoted-later/anonymous`;
    return instanceAxios.post(url, body);
  },

  //   postOrderCheckoutPayPalWebhook(body: any): Promise<any> {
  //     const url = `${baseURL}/paypal-checkout/webhook`;
  //     return instanceAxios.post(url, body);
  //   },

  postOrderPriceQuotedLater(body: { orderId: string }): Promise<any> {
    const url = `${baseURL}/price-quoted-later`;
    return instanceAxios.post(url, body);
  },

  postOrderMyBagAddItem(body: OrderDetail): Promise<any> {
    const url = `${baseURL}/${body.id}/my-bag/add-item`;
    return instanceAxios.post(url, omit(body, 'id'));
  },

  // để đồng bộ item khi login
  postOrderMyBagAddItems(body: ShoppingCartType): Promise<any> {
    const url = `${baseURL}/my-bag/add-items`;
    return instanceAxios.post(url, body);
  },

  patchOrderQuantityItem(params: ParamOrderQuantityItem): Promise<any> {
    const url = `${baseURL}/${params.id}/quantity/${params.quantity}`;
    return instanceAxios.patch(url);
  },

  getOrderMyBag(): Promise<any> {
    const url = `${baseURL}/my-bag`;
    return instanceAxios.get(url);
  },

  deleteMyBagRemoveItem(id: string): Promise<any> {
    const url = `${baseURL}/my-bag/${id}/remove-item`;
    return instanceAxios.delete(url);
  },

  deleteMyBag(id: string): Promise<any> {
    const url = `${baseURL}/my-bag/${id}`;
    return instanceAxios.delete(url);
  },

  getCheckStatusPayment(orderId: string): Promise<any> {
    const url = `${baseURL}/${orderId}/check-status`;
    return instanceAxios.get(url);
  },

  postClientHookPayment(params: {
    orderId: string;
    couponCode?: string;
    order: any;
  }): Promise<any> {
    const url = `${baseURL}/paypal-checkout/client-webhook/${params.orderId}?couponCode=${params.couponCode}`;
    return instanceAxios.post(url, params.order);
  },

  getHistoryOrder(params: ParamGetHistoryOrder): Promise<GetHistoryOrderResponse> {
    const url = `${baseURL}/my-order?${cleanAndSerializeQueryParams(params)}`;
    return instanceAxios.get(url);
  },

  getAllOrderByAdmin(params: ParamGetHistoryOrder): Promise<GetHistoryOrderResponse> {
    const url = `${baseURL}/by-admin?${cleanAndSerializeQueryParams(params)}`;
    return instanceAxios.get(url);
  },

  putOrderToPayment(body: ParamOrderToPayment): Promise<any> {
    const url = `${baseURL}/${body.id}/by-user`;
    return instanceAxios.put(url, omit(body, 'id'));
  },

  getTrackingOrder(params: ParamGetTrackingOrder): Promise<any> {
    const url = `${baseURL}/my-order/email/${params.email}/id/${
      params.id
    }/from-mail-tracking?${cleanAndSerializeQueryParams(omit(params, 'email', 'id'))}`;
    return instanceAxios.get(url);
  },

  getDetailOrderByAdmin(id: string): Promise<GetHistoryOrderResponse> {
    const url = `${baseURL}/${id}/by-admin`;
    return instanceAxios.get(url);
  },

  putOrderByAdmin(body: any): Promise<any> {
    const url = `${baseURL}/${body.id}/by-admin`;
    return instanceAxios.put(url, removeNullOrEmptyValues(omit(body, 'id')));
  },

  deleteOrderByAdmin(id: string): Promise<any> {
    const url = `${baseURL}/${id}`;
    return instanceAxios.delete(url);
  },

  // đồng bộ giỏ hàng giữa user và backend khi có thay đổi thông tin sản phẩm từ admin
  postSynchronizeWithMyBag(params: ShoppingCartType): Promise<any> {
    const url = `/products/synchronize/with-my-bag`;
    return instanceAxios.post(url, params);
  },

  getOrders(params: string): Promise<any> {
    const url = `/orders/${params}`;
    return instanceAxios.get(url);
  },
};
export default orders;
