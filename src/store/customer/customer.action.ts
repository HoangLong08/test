import customer from '@/store/customer/customer.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  ParamGetCustomer,
  ParamPostCustomer,
  ParamPutCustomer,
} from './customer.type';

const postCustomerAction = createAsyncThunk(
  'customer/postCustomerAction',
  async (params: ParamPostCustomer, thunkAPI) => {
    try {
      const res = await customer.postCustomer(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const getCustomerAction = createAsyncThunk(
  'customer/getCustomerAction',
  async (params: ParamGetCustomer, thunkAPI) => {
    try {
      const res = await customer.getCustomer(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const getDetailCustomerAction = createAsyncThunk(
  'customer/getDetailCustomerAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await customer.getDetailCustomer(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const putCustomerAction = createAsyncThunk(
  'Customer/putCustomerAction',
  async (params: ParamPutCustomer, thunkAPI) => {
    try {
      const res = await customer.putCustomer(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

const deleteCustomerAction = createAsyncThunk(
  'Customer/deleteCustomerAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await customer.deleteCustomer(id);
      return { ...res, idDelete: id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  },
);

export {
  getCustomerAction,
  postCustomerAction,
  getDetailCustomerAction,
  putCustomerAction,
  deleteCustomerAction,
};
