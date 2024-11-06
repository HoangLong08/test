import { createAsyncThunk } from '@reduxjs/toolkit';
import users from './users.api';
import { ParameterGetUser, ParameterPost } from './users.type';

const getUsersAction = createAsyncThunk(
  'users/getUsersAction',
  async (params: ParameterGetUser, thunkAPI) => {
    try {
      const res = await users.getUsers(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailUserByIdAction = createAsyncThunk(
  'users/getDetailUserByIdAction',
  async (params: string, thunkAPI) => {
    try {
      const res = await users.getDetailUserById(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postUserForSaleAction = createAsyncThunk(
  'users/postUserForSaleAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await users.postUserForSale(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getAllPermissionAction = createAsyncThunk(
  'users/getAllPermissionAction',
  async (_, thunkAPI) => {
    try {
      const res = await users.getAllPermission();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getPermissionByUserIdAction = createAsyncThunk(
  'users/getPermissionByUserIdAction',
  async (params: string, thunkAPI) => {
    try {
      const res = await users.getPermissionByUserId(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const updatePermissionByUserIdAction = createAsyncThunk(
  'users/updatePermissionByUserIdAction',
  async (
    params: {
      id: string;
      permission: string[];
    },
    thunkAPI
  ) => {
    try {
      const res = await users.updatePermissionByUserId(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const resetPasswordByUserIdAction = createAsyncThunk(
  'users/resetPasswordByUserIdAction',
  async (
    params: {
      id: string;
      newPassword: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await users.resetPasswordByUserId(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteUsersAction = createAsyncThunk(
  'users/deleteUsersAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await users.deleteUsers(id);
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
  getUsersAction,
  getDetailUserByIdAction,
  deleteUsersAction,
  postUserForSaleAction,
  getAllPermissionAction,
  getPermissionByUserIdAction,
  updatePermissionByUserIdAction,
  resetPasswordByUserIdAction,
};
