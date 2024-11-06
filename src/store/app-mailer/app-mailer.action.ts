import { createAsyncThunk } from '@reduxjs/toolkit';
import appMailer from './app-mailer.api';
import { TranslateType } from '../translation/translation.type';

const getAppMailerAction = createAsyncThunk('appMailer/getAppMailerAction', async (_, thunkAPI) => {
  try {
    const res = await appMailer.getAppMailer();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
  }
});

const getTemplateContentAction = createAsyncThunk(
  'appMailer/getTemplateContentAction',
  async (params: string, thunkAPI) => {
    try {
      const res = await appMailer.getTemplateContent(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putTemplateContentAction = createAsyncThunk(
  'appMailer/getTemplateContentAction',
  async (params: { mission: string; subject: TranslateType; content: TranslateType }, thunkAPI) => {
    try {
      const res = await appMailer.putTemplateContent(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getVariableAssignsValueTemplateContentAction = createAsyncThunk(
  'appMailer/getVariableAssignsValueTemplateContentAction',
  async (params: { mission: string }, thunkAPI) => {
    try {
      const res = await appMailer.getVariableAssignsValueTemplateContent(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putVariableAssignsValueTemplateContentAction = createAsyncThunk(
  'appMailer/putVariableAssignsValueTemplateContentAction',
  async (
    params: {
      mission: string;
      description: string | undefined;
      subjectValues: { value: string; description: string }[] | undefined;
      contextValues: { value: string; description: string }[] | undefined;
    },
    thunkAPI
  ) => {
    try {
      const res = await appMailer.putVariableAssignsValueTemplateContent(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const patchMultiEmailTemplateIsActiveAdminAction = createAsyncThunk(
  'appMailer/patchMultiEmailTemplateIsActiveAdminAction',
  async (params: { isActive: boolean; id: string }, thunkAPI) => {
    try {
      const res = await appMailer.patchMultiEmailTemplateIsActiveAdmin(params);
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

const getSendMailerAction = createAsyncThunk(
  'appMailer/getSendMailerAction',
  async (
    params: {
      languageCode: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await appMailer.getSendMailer(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

export {
  getAppMailerAction,
  getTemplateContentAction,
  putTemplateContentAction,
  getVariableAssignsValueTemplateContentAction,
  putVariableAssignsValueTemplateContentAction,
  patchMultiEmailTemplateIsActiveAdminAction,
  getSendMailerAction,
};
