import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import settingApp from './setting-app.api';

const getListHistoryActivityAction = createAsyncThunk(
  'settingApp/getListHistoryActivityAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await settingApp.getListHistoryActivity(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getVietcombankExchangeRateAction = createAsyncThunk(
  'settingApp/getVietcombankExchangeRateAction',
  async (_, thunkAPI) => {
    try {
      const res = await settingApp.getVietcombankExchangeRate();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getThemeAction = createAsyncThunk('settingApp/getThemeAction', async (_, thunkAPI) => {
  try {
    const res = await settingApp.getTheme();
    return res;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
  }
});

const putThemeAction = createAsyncThunk(
  'settingApp/putThemeAction',
  async (
    params: {
      backgroundColor: string;
      textColor: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await settingApp.putTheme(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const downloadListHistoryActivityAction = createAsyncThunk(
  'settingApp/downloadListHistoryActivityAction',
  async (_, thunkAPI) => {
    try {
      const res = await settingApp.downloadExcel();
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(new Blob([res]));
      downloadLink.setAttribute('download', 'YalyCouture-active-logs.xlsx');
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

export {
  getListHistoryActivityAction,
  getVietcombankExchangeRateAction,
  downloadListHistoryActivityAction,
  getThemeAction,
  putThemeAction,
};
