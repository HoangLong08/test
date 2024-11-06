import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import tags from './tags.api';
import { ParameterPost, ParameterPut } from './tags.type';

const getTagsAction = createAsyncThunk('tags/getTagsAction', async (_, thunkAPI) => {
  try {
    const res = await tags.getTags();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
  }
});

const getTagsByAdminAction = createAsyncThunk(
  'tags/getTagsByAdminAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await tags.getTagsByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postTagsAction = createAsyncThunk(
  'tags/postTagsAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await tags.postTags(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const putTagsAction = createAsyncThunk(
  'tags/putTagsAction',
  async (params: ParameterPut, thunkAPI) => {
    try {
      const res = await tags.putTags(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getDetailTagsByIdAction = createAsyncThunk(
  'tags/getDetailTagsByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await tags.getDetailTagsById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteTagsAction = createAsyncThunk('tags/deleteTagsAction', async (id: string, thunkAPI) => {
  try {
    const res = await tags.deleteTags(id);
    return {
      ...res,
      id,
    };
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
  }
});

const patchMultiActiveRibbonsAction = createAsyncThunk(
  'tags/patchMultiActiveRibbonsAction',
  async (params: { isActive: boolean; ids: string[] }, thunkAPI) => {
    try {
      const res = await tags.patchMultiActiveRibbons(params);
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

export {
  getTagsAction,
  getTagsByAdminAction,
  postTagsAction,
  getDetailTagsByIdAction,
  putTagsAction,
  deleteTagsAction,
  patchMultiActiveRibbonsAction,
};
