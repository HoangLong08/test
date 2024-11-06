import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import permissions from './permissions.api';
import { ParameterPostPermissions, ParameterPutPermissions } from './permissions.type';

const getPermissionsAction = createAsyncThunk(
  'permissions/getPermissionsAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await permissions.getPermissions(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getPermissionByIdAction = createAsyncThunk(
  'permissions/getPermissionByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await permissions.getPermissionById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postGroupPermissionsAction = createAsyncThunk(
  'permissions/postGroupPermissionsAction',
  async (params: ParameterPostPermissions, thunkAPI) => {
    try {
      const res = await permissions.postGroupPermissions(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putGroupPermissionsAction = createAsyncThunk(
  'permissions/putGroupPermissionsAction',
  async (params: ParameterPutPermissions, thunkAPI) => {
    try {
      const res = await permissions.putGroupPermissions(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteGroupPermissionsAction = createAsyncThunk(
  'permissions/deleteGroupPermissionsAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await permissions.deleteGroupPermissions(id);
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
  getPermissionsAction,
  getPermissionByIdAction,
  postGroupPermissionsAction,
  putGroupPermissionsAction,
  deleteGroupPermissionsAction,
};
