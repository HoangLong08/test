import { createAsyncThunk } from '@reduxjs/toolkit';
import coupon from './coupon.api';
import { ParameterPost, ParameterPut, ParamGetCoupon } from './coupon.type';

const getCouponCheckAvailableAction = createAsyncThunk(
  'coupon/getCouponCheckAvailableAction',
  async (params: { coupon: string; email: string }, thunkAPI) => {
    try {
      const res = await coupon.getCouponCheckAvailable(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getCouponByAdminAction = createAsyncThunk(
  'coupon/getCouponByAdminAction',
  async (params: ParamGetCoupon, thunkAPI) => {
    try {
      const res = await coupon.getCouponByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getCouponByIdAction = createAsyncThunk(
  'coupon/getCouponByIdAction',
  async (params: string, thunkAPI) => {
    try {
      const res = await coupon.getCouponById(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const postCouponAction = createAsyncThunk(
  'coupon/postCouponAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await coupon.postCoupon(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error });
    }
  }
);

const putCouponAction = createAsyncThunk(
  'coupon/putCouponAction',
  async (params: ParameterPut, thunkAPI) => {
    try {
      const res = await coupon.putCoupon(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const deleteCouponAction = createAsyncThunk(
  'coupon/deleteCouponAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await coupon.deleteCoupon(id);
      return {
        ...res,
        id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

export {
  getCouponCheckAvailableAction,
  getCouponByAdminAction,
  getCouponByIdAction,
  postCouponAction,
  putCouponAction,
  deleteCouponAction,
};
