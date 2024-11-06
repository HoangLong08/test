import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import contactUs from './contact-us.api';
import { ParameterPatchMultiDelete, ParameterPost, ParameterPut } from './contact-us.type';

const getContactUsAllAction = createAsyncThunk(
  'contactUs/getContactUsAllAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await contactUs.getContactUsAll(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailContactUsAction = createAsyncThunk(
  'contactUs/getDetailContactUsAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await contactUs.getDetailContactUs(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postContactUsAction = createAsyncThunk(
  'contactUs/postContactUsAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await contactUs.postContactUs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putContactUsStatusAction = createAsyncThunk(
  'contactUs/putContactUsStatusAction',
  async (params: ParameterPut, thunkAPI) => {
    try {
      const res = await contactUs.putContactUsStatus(params);
      return {
        ...res,
        id: params.id,
        status: params.status,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchDeleteMultiContactUsAction = createAsyncThunk(
  'contactUs/patchDeleteMultiContactUsAction',
  async (params: ParameterPatchMultiDelete, thunkAPI) => {
    try {
      const res = await contactUs.patchDeleteMultiContactUs(params);
      return { ...res, ids: params.contactUsIds };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteContactUsAction = createAsyncThunk(
  'contactUs/deleteContactUsAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await contactUs.deleteContactUs(id);
      return { ...res, idDelete: id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

export {
  getContactUsAllAction,
  getDetailContactUsAction,
  postContactUsAction,
  putContactUsStatusAction,
  patchDeleteMultiContactUsAction,
  deleteContactUsAction,
};
