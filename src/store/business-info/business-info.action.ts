import businessInfo from '@/store/business-info/business-info.api';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { MetaDataSeo } from '@/config/constant';
import {
  ParamGetSlide,
  ParamPostSlide,
  ParamPostSlideEvent,
  ParamPutSlide,
  ParamPutSlideEvent,
  ParamsPutBusinessesInfo,
  PutAnnouncementBar,
} from './business-info.type';

const getSlideAction = createAsyncThunk(
  'businessInfo/getSlideAction',
  async (params: ParamGetSlide, thunkAPI) => {
    try {
      const res = await businessInfo.getSlide(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getSlideByAdminAction = createAsyncThunk(
  'businessInfo/getSlideByAdminAction',
  async (params: ParamGetSlide, thunkAPI) => {
    try {
      const res = await businessInfo.getSlideByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const patchIsShowVideBannerAdminAction = createAsyncThunk(
  'businessInfo/patchIsShowVideBannerAdminAction',
  async (isVideo: boolean, thunkAPI) => {
    try {
      const res = await businessInfo.patchIsShowVideBannerAdmin(isVideo);
      return {
        ...res,
        isVideo,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getDetailBannerByIdAction = createAsyncThunk(
  'businessInfo/getDetailBannerByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await businessInfo.getDetailBannerById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// thanh thông báo
const getAnnouncementBarAction = createAsyncThunk(
  'businessInfo/getAnnouncementBarAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await businessInfo.getAnnouncementBar(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getAnnouncementBarPublicAction = createAsyncThunk(
  'businessInfo/getAnnouncementBarPublicAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await businessInfo.getAnnouncementBarPublic(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// popup
const getInfoPopupAction = createAsyncThunk(
  'businessInfo/getInfoPopupAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await businessInfo.getAnnouncementBar(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getInfoPopupPublicAction = createAsyncThunk(
  'businessInfo/getInfoPopupPublicAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await businessInfo.getAnnouncementBarPublic(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const putAnnouncementBarAction = createAsyncThunk(
  'businessInfo/putAnnouncementBarAction',
  async (params: PutAnnouncementBar, thunkAPI) => {
    try {
      const res = await businessInfo.putAnnouncementBar(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

// --------------

const patchSlideIsActiveAdminAction = createAsyncThunk(
  'businessInfo/putSlideAdminAction',
  async (params: { id: string; isActive: boolean }, thunkAPI) => {
    try {
      const res = await businessInfo.patchSlideIsActiveAdmin(params);
      return {
        ...res,
        id: params.id,
        isActive: params.isActive,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const patchSlideReOrderAdminAction = createAsyncThunk(
  'businessInfo/patchSlideReOrderAdminAction',
  async (params: { activeId: string; activeIndex: number }, thunkAPI) => {
    try {
      const res = await businessInfo.patchSlideReOrderAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const postSlideAction = createAsyncThunk(
  'businessInfo/postSlideAction',
  async (params: ParamPostSlide, thunkAPI) => {
    try {
      const res = await businessInfo.postSlide(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getCheckShowVideoSlideAction = createAsyncThunk(
  'businessInfo/getCheckShowVideoSlideAction',
  async (_, thunkAPI) => {
    try {
      const res = await businessInfo.getCheckShowVideoSlide();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const putSlideAction = createAsyncThunk(
  'businessInfo/putSlideAction',
  async (params: ParamPutSlide, thunkAPI) => {
    try {
      const res = await businessInfo.putSlide(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const deleteSlideAction = createAsyncThunk(
  'businessInfo/deleteSlideAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await businessInfo.deleteSlide(id);
      return { ...res, idDelete: id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getBusinessInfoAction = createAsyncThunk(
  'businessInfo/getBusinessInfoAction',
  async (_, thunkAPI) => {
    try {
      const res = await businessInfo.getBusinessInfo();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const putBusinessInfoAction = createAsyncThunk(
  'businessInfo/putBusinessInfoAction',
  async (params: ParamsPutBusinessesInfo, thunkAPI) => {
    try {
      const res = await businessInfo.putBusinessInfo(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getBusinessLogoAction = createAsyncThunk(
  'businessInfo/getBusinessLogoAction',
  async (_, thunkAPI) => {
    try {
      const res = await businessInfo.getBusinessLogo();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getSlideEventAction = createAsyncThunk(
  'businessInfo/getSlideEventAction',
  async (_, thunkAPI) => {
    try {
      const res = await businessInfo.getSlideEvent();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getSlideEventByAdminAction = createAsyncThunk(
  'businessInfo/getSlideEventByAdminAction',
  async (_, thunkAPI) => {
    try {
      const res = await businessInfo.getSlideEventByAdmin();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getDetailSlideEventByIdAction = createAsyncThunk(
  'businessInfo/getDetailSlideEventByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await businessInfo.getDetailSlideEventById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const postSlideEventAction = createAsyncThunk(
  'businessInfo/postSlideEventAction',
  async (params: ParamPostSlideEvent, thunkAPI) => {
    try {
      const res = await businessInfo.postSlideEvent(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const putSlideEventAction = createAsyncThunk(
  'businessInfo/putSlideEventAction',
  async (params: ParamPutSlideEvent, thunkAPI) => {
    try {
      const res = await businessInfo.putSlideEvent(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const patchSlideEventIsActiveAdminAction = createAsyncThunk(
  'businessInfo/patchSlideEventIsActiveAdminAction',
  async (params: { id: string; isActive: boolean }, thunkAPI) => {
    try {
      const res = await businessInfo.patchSlideEventIsActiveAdmin(params);
      return {
        ...res,
        id: params.id,
        isActive: params.isActive,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const deleteSlideEventAction = createAsyncThunk(
  'businessInfo/deleteSlideEventAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await businessInfo.deleteSlideEvent(id);
      return { ...res, idDelete: id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const patchSlideEventReOrderAdminAction = createAsyncThunk(
  'businessInfo/patchSlideEventReOrderAdminAction',
  async (params: { activeId: string; activeIndex: number }, thunkAPI) => {
    try {
      const res = await businessInfo.patchSlideEventReOrderAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getSeoHomePageAction = createAsyncThunk(
  'businessInfo/getSeoHomePageAction',
  async (_, thunkAPI) => {
    try {
      const res = await businessInfo.getSeoHomePage();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const patchSeoHomePageAction = createAsyncThunk(
  'businessInfo/patchSeoHomePageAction',
  async (params: MetaDataSeo, thunkAPI) => {
    try {
      const res = await businessInfo.patchSeoHomePage(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export {
  getSlideAction,
  getSlideByAdminAction,
  deleteSlideAction,
  postSlideAction,
  putSlideAction,
  patchSlideIsActiveAdminAction,
  patchSlideReOrderAdminAction,
  getDetailBannerByIdAction,
  getAnnouncementBarAction,
  getAnnouncementBarPublicAction,
  putAnnouncementBarAction,
  getInfoPopupAction,
  getInfoPopupPublicAction,
  getBusinessInfoAction,
  patchIsShowVideBannerAdminAction,
  getCheckShowVideoSlideAction,
  putBusinessInfoAction,
  getBusinessLogoAction,
  getSlideEventAction,
  getSlideEventByAdminAction,
  postSlideEventAction,
  putSlideEventAction,
  getDetailSlideEventByIdAction,
  patchSlideEventIsActiveAdminAction,
  deleteSlideEventAction,
  patchSlideEventReOrderAdminAction,
  getSeoHomePageAction,
  patchSeoHomePageAction,
};
