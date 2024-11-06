import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParameterReOrder } from '@/config/constant';
import links from './social-links.api';
import { ParamPostLink, ParamPutLink } from './social-links.type';

const getLinksAction = createAsyncThunk('links/getLinksAction', async (_, thunkAPI) => {
  try {
    const res = await links.getLinks();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
  }
});
const getDetailLinksAction = createAsyncThunk(
  'links/getDetailLinksAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await links.getDetailLinks(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);
const postLinksAction = createAsyncThunk(
  'links/postLinksAction',
  async (params: ParamPostLink, thunkAPI) => {
    try {
      const res = await links.postLinks(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);
const putLinksAction = createAsyncThunk(
  'links/putLinksAction',
  async (params: ParamPutLink, thunkAPI) => {
    try {
      const res = await links.putLinks(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);
const deleteLinksAction = createAsyncThunk('links/putLinksAction', async (id: string, thunkAPI) => {
  try {
    const res = await links.deleteLinks(id);
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
  }
});
const patchLinkReOrderAction = createAsyncThunk(
  'businesses/patchBusinessesLocationsReOrderAction',
  async (params: ParameterReOrder, thunkAPI) => {
    try {
      const res = await links.patchLinkReOrder(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);
export {
  getLinksAction,
  getDetailLinksAction,
  postLinksAction,
  putLinksAction,
  deleteLinksAction,
  patchLinkReOrderAction,
};
