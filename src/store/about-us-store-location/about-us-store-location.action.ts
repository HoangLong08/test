import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import aboutUsStoreLocation from './about-us-store-location.api';
import {
  ParameterPost,
  ParameterPostExtends,
  ParameterPostNews,
  ParameterPut,
  ParameterPutExtends,
  ParameterPutNews,
  StoreLocationType,
} from './about-us-store-location.type';

const getAboutUsAction = createAsyncThunk(
  'aboutUsStoreLocation/getAboutUsAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getAboutUs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getAboutUsFooterAction = createAsyncThunk(
  'aboutUsStoreLocation/getAboutUsFooterAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getAboutUs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postAboutUsAction = createAsyncThunk(
  'aboutUsStoreLocation/postAboutUsAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.postAboutUs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchAboutUsReOrderAdminAction = createAsyncThunk(
  'aboutUsStoreLocation/patchAboutUsReOrderAdminAction',
  async (params: { activeId: string; activeIndex: number }, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.patchAboutUsReOrderAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const putAboutUsAction = createAsyncThunk(
  'aboutUsStoreLocation/putAboutUsAction',
  async (params: ParameterPut, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.putAboutUs(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailAboutUsByIdAction = createAsyncThunk(
  'aboutUsStoreLocation/getDetailAboutUsByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getDetailAboutUsById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteAboutUsAction = createAsyncThunk(
  'aboutUsStoreLocation/postAboutUsAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.deleteAboutUs(id);
      return {
        ...res,
        id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteAboutUsAllAction = createAsyncThunk(
  'aboutUsStoreLocation/deleteAboutUsAllAction',
  async (params: { aboutUsIds: string[] }, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.deleteAboutUsAll(params);
      return { ...res, ids: params.aboutUsIds };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchIsShowAtHomeAction = createAsyncThunk(
  'aboutUsStoreLocation/patchIsShowAtHomeAction',
  async (params: { id: string }, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.patchIsShowAtHome(params);
      return {
        ...res,
        id: params.id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getInfoAboutUsShowAtHomeAction = createAsyncThunk(
  'aboutUsStoreLocation/getInfoAboutUsShowAtHomeAction',
  async (_, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getInfoAboutUsShowAtHome();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postAboutUsExtendsAction = createAsyncThunk(
  'aboutUsStoreLocation/postAboutUsExtendsAction',
  async (params: ParameterPostExtends, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.postAboutUsExtends(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailAboutUsExtendsByIdAction = createAsyncThunk(
  'aboutUsStoreLocation/getDetailAboutUsExtendsByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getDetailAboutUsExtendsById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putAboutUsExtendsAction = createAsyncThunk(
  'aboutUsStoreLocation/putAboutUsExtendsAction',
  async (params: ParameterPutExtends, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.putAboutUsExtends(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteAboutUsExtendsAction = createAsyncThunk(
  'aboutUsStoreLocation/deleteAboutUsExtendsAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.deleteAboutUsExtends(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getStoreLocationByAdminAction = createAsyncThunk(
  'aboutUsStoreLocation/getStoreLocationByAdminAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getStoreLocationByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getStoreLocationAction = createAsyncThunk(
  'aboutUsStoreLocation/getStoreLocationAction',
  async (_, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getStoreLocation();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailStoreLocationAction = createAsyncThunk(
  'aboutUsStoreLocation/getDetailStoreLocationAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getDetailStoreLocation(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postStoreLocationAction = createAsyncThunk(
  'aboutUsStoreLocation/postStoreLocationAction',
  async (params: StoreLocationType, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.postStoreLocation(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putStoreLocationAction = createAsyncThunk(
  'aboutUsStoreLocation/putStoreLocationAction',
  async (params: StoreLocationType, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.putStoreLocation(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteStoreLocationAction = createAsyncThunk(
  'aboutUsStoreLocation/deleteStoreLocationAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.deleteStoreLocation(id);
      return { ...res, idDelete: id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getNewsAction = createAsyncThunk(
  'aboutUsStoreLocation/getNewsAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getNews(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getNewsByAdminAction = createAsyncThunk(
  'aboutUsStoreLocation/getNewsByAdminAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getNewsByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailNewsByIdAction = createAsyncThunk(
  'aboutUsStoreLocation/getDetailNewsByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getDetailNewsById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailNewsByIdAdminAction = createAsyncThunk(
  'aboutUsStoreLocation/getDetailNewsByIdAdminAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getDetailNewsByIdAdmin(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postNewsByAdminAction = createAsyncThunk(
  'aboutUsStoreLocation/postNewsByAdminAction',
  async (params: ParameterPostNews, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.postNewsByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putNewsByAdminAction = createAsyncThunk(
  'aboutUsStoreLocation/putNewsByAdminAction',
  async (params: ParameterPutNews, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.putNewsByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteNewsByAdminAction = createAsyncThunk(
  'aboutUsStoreLocation/deleteNewsByAdminAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.deleteNewsByAdmin(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putMultiDeleteNewsAction = createAsyncThunk(
  'aboutUsStoreLocation/patchMultiDeleteNewsAction',
  async (ids: string[], thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.putMultiDeleteNews(ids);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchIsShowAtFooterNewsAction = createAsyncThunk(
  'aboutUsStoreLocation/patchIsShowAtFooterNewsAction',
  async (params: { id: string; isShowAtFooter: boolean }, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.patchIsShowAtFooterNews(params);
      return {
        ...res,
        id: params.id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchMultiNewsIsActiveAdminAction = createAsyncThunk(
  'catalogs/patchMultiNewsIsActiveAdminAction',
  async (params: { isActive: boolean; newsAndPressIds: string[] }, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.patchMultiNewsIsActive(params);
      return {
        ...res,
        newsAndPressIds: params.newsAndPressIds,
        isActive: params.isActive,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getNewsFooterAction = createAsyncThunk(
  'aboutUsStoreLocation/getNewsFooterAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getNews(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchIsShowAtFooterAboutUsAction = createAsyncThunk(
  'aboutUsStoreLocation/patchIsShowAtFooterAboutUsAction',
  async (params: { id: string; isShowAtFooter: boolean }, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.patchIsShowAtFooterAboutUs(params);
      return {
        ...res,
        id: params.id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getListAboutUsByGetMeasuredForAllAction = createAsyncThunk(
  'aboutUsStoreLocation/getListAboutUsByGetMeasuredForAllAction',
  async (_, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.getListAboutUsByGetMeasuredForAll();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchIsShowAtGetMeasuredAction = createAsyncThunk(
  'aboutUsStoreLocation/patchIsShowAtGetMeasuredAction',
  async (params: { id: string; isShowAtGetMeasure: boolean }, thunkAPI) => {
    try {
      const res = await aboutUsStoreLocation.patchIsShowAtGetMeasured(params);
      return {
        ...res,
        id: params.id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

export {
  getAboutUsAction,
  getAboutUsFooterAction,
  postAboutUsAction,
  getDetailAboutUsByIdAction,
  putAboutUsAction,
  deleteAboutUsAction,
  postAboutUsExtendsAction,
  getDetailAboutUsExtendsByIdAction,
  putAboutUsExtendsAction,
  deleteAboutUsExtendsAction,
  patchIsShowAtHomeAction,
  getStoreLocationByAdminAction,
  getStoreLocationAction,
  postStoreLocationAction,
  putStoreLocationAction,
  deleteStoreLocationAction,
  getDetailStoreLocationAction,
  patchAboutUsReOrderAdminAction,
  deleteAboutUsAllAction,
  getInfoAboutUsShowAtHomeAction,
  getNewsAction,
  getDetailNewsByIdAction,
  getNewsByAdminAction,
  getDetailNewsByIdAdminAction,
  postNewsByAdminAction,
  putNewsByAdminAction,
  deleteNewsByAdminAction,
  putMultiDeleteNewsAction,
  patchIsShowAtFooterNewsAction,
  patchMultiNewsIsActiveAdminAction,
  getNewsFooterAction,
  patchIsShowAtFooterAboutUsAction,
  getListAboutUsByGetMeasuredForAllAction,
  patchIsShowAtGetMeasuredAction,
};
