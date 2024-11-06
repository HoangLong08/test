import { createAsyncThunk } from '@reduxjs/toolkit';
import report from './report.api';
import { ParamsCustomerRetail } from './report.type';

const getReportForOrderAction = createAsyncThunk(
  'report/getReportForOrder',
  async (params: ParamsCustomerRetail, thunkAPI) => {
    try {
      const res = await report.getReportForOrder(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getReportForShippingByCountryAction = createAsyncThunk(
  'report/getReportForShippingByCountry',
  async (params: ParamsCustomerRetail, thunkAPI) => {
    try {
      const res = await report.getReportForShippingByCountry(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getReportForSaleRevenueAction = createAsyncThunk(
  'report/getReportForSaleRevenue',
  async (params: ParamsCustomerRetail, thunkAPI) => {
    try {
      const res = await report.getReportForSaleRevenue(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export {
  getReportForOrderAction,
  getReportForShippingByCountryAction,
  getReportForSaleRevenueAction,
};
