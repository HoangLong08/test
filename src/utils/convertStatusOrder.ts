import { OrderStatusEnum } from '@/store/order/order.type';

export const convertStatusOrder = (status: OrderStatusEnum, language: string) => {
  const getNameOrderStatusEN = (s: OrderStatusEnum) => {
    switch (s) {
      case OrderStatusEnum.PROCESSING_OrderReceived:
        return 'Order received';
      case OrderStatusEnum.PROCESSING_PaymentAccepted:
        return 'Payment accepted';
      case OrderStatusEnum.PROCESSING_PreparingOrder:
        return 'Preparing order';
      case OrderStatusEnum.DELIVERY_ItemsOutForDelivery:
        return 'Items out for delivery';
      case OrderStatusEnum.DELIVERY_ItemsReceived:
        return 'Items received';
      case OrderStatusEnum.ALTERATION_OderCanceled:
        return 'Order canceled';
      case OrderStatusEnum.ALTERATION_OrderReturnRequested:
        return 'Order return requested';
      case OrderStatusEnum.ALTERATION_OrderReturned:
        return 'Order returned';
      default:
        return '--';
    }
  };

  const getNameOrderStatusVN = (s: OrderStatusEnum) => {
    switch (s) {
      case OrderStatusEnum.PROCESSING_OrderReceived:
        return 'Đã tiếp nhận đơn hàng';
      case OrderStatusEnum.PROCESSING_PaymentAccepted:
        return 'Thanh toán được chấp nhận';
      case OrderStatusEnum.PROCESSING_PreparingOrder:
        return 'Đang chuẩn bị đơn hàng';
      case OrderStatusEnum.DELIVERY_ItemsOutForDelivery:
        return 'Hàng đang trên đường giao';
      case OrderStatusEnum.DELIVERY_ItemsReceived:
        return 'Đã nhận hàng';
      case OrderStatusEnum.ALTERATION_OderCanceled:
        return 'Đã hủy đơn hàng';
      case OrderStatusEnum.ALTERATION_OrderReturnRequested:
        return 'Yêu cầu đổi trả hàng';
      case OrderStatusEnum.ALTERATION_OrderReturned:
        return 'Đã đổi trả hàng';
      default:
        return '--';
    }
  };

  // Use the language parameter to determine which function to call
  return language === 'en' ? getNameOrderStatusEN(status) : getNameOrderStatusVN(status);
};
