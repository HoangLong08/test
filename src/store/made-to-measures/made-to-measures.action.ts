import { createAsyncThunk } from '@reduxjs/toolkit';
import madeToMeasures from './made-to-measures.api';
import {
  ParamMadeToMeasureGuidePopup,
  ParamPutMadeToMeasureForm,
  ParamPutMadeToMeasureGuide,
  ParameterPost,
} from './made-to-measures.type';

const postMadeToMeasuresAction = createAsyncThunk(
  'madeToMeasures/postMadeToMeasuresAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await madeToMeasures.postMadeToMeasures(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getMadeToMeasuresFormAction = createAsyncThunk(
  'madeToMeasures/getMadeToMeasuresFormAction',
  async (_, thunkAPI) => {
    try {
      const res = await madeToMeasures.getMadeToMeasuresForm();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putMadeToMeasuresFormAction = createAsyncThunk(
  'madeToMeasures/putMadeToMeasuresFormAction',
  async (params: ParamPutMadeToMeasureForm, thunkAPI) => {
    try {
      const res = await madeToMeasures.putMadeToMeasuresForm(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailMadeToMeasuresByIdAction = createAsyncThunk(
  'madeToMeasures/getDetailMadeToMeasuresById',
  async (id: string, thunkAPI) => {
    try {
      const res = await madeToMeasures.getDetailMadeToMeasuresById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailMadeToMeasuresByOrderIdAction = createAsyncThunk(
  'madeToMeasures/getDetailMadeToMeasuresByOrderId',
  async (id: string, thunkAPI) => {
    try {
      const res = await madeToMeasures.getDetailMadeToMeasuresByOrderId(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getMadeToMeasuresGuideAction = createAsyncThunk(
  'madeToMeasures/getMadeToMeasuresGuide',
  async (_, thunkAPI) => {
    try {
      const res = await madeToMeasures.getMadeToMeasuresGuide();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putMadeToMeasuresGuideAction = createAsyncThunk(
  'madeToMeasures/putMadeToMeasuresGuide',
  async (params: ParamPutMadeToMeasureGuide, thunkAPI) => {
    try {
      const res = await madeToMeasures.putMadeToMeasuresGuide(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getMadeToMeasuresGuidePopupAction = createAsyncThunk(
  'madeToMeasures/getMadeToMeasuresGuidePopupAction',
  async (_, thunkAPI) => {
    try {
      const res = await madeToMeasures.getMadeToMeasuresGuidePopup();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putMadeToMeasuresGuidePopupAction = createAsyncThunk(
  'madeToMeasures/putMadeToMeasuresGuidePopupAction',
  async (params: ParamMadeToMeasureGuidePopup, thunkAPI) => {
    try {
      const res = await madeToMeasures.putMadeToMeasuresGuidePopup(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteMadeToMeasuresAction = createAsyncThunk(
  'madeToMeasures/deleteMadeToMeasuresAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await madeToMeasures.deleteMadeToMeasures(id);
      return {
        ...res,
        id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

export {
  postMadeToMeasuresAction,
  getDetailMadeToMeasuresByOrderIdAction,
  getDetailMadeToMeasuresByIdAction,
  getMadeToMeasuresFormAction,
  putMadeToMeasuresFormAction,
  deleteMadeToMeasuresAction,
  getMadeToMeasuresGuideAction,
  putMadeToMeasuresGuideAction,
  getMadeToMeasuresGuidePopupAction,
  putMadeToMeasuresGuidePopupAction,
};
