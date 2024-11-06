import { createSlice } from '@reduxjs/toolkit';
import { DashboardType } from './dashboard.type';
import { getDashboardAdminAction } from './dashboard.action';

const initialState = {
  getDashboardAdmin: {
    data: {} as DashboardType,
    load: false,
    error: '',
  },
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // --------------
    builder.addCase(getDashboardAdminAction.pending, (state) => ({
      ...state,
      getDashboardAdmin: {
        ...state.getDashboardAdmin,
        load: true,
      },
    }));
    builder.addCase(getDashboardAdminAction.fulfilled, (state, action: any) => ({
      ...state,
      getDashboardAdmin: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDashboardAdminAction.rejected, (state) => ({
      ...state,
      getDashboardAdmin: {
        ...state.getDashboardAdmin,
        load: false,
      },
    }));
  },
});

export default dashboardSlice.reducer;
