import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import faqs from './faqs.api';
import {
  ParameterPost,
  ParameterPostFaqsGroup,
  ParameterPut,
  ParameterPutFaqsGroup,
} from './faqs.type';

const getFaqsAction = createAsyncThunk(
  'faqs/getFaqsAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await faqs.getFaqs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getFaqsByAdminAction = createAsyncThunk(
  'faqs/getFaqsByAdminAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await faqs.getFaqsByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postFaqsAction = createAsyncThunk(
  'faqs/postFaqsAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await faqs.postFaqs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putFaqsAction = createAsyncThunk(
  'faqs/putFaqsAction',
  async (params: ParameterPut, thunkAPI) => {
    try {
      const res = await faqs.putFaqs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailFaqsByIdAction = createAsyncThunk(
  'faqs/getDetailFaqsByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await faqs.getDetailFaqsById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteFaqsAction = createAsyncThunk('faqs/deleteFaqsAction', async (id: string, thunkAPI) => {
  try {
    const res = await faqs.deleteFaqs(id);
    return {
      ...res,
      id,
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
  }
});

const patchMultiDeleteFaqsAction = createAsyncThunk(
  'faqs/patchMultiDeleteFaqsAction',
  async (ids: string[], thunkAPI) => {
    try {
      const res = await faqs.patchMultiDeleteFaqs(ids);
      return {
        ...res,
        ids,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchReorderFaqsAction = createAsyncThunk(
  'faqs/patchReorderFaqsAction',
  async (params: { id: string; index: number }, thunkAPI) => {
    try {
      const res = await faqs.patchReorderFaqs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postGroupFaqsAction = createAsyncThunk(
  'faqs/postGroupFaqsAction',
  async (params: ParameterPostFaqsGroup, thunkAPI) => {
    try {
      const res = await faqs.postGroupFaqs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getGroupFaqsAction = createAsyncThunk(
  'faqs/getGroupFaqsAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await faqs.getGroupFaqs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getGroupFaqsByAdminAction = createAsyncThunk(
  'faqs/getGroupFaqsByAdminAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await faqs.getGroupFaqsByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailGroupFaqsAction = createAsyncThunk(
  'faqs/getDetailGroupFaqsAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await faqs.getDetailGroupFaqs(params);
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailGroupFaqsByIdAction = createAsyncThunk(
  'faqs/getDetailGroupFaqsByIdAction',
  async (params: string, thunkAPI) => {
    try {
      const res = await faqs.getDetailGroupFaqsById(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putGroupFaqsAction = createAsyncThunk(
  'faqs/putGroupFaqsAction',
  async (params: ParameterPutFaqsGroup, thunkAPI) => {
    try {
      const res = await faqs.putGroupFaqs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteGroupFaqsAction = createAsyncThunk(
  'faqs/deleteGroupFaqsAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await faqs.deleteGroupFaqs(id);
      return { ...res, id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchMultiDeleteGroupFaqsAction = createAsyncThunk(
  'faqs/patchMultiDeleteGroupFaqsAction',
  async (faqsGroupIds: string[], thunkAPI) => {
    try {
      const res = await faqs.patchMultiDeleteGroupFaqs(faqsGroupIds);
      return { ...res, ids: faqsGroupIds };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchReorderGroupFaqsAction = createAsyncThunk(
  'faqs/patchReorderGroupFaqsAction',
  async (params: { id: string; index: number }, thunkAPI) => {
    try {
      const res = await faqs.patchReorderGroupFaqs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

export {
  getFaqsAction,
  getFaqsByAdminAction,
  postFaqsAction,
  getDetailFaqsByIdAction,
  putFaqsAction,
  deleteFaqsAction,
  patchMultiDeleteFaqsAction,
  patchReorderFaqsAction,
  postGroupFaqsAction,
  getGroupFaqsAction,
  getGroupFaqsByAdminAction,
  putGroupFaqsAction,
  patchReorderGroupFaqsAction,
  patchMultiDeleteGroupFaqsAction,
  deleteGroupFaqsAction,
  getDetailGroupFaqsAction,
  getDetailGroupFaqsByIdAction,
};
