import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { CouponStateReducer, ItemCoupon } from './coupon.type';
import {
  getCouponByAdminAction,
  getCouponByIdAction,
  getCouponCheckAvailableAction,
} from './coupon.action';

const initialState: CouponStateReducer = {
  listCouponAdmin: {
    data: [] as ItemCoupon[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  couponDetail: {
    data: {} as ItemCoupon,
    load: false,
    error: '',
  },

  couponDetailAdmin: {
    data: {} as ItemCoupon,
    load: false,
    error: '',
  },
};

const couponsSlice = createSlice({
  name: 'coupon',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCouponCheckAvailableAction.pending, (state: CouponStateReducer) => ({
      ...state,
      couponDetail: {
        ...state.couponDetail,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getCouponCheckAvailableAction.fulfilled,
      (state: CouponStateReducer, action: PayloadAction<any>) => ({
        ...state,
        couponDetail: {
          data: action.payload.data,
          meta: {},
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getCouponCheckAvailableAction.rejected, (state: CouponStateReducer) => ({
      ...state,
      couponDetail: {
        data: {} as ItemCoupon,
        load: false,
        error: '',
      },
    }));

    // ----------
    builder.addCase(getCouponByAdminAction.pending, (state: CouponStateReducer) => ({
      ...state,
      listCouponAdmin: {
        ...state.listCouponAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getCouponByAdminAction.fulfilled,
      (state: CouponStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listCouponAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getCouponByAdminAction.rejected, (state: CouponStateReducer) => ({
      ...state,
      listCouponAdmin: {
        data: [] as ItemCoupon[],
        meta: {},
        load: false,
        error: '',
      },
    }));

    // --------
    builder.addCase(getCouponByIdAction.pending, (state: CouponStateReducer) => ({
      ...state,
      couponDetailAdmin: {
        ...state.couponDetailAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getCouponByIdAction.fulfilled,
      (state: CouponStateReducer, action: PayloadAction<any>) => ({
        ...state,
        couponDetailAdmin: {
          data: action.payload.data,
          meta: {},
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getCouponByIdAction.rejected, (state: CouponStateReducer) => ({
      ...state,
      couponDetailAdmin: {
        data: {} as ItemCoupon,
        load: false,
        error: '',
      },
    }));
  },
});

export default couponsSlice.reducer;
