import { createAsyncThunk } from '@reduxjs/toolkit';
import orders from './order.api';
import {
  OrderDetail,
  ParamOrderQuantityItem,
  ParamGetHistoryOrder,
  ParamPostOrder,
  ShoppingCartType,
  ParamOrderToPayment,
  ParamGetTrackingOrder,
} from './order.type';

const postOrderCheckoutPayPalAnonymousAction = createAsyncThunk(
  'orders/postOrderCheckoutPayPalAnonymousAction',
  async (body: ParamPostOrder, thunkAPI) => {
    try {
      const res = await orders.postOrderCheckoutPayPalAnonymous(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postOrderPriceQuotedLaterAnonymousAction = createAsyncThunk(
  'orders/postOrderPriceQuotedLaterAnonymousAction',
  async (body: ParamPostOrder, thunkAPI) => {
    try {
      const res = await orders.postOrderPriceQuotedLaterAnonymous(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postOrderPriceQuotedLaterAction = createAsyncThunk(
  'orders/postOrderPriceQuotedLaterAction',
  async (body: { orderId: string }, thunkAPI) => {
    try {
      const res = await orders.postOrderPriceQuotedLater(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postOrderMyBagAddItemAction = createAsyncThunk(
  'orders/postOrderMyBagAddItemAction',
  async (body: OrderDetail, thunkAPI) => {
    try {
      const res = await orders.postOrderMyBagAddItem(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postOrderMyBagAddItemsAction = createAsyncThunk(
  'orders/postOrderMyBagAddItemsAction',
  async (body: ShoppingCartType, thunkAPI) => {
    try {
      const res = await orders.postOrderMyBagAddItems(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchOrderQuantityItemAction = createAsyncThunk(
  'orders/patchOrderQuantityItemAction',
  async (body: ParamOrderQuantityItem, thunkAPI) => {
    try {
      const res = await orders.patchOrderQuantityItem(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getOrderMyBagAction = createAsyncThunk('orders/getOrderMyBagAction', async (_, thunkAPI) => {
  try {
    const res = await orders.getOrderMyBag();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
  }
});

const deleteMyBagRemoveItemAction = createAsyncThunk(
  'orders/deleteMyBagRemoveItemAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await orders.deleteMyBagRemoveItem(id);
      return { ...res, id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteMyBagAction = createAsyncThunk(
  'orders/deleteMyBagAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await orders.deleteMyBag(id);
      return { ...res, id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getCheckStatusPaymentAction = createAsyncThunk(
  'orders/getCheckStatusPaymentAction',
  async (orderId: string, thunkAPI) => {
    try {
      const res = await orders.getCheckStatusPayment(orderId);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postClientHookPaymentAction = createAsyncThunk(
  'orders/postClientHookPaymentAction',
  async (params: { orderId: string; couponCode?: string; order: any }, thunkAPI) => {
    try {
      const res = await orders.postClientHookPayment(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getHistoryOrderAction = createAsyncThunk(
  'orders/getHistoryOrderAction',
  async (params: ParamGetHistoryOrder, thunkAPI) => {
    try {
      const res = await orders.getHistoryOrder(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getAllOrderByAdminAction = createAsyncThunk(
  'orders/getAllOrderByAdminAction',
  async (params: ParamGetHistoryOrder, thunkAPI) => {
    try {
      const res = await orders.getAllOrderByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putOrderToPaymentAction = createAsyncThunk(
  'orders/putOrderToPaymentAction',
  async (body: ParamOrderToPayment, thunkAPI) => {
    try {
      const res = await orders.putOrderToPayment(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getTrackingOrderAction = createAsyncThunk(
  'orders/getTrackingOrderAction',
  async (params: ParamGetTrackingOrder, thunkAPI) => {
    try {
      const res = await orders.getTrackingOrder(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailOrderByAdminAction = createAsyncThunk(
  'orders/getDetailOrderByAdminAction',
  async (params: string, thunkAPI) => {
    try {
      const res = await orders.getDetailOrderByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putOrderByAdminAction = createAsyncThunk(
  'orders/putOrderByAdminAction',
  async (params: any, thunkAPI) => {
    try {
      const res = await orders.putOrderByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const deleteOrderByAdminAction = createAsyncThunk(
  'orders/deleteOrderByAdminAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await orders.deleteOrderByAdmin(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

// đồng bộ giỏ hàng giữa user và backend khi có thay đổi thông tin sản phẩm từ admin
const postSynchronizeWithMyBagAction = createAsyncThunk(
  'orders/postSynchronizeWithMyBagAction',
  async (params: ShoppingCartType, thunkAPI) => {
    try {
      const res = await orders.postSynchronizeWithMyBag(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getOrdersAction = createAsyncThunk(
  'orders/getOrdersAction',
  async (params: string, thunkAPI) => {
    try {
      const res = await orders.getOrders(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

export {
  postOrderCheckoutPayPalAnonymousAction,
  postOrderPriceQuotedLaterAnonymousAction,
  postOrderPriceQuotedLaterAction,
  postOrderMyBagAddItemAction,
  patchOrderQuantityItemAction,
  deleteMyBagRemoveItemAction,
  deleteMyBagAction,
  postOrderMyBagAddItemsAction,
  getOrderMyBagAction,
  getCheckStatusPaymentAction,
  getHistoryOrderAction,
  getAllOrderByAdminAction,
  putOrderToPaymentAction,
  getTrackingOrderAction,
  getDetailOrderByAdminAction,
  putOrderByAdminAction,
  postClientHookPaymentAction,
  deleteOrderByAdminAction,
  postSynchronizeWithMyBagAction,
  getOrdersAction,
};
