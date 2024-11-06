import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import sizes from './sizes.api';
import {
  ParameterPost,
  ParameterPostSizeGuide,
  ParameterPut,
  ParameterPutSizeGuide,
} from './sizes.type';

const getSizesAction = createAsyncThunk(
  'sizes/getSizesAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await sizes.getSizes(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getSizesByAdminAction = createAsyncThunk(
  'sizes/getSizesByAdminAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await sizes.getSizesByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postSizesAction = createAsyncThunk(
  'sizes/postSizesAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await sizes.postSizes(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putSizesAction = createAsyncThunk(
  'sizes/putSizesAction',
  async (params: ParameterPut, thunkAPI) => {
    try {
      const res = await sizes.putSizes(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailSizesByIdAction = createAsyncThunk(
  'sizes/getDetailSizesByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await sizes.getDetailSizesById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteSizesAction = createAsyncThunk(
  'sizes/deleteSizesAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await sizes.deleteSizes(id);
      return {
        ...res,
        id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchMultiActiveSizeAction = createAsyncThunk(
  'sizes/patchMultiActiveSizeAction',
  async (params: { isActive: boolean; ids: string[] }, thunkAPI) => {
    try {
      const res = await sizes.patchMultiActiveSize(params);
      return {
        ...res,
        ids: params.ids,
        isActive: params.isActive,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getSizesGuideAction = createAsyncThunk(
  'sizes/getSizesGuideAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await sizes.getSizesGuide(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailSizesGuideByIdAction = createAsyncThunk(
  'sizes/getDetailSizesGuideByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await sizes.getDetailSizesGuideById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getSizesGuideByAdminAction = createAsyncThunk(
  'sizes/getSizesGuideByAdminAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await sizes.getSizesGuideByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postSizesGuideAction = createAsyncThunk(
  'sizes/postSizesGuideAction',
  async (params: ParameterPostSizeGuide, thunkAPI) => {
    try {
      const res = await sizes.postSizesGuide(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const putSizesGuideAction = createAsyncThunk(
  'sizes/putSizesGuideAction',
  async (params: ParameterPutSizeGuide, thunkAPI) => {
    try {
      const res = await sizes.putSizesGuide(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const deleteSizesGuideAction = createAsyncThunk(
  'sizes/deleteSizesGuideAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await sizes.deleteSizesGuide(id);
      return {
        ...res,
        id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchSizeGuideReOrderAdminAction = createAsyncThunk(
  'sizes/patchSizeGuideReOrderAdminAction',
  async (params: { activeId: string; activeIndex: number }, thunkAPI) => {
    try {
      const res = await sizes.patchSizeGuideReOrder(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export {
  getSizesAction,
  postSizesAction,
  getDetailSizesByIdAction,
  putSizesAction,
  deleteSizesAction,
  patchMultiActiveSizeAction,
  getSizesByAdminAction,
  getSizesGuideAction,
  getDetailSizesGuideByIdAction,
  getSizesGuideByAdminAction,
  postSizesGuideAction,
  putSizesGuideAction,
  deleteSizesGuideAction,
  patchSizeGuideReOrderAdminAction,
};
