import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import favorites from './favorites.api';
import { ParamSearchFavorites } from './favorites.type';

const getProductFavoritesAction = createAsyncThunk(
  'favorites/getProductFavoritesAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await favorites.getProductFavorites(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getFavoritesByAdminAction = createAsyncThunk(
  'favorites/getFavoritesByAdminAction',
  async (params: ParamSearchFavorites, thunkAPI) => {
    try {
      const res = await favorites.getFavoritesByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postFavoritesAction = createAsyncThunk(
  'favorites/postFavoritesAction',
  async (params: string, thunkAPI) => {
    try {
      const res = await favorites.postFavorites(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailFavoritesByIdAction = createAsyncThunk(
  'favorites/getDetailFavoritesByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await favorites.getDetailFavoritesById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getIdsFavoritesOnlyMeAction = createAsyncThunk(
  'favorites/getIdsFavoritesOnlyMeAction',
  async (_, thunkAPI) => {
    try {
      const res = await favorites.getIdsFavoritesOnlyMe();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteFavoritesAction = createAsyncThunk(
  'favorites/deleteFavoritesAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await favorites.deleteFavorites(id);
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
  getFavoritesByAdminAction,
  getProductFavoritesAction,
  postFavoritesAction,
  getIdsFavoritesOnlyMeAction,
  getDetailFavoritesByIdAction,
  deleteFavoritesAction,
};
