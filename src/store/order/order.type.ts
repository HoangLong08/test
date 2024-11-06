import { MetaPagination, ParameterGet } from '@/config/constant';
import { TranslateType } from '../translation/translation.type';

export interface OrderDetail {
  id?: string;
  productId: string;
  productCode: string;
  name: any;
  thumbnail: string;
  weight: number;
  quantity: number;
  amount: number;
  tien: number;
  discountPercentage: number;
  size: string;
  fabricCode: string;
  fabricName: any;
  fabricImage?: string;
  fabricType: string;
  productSlug: string;
  ribbonIds: string[];
  saleOffText?: string;
}

export type ShoppingCartItemDetail = {
  id: string;
  productId: string;
  productSlug: string;

  name: TranslateType;
  thumbnail: string;
  quantity: number;

  // 2 biến ở dưới để thêm vào giỏ hàng, ....
  amount: number;
  tien: number;

  size: string;
  fabricName: TranslateType;
  fabricType: string;
  fabricCode: string;
  fabricImage?: string;

  saleOffText?: string;
  fabricQuantity?: number;
  discountPercentage: number;
  ribbonIds: string[];
  productCode: string;
  weight: number;
};

export type ShoppingCartType = {
  payInAdvance: {
    id?: string;
    createdAt?: string;
    docNo?: string;
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    paymentSource?: string;
    detail: ShoppingCartItemDetail[];
  };
  payingLater: {
    id?: string;
    createdAt?: string;
    docNo?: string;
    fullName?: string;
    email?: string;
    phoneNumber?: string;
    paymentSource?: string;
    detail: ShoppingCartItemDetail[];
  };
};

export interface ParamPostOrder {
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  // district: string;
  // wards: string;
  state: string;
  street: string;
  zipCode: string;
  note?: string;
  sumWeight: number;
  shippingCost: number;
  sumAmount?: number;
  thanhTien?: number;
  nationalId: string;
  postalMethod: string;
  detail: OrderDetail[];
  language: string;
  couponCode?: string;
}

export interface ParamOrderQuantityItem {
  id: string;
  quantity: number;
}

// eslint-disable-next-line no-shadow
export enum OrderStatusEnum {
  PROCESSING_OrderReceived = 'PROCESSING_OrderReceived',
  PROCESSING_PaymentAccepted = 'PROCESSING_PaymentAccepted',
  PROCESSING_PreparingOrder = 'PROCESSING_PreparingOrder',
  DELIVERY_ItemsOutForDelivery = 'DELIVERY_ItemsOutForDelivery',
  DELIVERY_ItemsReceived = 'DELIVERY_ItemsReceived',
  ALTERATION_OderCanceled = 'ALTERATION_OderCanceled',
  ALTERATION_OrderReturnRequested = 'ALTERATION_OrderReturnRequested',
  ALTERATION_OrderReturned = 'ALTERATION_OrderReturned',
}

export interface SellerProtection {
  status: string;
  dispute_categories: string[];
}
export interface Links {
  href: string;
  rel: string;
  method: string;
}

export interface Payer {
  name: {
    given_name: string;
    surname: string;
  };
  email_address: string;
  payer_id: string;
  address: {
    country_code: string;
  };
}

export interface Amount {
  currency_code: string;
  value: string;
}
export interface Payee {
  email_address: string;
  merchant_id: string;
}

export interface SellerReceivableBreakdown {
  gross_amount: Amount;
  paypal_fee: Amount;
  net_amount: Amount;
}

export interface Shipping {
  name: {
    full_name: string;
  };
  address: {
    address_line_1: string;
    admin_area_2: string;
    admin_area_1: string;
    postal_code: string;
    country_code: string;
  };
}

export interface Capture {
  id: string;
  status: string;
  amount: Amount;
  final_capture: boolean;
  seller_protection: SellerProtection;
  seller_receivable_breakdown: SellerReceivableBreakdown;
  invoice_id: string;
  links: Links[];
  create_time: string;
  update_time: string;
}

export interface Payments {
  captures: Capture[];
}
export interface PurchaseUnit {
  reference_id: string;
  amount: Amount;
  payee: Payee;
  invoice_id: string;
  shipping: Shipping;
  payments: Payments;
}

export interface PaymentSource2 {
  paypal: {
    email_address: string;
    account_id: string;
    account_status: string;
    name: {
      given_name: string;
      surname: string;
    };
    address: {
      country_code: string;
    };
  };
}

