import { ParameterGet, ParameterRequestLanguage } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import logistics from './logistics.api';
import {
  ExtendedParameterGetDomesticPostals,
  ParameterPostExcelImportDomesticPostal,
  ParameterPostExcelImportPostalService,
  ParameterPostNational,
  ParameterPostPostalTariff,
  ParameterPutNational,
  ParameterPutPostalTariff,
} from './logistics.type';

const getNationalAction = createAsyncThunk('logistics/getNationalAction', async (_, thunkAPI) => {
  try {
    const res = await logistics.getNational();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
  }
});

const getNationalByAdminAction = createAsyncThunk(
  'logistics/getNationalByAdminAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await logistics.getNationalByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postNationalAction = createAsyncThunk(
  'logistics/postNationalAction',
  async (params: ParameterPostNational, thunkAPI) => {
    try {
      const res = await logistics.postNational(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postExcelImportPostalServiceAction = createAsyncThunk(
  'logistics/postExcelImportPostalServiceAction',
  async (params: ParameterPostExcelImportPostalService, thunkAPI) => {
    try {
      const res = await logistics.postExcelImportPostalService(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const putNationalAction = createAsyncThunk(
  'logistics/putNationalAction',
  async (params: ParameterPutNational, thunkAPI) => {
    try {
      const res = await logistics.putNational(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailNationalByIdAction = createAsyncThunk(
  'logistics/getDetailNationalByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await logistics.getDetailNationalById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteNationalAction = createAsyncThunk(
  'logistics/deleteNationalAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await logistics.deleteNational(id);
      return {
        ...res,
        id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getPostalTariffByIdNationalAdminAction = createAsyncThunk(
  'logistics/getPostalTariffByIdNationalAdminAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await logistics.getPostalTariffByIdNationalAdmin(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postDetailPostalTariffAction = createAsyncThunk(
  'logistics/postDetailPostalTariffAction',
  async (params: ParameterPostPostalTariff, thunkAPI) => {
    try {
      const res = await logistics.postDetailPostalTariff(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putDetailPostalTariffAction = createAsyncThunk(
  'logistics/putDetailPostalTariffAction',
  async (params: ParameterPutPostalTariff, thunkAPI) => {
    try {
      const res = await logistics.putDetailPostalTariff(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deletePostalTariffAction = createAsyncThunk(
  'logistics/deletePostalTariffAction',
  async (
    params: { nationalId: string; excelCode: string; fromDate: string; toDate: string },
    thunkAPI
  ) => {
    try {
      const res = await logistics.deletePostalTariff(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deletePostalTariffSmallAction = createAsyncThunk(
  'logistics/deletePostalTariffSmallAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await logistics.deletePostalTariffSmall(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDomesticPostalsAction = createAsyncThunk(
  'logistics/getDomesticPostalsAction',
  async (params: ExtendedParameterGetDomesticPostals, thunkAPI) => {
    try {
      const res = await logistics.getDomesticPostals(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDomesticPostalsByAdminAction = createAsyncThunk(
  'logistics/getDomesticPostalsByAdminAction',
  async (params: ExtendedParameterGetDomesticPostals, thunkAPI) => {
    try {
      const res = await logistics.getDomesticPostalsByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postExcelImportDomesticPostalsAction = createAsyncThunk(
  'logistics/postExcelImportDomesticPostalsAction',
  async (params: ParameterPostExcelImportDomesticPostal, thunkAPI) => {
    try {
      const res = await logistics.postExcelImportDomesticPostals(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteDomesticPostalsAction = createAsyncThunk(
  'logistics/deleteDomesticPostalsAction',
  async (
    params: { excelCode: string; expirationDate: string; effectiveDate: string },
    thunkAPI
  ) => {
    try {
      const res = await logistics.deleteDomesticPostals(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

// ghi chú vận chuyển quốc tế
const getNoticeByTypeNationalAction = createAsyncThunk(
  'logistics/getNoticeByTypeNationalAction',
  async (_, thunkAPI) => {
    try {
      const res = await logistics.getNoticeByType('INTERNATIONAL');
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

// ghi chú vận chuyển trong nước
const getNoticeByTypeInternalAction = createAsyncThunk(
  'logistics/getNoticeByTypeInternalAction',
  async (_, thunkAPI) => {
    try {
      const res = await logistics.getNoticeByType('INTERNAL');
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putNoticeByTypeAction = createAsyncThunk(
  'logistics/putNoticeByTypeAction',
  async (params: { noticeType: string; notice: ParameterRequestLanguage }, thunkAPI) => {
    try {
      const res = await logistics.putNoticeByType(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getPostalTariffShippingEstimateAction = createAsyncThunk(
  'logistics/getPostalTariffShippingEstimateAction',
  async (params: { weight: number; nationalId: string }, thunkAPI) => {
    try {
      const res = await logistics.getPostalTariffShippingEstimate(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getPostalTariffShippingEstimateDomesticsAction = createAsyncThunk(
  'logistics/getPostalTariffShippingEstimateDomesticsAction',
  async (params: { weight: number; receiver: any }, thunkAPI) => {
    try {
      const res = await logistics.getPostalTariffShippingEstimateDomestics(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postPostalTariffShippingEstimateDomesticsAction = createAsyncThunk(
  'logistics/postPostalTariffShippingEstimateDomesticsAction',
  async (
    params: {
      weight: number;
      intraProvinces: number;
      intraDomain: number;
      nearDomain: number;
      HaNoi_DaNang_HCM: number;
      effectiveDate: string;
      expirationDate: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await logistics.postPostalTariffShippingEstimateDomestics(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const putPostalTariffShippingEstimateDomesticsAction = createAsyncThunk(
  'logistics/putPostalTariffShippingEstimateDomesticsAction',
  async (
    params: {
      id: string;
      weight: number;
      intraProvinces: number;
      intraDomain: number;
      nearDomain: number;
      HaNoi_DaNang_HCM: number;
      effectiveDate: string;
      expirationDate: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await logistics.putPostalTariffShippingEstimateDomestics(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

export {
  getNationalAction,
  getNationalByAdminAction,
  postNationalAction,
  getDetailNationalByIdAction,
  putNationalAction,
  deleteNationalAction,
  getPostalTariffByIdNationalAdminAction,
  postDetailPostalTariffAction,
  putDetailPostalTariffAction,
  deletePostalTariffAction,
  postExcelImportPostalServiceAction,
  getDomesticPostalsAction,
  getDomesticPostalsByAdminAction,
  postExcelImportDomesticPostalsAction,
  deleteDomesticPostalsAction,
  deletePostalTariffSmallAction,
  getNoticeByTypeNationalAction,
  getNoticeByTypeInternalAction,
  putNoticeByTypeAction,
  getPostalTariffShippingEstimateAction,
  getPostalTariffShippingEstimateDomesticsAction,
  putPostalTariffShippingEstimateDomesticsAction,
  postPostalTariffShippingEstimateDomesticsAction,
};
