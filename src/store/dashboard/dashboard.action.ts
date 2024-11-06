import { createAsyncThunk } from '@reduxjs/toolkit';
import dashboard from './dashboard.api';
import { DashboardParams } from './dashboard.type';

const getDashboardAdminAction = createAsyncThunk(
  'dashboard/getDashboardAdmin',
  async (params: DashboardParams, thunkAPI) => {
    try {
      const res = await dashboard.getDashboardAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export { getDashboardAdminAction };