export interface Resource {
  update_time: string;
  create_time: string;
  purchase_units: PurchaseUnit[];
  links: Links[];
  id: string;
  payment_source: PaymentSource2;
  intent: string;
  payer: Payer;
  status: string;
}

export interface PaymentSource {
  id: string;
  event_version: string;
  create_time: string;
  resource_type: string;
  resource_version: string;
  event_type: string;
  summary: string;
  resource: Resource;
  links: Links[];
}

export interface HistoryOrders {
  id: string;
  createdAt: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  paymentSource: PaymentSource;
  type: string;
  detail: {
    id: string;
    productId: string;
    productSlug: string;
    name: TranslateType;
    thumbnail: string;
    quantity: number;
    amount: number;
    tien: number;
    size: string;
    fabricName: TranslateType;
    fabricType: string;
    fabricCode: string;
    discountPercentage: number;
    ribbonIds: string[];
    productCode: string;
    weight: number;
  }[];
  isMeasurementInfoAvailable: boolean;
  status: OrderStatusEnum;
  sumAmount: number;
  thanhTien: number;
  language: string;
  docNo: string;
  city: string;
  district: string;
  wards: string;
  state: string;
  street: string;
  note: string;
  shippingCost: number;
  exchangeRate: number;
  postalMethod: string;
  national: {
    id: string;
    zipCode: string;
    name: string;
  };
  madeToMeasures?: {
    id: string;
  };
  productReviews: {
    id: string;
    productId: string;
  }[];
  sumWeight: number;
  zipCode: number;
  operatedLookup: string;
  onePayLink: string;
  coupon: {
    code: string;
    discountPresent: number;
    title: TranslateType;
  };
  makePaymentLink: string;
}

export interface ParamGetHistoryOrder extends ParameterGet {
  toDate?: string;
  fromDate?: string;
  orderStatus?: OrderStatusEnum;
}

export interface ParamGetTrackingOrder extends ParameterGet {
  toDate?: string;
  fromDate?: string;
  orderStatus?: OrderStatusEnum;
  email: string;
  id: string;
}

export interface GetHistoryOrderResponse {
  data: HistoryOrders[];
  statusCode: number;
  meta: MetaPagination;
}

export interface TrackingOrder {
  id: string;
  createdAt: string;
  docNo: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  status: OrderStatusEnum;
  sumAmount: number;
  thanhTien: number;
  language: string;
  isMeasurementInfoAvailable: boolean;
  shippingCost: number;
  postalMethod: string;
  exchangeRate: number;
  detail: {
    id: string;
    productId: string;
    productSlug: string;
    productCode: string;
    name: TranslateType;
    thumbnail: string;
    weight: number;
    quantity: number;
    amount: number;
    tien: number;
    size: string;
    ribbonIds: string[];
    fabricCode: string;
    fabricName: TranslateType;
    fabricImage: string;
    fabricType: string;
    discountPercentage: number;
  }[];
}

export type OrderState = {
  shoppingCart: {
    data: ShoppingCartType;
    type: string;
    amountCart: TranslateType;
    weight: {
      price: number;
      noPrice: number;
    };
    coupon: {
      code: string;
      title: TranslateType;
      description: TranslateType;
      discountPresent: number;
      isDiscountPresent: false;
      startDate: string;
      endDate: string;
      activationLimit: number;
    };
  };
  listHistoryOrder: {
    data: HistoryOrders[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };
  listTrackingOrder: {
    data: HistoryOrders[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };
  listOrderByAdmin: {
    data: HistoryOrders[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };
  trackingOrder: {
    data: TrackingOrder;
    load: boolean;
    error: string;
  };
  getDetailOrderByAdmin: {
    data: HistoryOrders;
    load: boolean;
    error: string;
  };
  detailOrder: {
    data: HistoryOrders;
    load: boolean;
    error: string;
  };
  commentOrder: string;
};

export interface ParamOrderToPayment {
  id: string; // orderID (payInAdvance)
  fullName: string;
  email: string;
  phoneNumber: string;
  city: string;
  district: string;
  wards: string;
  street: string;
  state: string;
  zipCode: string;
  note?: string;
  sumWeight: number;
  shippingCost: number;
  sumAmount?: number;
  thanhTien?: number;
  nationalId: string;
  postalMethod: string;
  language: string;
  couponCode?: string;
}
