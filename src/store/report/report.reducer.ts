import { MetaPagination } from '@/config/constant';
import { createSlice } from '@reduxjs/toolkit';
import {
  getReportForOrderAction,
  getReportForSaleRevenueAction,
  getReportForShippingByCountryAction,
} from './report.action';
import { IReportCustomerRetail } from './report.type';

const initialState = {
  getReportForOrder: {
    data: [] as IReportCustomerRetail[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
  getReportForShippingByCountry: {
    data: [] as IReportCustomerRetail[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
  getReportForSaleRevenue: {
    data: [] as IReportCustomerRetail[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getReportForOrderAction.pending, (state) => ({
      ...state,
      getReportForOrder: {
        ...state.getReportForOrder,
        load: true,
      },
    }));
    builder.addCase(getReportForOrderAction.fulfilled, (state, action: any) => ({
      ...state,
      getReportForOrder: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getReportForOrderAction.rejected, (state) => ({
      ...state,
      getReportForOrder: {
        ...state.getReportForOrder,
        load: false,
      },
    }));

    builder.addCase(getReportForShippingByCountryAction.pending, (state) => ({
      ...state,
      getReportForShippingByCountry: {
        ...state.getReportForShippingByCountry,
        load: true,
      },
    }));
    builder.addCase(getReportForShippingByCountryAction.fulfilled, (state, action: any) => ({
      ...state,
      getReportForShippingByCountry: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getReportForShippingByCountryAction.rejected, (state) => ({
      ...state,
      getReportForShippingByCountry: {
        ...state.getReportForShippingByCountry,
        load: false,
      },
    }));

    builder.addCase(getReportForSaleRevenueAction.pending, (state) => ({
      ...state,
      getReportForSaleRevenue: {
        ...state.getReportForSaleRevenue,
        load: true,
      },
    }));
    builder.addCase(getReportForSaleRevenueAction.fulfilled, (state, action: any) => ({
      ...state,
      getReportForSaleRevenue: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getReportForSaleRevenueAction.rejected, (state) => ({
      ...state,
      getReportForSaleRevenue: {
        ...state.getReportForSaleRevenue,
        load: false,
      },
    }));
  },
});

export default reportSlice.reducer;
