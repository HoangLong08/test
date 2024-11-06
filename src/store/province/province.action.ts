import { createAsyncThunk } from '@reduxjs/toolkit';
import province from './province.api';
import { ParamSearch } from './province.type';

const getAllProvince = createAsyncThunk('province/getAllProvince', async (_, thunkAPI) => {
  try {
    const res: any = await province.getAllProvince();

    return res?.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

const getDistrictsById = createAsyncThunk(
  'district/getDistrictsById',
  async (params: ParamSearch, thunkAPI) => {
    try {
      const res: any = await province.getDistrictsById(params);
      return res?.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getWardsById = createAsyncThunk('ward/getWardById', async (params: ParamSearch, thunkAPI) => {
  try {
    const res: any = await province.getWardsById(params);
    return res?.data;
  } catch (error: any) {
    return thunkAPI.rejectWithValue({ error: error.message });
  }
});

export { getAllProvince, getDistrictsById, getWardsById };
