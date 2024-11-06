import { MetaPagination } from '@/config/constant';
import { createSlice } from '@reduxjs/toolkit';
import { getAllProvince, getDistrictsById, getWardsById } from './province.action';
import { DistrictType, ProvinceType, WardType } from './province.type';

const initialState = {
  getAllProvinces: {
    data: [] as ProvinceType[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
  getDistrictsById: {
    data: [] as DistrictType[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
  getWardById: {
    data: [] as WardType[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
};

const provinceSlice = createSlice({
  name: 'province',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProvince.pending, (state) => ({
      ...state,
      getAllProvinces: {
        ...state.getAllProvinces,
        load: true,
      },
    }));
    builder.addCase(getAllProvince.fulfilled, (state, action: any) => ({
      ...state,
      getAllProvinces: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getAllProvince.rejected, (state) => ({
      ...state,
      getAllProvinces: {
        ...state.getAllProvinces,
        load: false,
      },
    }));

    // ----------------
    builder.addCase(getDistrictsById.pending, (state) => ({
      ...state,
      getDistrictsById: {
        ...state.getDistrictsById,
        load: true,
      },
    }));
    builder.addCase(getDistrictsById.fulfilled, (state, action: any) => ({
      ...state,
      getDistrictsById: {
        data: action.payload.data.districts,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDistrictsById.rejected, (state) => ({
      ...state,
      getDistrictsById: {
        ...state.getDistrictsById,
        load: false,
      },
    }));

    // ----------------
    builder.addCase(getWardsById.pending, (state) => ({
      ...state,
      getWardById: {
        ...state.getWardById,
        load: true,
      },
    }));
    builder.addCase(getWardsById.fulfilled, (state, action: any) => ({
      ...state,
      getWardById: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getWardsById.rejected, (state) => ({
      ...state,
      getWardById: {
        ...state.getWardById,
        load: false,
      },
    }));
  },
});
export default provinceSlice.reducer;
