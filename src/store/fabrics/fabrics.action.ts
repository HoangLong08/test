import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import fabrics from './fabrics.api';
import {
  ParamGetFabricsAdmin,
  ParameterGroupFabricPost,
  ParameterGroupFabricPut,
  ParameterPost,
  ParameterPut,
} from './fabrics.type';

const getFabricsForDropDownAction = createAsyncThunk(
  'fabrics/getFabricsForDropDownAction',
  async (_, thunkAPI) => {
    try {
      const res = await fabrics.getFabricsForDropDown();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getFabricsByAdminAction = createAsyncThunk(
  'fabrics/getFabricsByAdminAction',
  async (params: ParamGetFabricsAdmin, thunkAPI) => {
    try {
      const res = await fabrics.getFabricsByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postExcelImportFabricAction = createAsyncThunk(
  'logistics/postExcelImportFabricAction',
  async (params: { file: File }, thunkAPI) => {
    try {
      const res = await fabrics.postExcelImportFabric(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const postFabricsAction = createAsyncThunk(
  'fabrics/postFabricsAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await fabrics.postFabrics(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const putFabricsAction = createAsyncThunk(
  'fabrics/putFabricsAction',
  async (params: ParameterPut, thunkAPI) => {
    try {
      const res = await fabrics.putFabrics(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getDetailFabricsByIdAction = createAsyncThunk(
  'fabrics/getDetailFabricsByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await fabrics.getDetailFabricsById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteFabricsAction = createAsyncThunk(
  'fabrics/deleteFabricsAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await fabrics.deleteFabrics(id);
      return {
        ...res,
        id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchMultiActiveFabricsAction = createAsyncThunk(
  'fabrics/patchMultiActiveFabricsAction',
  async (params: { isActive: boolean; fabricIds: string[] }, thunkAPI) => {
    try {
      const res = await fabrics.patchMultiActiveFabrics(params);
      return {
        ...res,
        fabricIds: params.fabricIds,
        isActive: params.isActive,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getAllGroupFabricAction = createAsyncThunk(
  'fabrics/getAllGroupFabricAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await fabrics.getAllGroupFabric(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailGroupFabricAction = createAsyncThunk(
  'fabrics/getDetailGroupFabricAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await fabrics.getDetailGroupFabric(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postGroupFabricAction = createAsyncThunk(
  'fabrics/postGroupFabricAction',
  async (params: ParameterGroupFabricPost, thunkAPI) => {
    try {
      const res = await fabrics.postGroupFabric(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putGroupFabricStatusAction = createAsyncThunk(
  'fabrics/putGroupFabricStatusAction',
  async (params: ParameterGroupFabricPut, thunkAPI) => {
    try {
      const res = await fabrics.putGroupFabricStatus(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteGroupFabricAction = createAsyncThunk(
  'fabrics/deleteGroupFabricAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await fabrics.deleteGroupFabric(id);
      return { ...res, idDelete: id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

export {
  getFabricsForDropDownAction,
  getFabricsByAdminAction,
  postExcelImportFabricAction,
  postFabricsAction,
  getDetailFabricsByIdAction,
  putFabricsAction,
  deleteFabricsAction,
  patchMultiActiveFabricsAction,
  getAllGroupFabricAction,
  getDetailGroupFabricAction,
  postGroupFabricAction,
  putGroupFabricStatusAction,
  deleteGroupFabricAction,
};
