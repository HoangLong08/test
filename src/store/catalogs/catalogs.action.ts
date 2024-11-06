import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import catalogs from './catalogs.api';
import { ParameterPost, ParameterPostSub, ParameterPut, ParameterPutSub } from './catalogs.type';

const getCatalogsGroupAllAction = createAsyncThunk(
  'catalogs/getCatalogsGroupAllAction',
  async (_, thunkAPI) => {
    try {
      const res = await catalogs.getCatalogsGroupAll();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getCatalogsGroupAllByAdminAction = createAsyncThunk(
  'catalogs/getCatalogsGroupAllByAdminAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await catalogs.getCatalogsGroupAllByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchMultiCatalogMainIsActiveAdminAction = createAsyncThunk(
  'catalogs/patchMultiCatalogMainIsActiveAdminAction',
  async (params: { isActive: boolean; catalogIds: string[] }, thunkAPI) => {
    try {
      const res = await catalogs.patchMultiCatalogMainIsActiveAdmin(params);
      return {
        ...res,
        catalogIds: params.catalogIds,
        isActive: params.isActive,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const patchMultiCatalogSubIsActiveAdminAction = createAsyncThunk(
  'catalogs/patchMultiCatalogSubIsActiveAdminAction',
  async (params: { isActive: boolean; catalogIds: string[] }, thunkAPI) => {
    try {
      const res = await catalogs.patchMultiCatalogSubIsActiveAdmin(params);
      return {
        ...res,
        catalogIds: params.catalogIds,
        isActive: params.isActive,
        // idMainCatalog: params.idMainCatalog,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const getDetailCatalogsMainAction = createAsyncThunk(
  'catalogs/getDetailCatalogsMainAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await catalogs.getDetailCatalogsMain(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailCatalogsSubAction = createAsyncThunk(
  'catalogs/getDetailCatalogsSubAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await catalogs.getDetailCatalogsSub(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postCatalogsMainAction = createAsyncThunk(
  'catalogs/postCatalogsMainAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await catalogs.postCatalogsMain(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postCatalogsSubAction = createAsyncThunk(
  'catalogs/postCatalogsSubAction',
  async (params: ParameterPostSub, thunkAPI) => {
    try {
      const res = await catalogs.postCatalogsSub(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putCatalogsMainAction = createAsyncThunk(
  'catalogs/putCatalogsMainAction',
  async (params: ParameterPut, thunkAPI) => {
    try {
      const res = await catalogs.putCatalogsMain(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const putCatalogsSubAction = createAsyncThunk(
  'catalogs/putCatalogsSubAction',
  async (params: ParameterPutSub, thunkAPI) => {
    try {
      const res = await catalogs.putCatalogsSub(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchCatalogsMainOrderAdminAction = createAsyncThunk(
  'catalogs/patchCatalogsMainOrderAdminAction',
  async (params: { activeId: string; activeIndex: number }, thunkAPI) => {
    try {
      const res = await catalogs.patchCatalogsMainOrderAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchCatalogsSubOrderAdminAction = createAsyncThunk(
  'catalogs/patchCatalogsSubOrderAdminAction',
  async (params: { activeId: string; activeIndex: number }, thunkAPI) => {
    try {
      const res = await catalogs.patchCatalogsSubOrderAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteCatalogsMainAction = createAsyncThunk(
  'catalogs/deleteCatalogsMainAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await catalogs.deleteCatalogsMain(id);
      return { ...res, idDelete: id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const deleteMultipleCatalogsMainAction = createAsyncThunk(
  'catalogs/deleteMultipleCatalogsMainAction',
  async (catalogIds: string[], thunkAPI) => {
    try {
      const res = await catalogs.deleteMultipleCatalogsMain(catalogIds);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const deleteCatalogsSubAction = createAsyncThunk(
  'catalogs/deleteCatalogsSubAction',
  async (
    { idMainCatalog, idSubCatalog }: { idMainCatalog: string; idSubCatalog: string },
    thunkAPI
  ) => {
    try {
      const res = await catalogs.deleteCatalogsSub(idSubCatalog);
      return { ...res, idMainCatalog, idDelete: idSubCatalog };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteMultipleCatalogsSubAction = createAsyncThunk(
  'catalogs/deleteMultipleCatalogsSubAction',
  async (catalogIds: string[], thunkAPI) => {
    try {
      const res = await catalogs.deleteMultipleCatalogsSub(catalogIds);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

export {
  getCatalogsGroupAllAction,
  getCatalogsGroupAllByAdminAction,
  getDetailCatalogsMainAction,
  getDetailCatalogsSubAction,
  postCatalogsMainAction,
  postCatalogsSubAction,
  putCatalogsMainAction,
  putCatalogsSubAction,
  patchCatalogsMainOrderAdminAction,
  patchCatalogsSubOrderAdminAction,
  deleteCatalogsMainAction,
  deleteMultipleCatalogsMainAction,
  deleteCatalogsSubAction,
  deleteMultipleCatalogsSubAction,
  patchMultiCatalogMainIsActiveAdminAction,
  patchMultiCatalogSubIsActiveAdminAction,
};
