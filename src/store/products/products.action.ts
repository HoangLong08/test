import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import products from './products.api';
import {
  BodyFilterGroupSearch,
  BodyFilterSearch,
  ParamGetProductAdmin,
  ParameterPost,
  ParameterPostProductSoLike,
  ParameterPut,
  PatchMultiDeleteProduct,
} from './products.type';

const getProductsAction = createAsyncThunk(
  'products/getProductsAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await products.getProducts(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getProductsByAdminAction = createAsyncThunk(
  'products/getProductsByAdminAction',
  async (params: ParamGetProductAdmin, thunkAPI) => {
    try {
      const res = await products.getProductsByAdmin(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getProductsAllForDropdownByAdminAction = createAsyncThunk(
  'products/getProductsAllForDropdownByAdminAction',
  async (_, thunkAPI) => {
    try {
      const res = await products.getProductsAllForDropdownByAdmin();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getProductAtHomePageAction = createAsyncThunk(
  'products/getProductAtHomePageAction',
  async (params: string[], thunkAPI) => {
    try {
      const promises = params.map((id) => products.getProductAtHomePage(id));
      const results = await Promise.all(promises);

      return {
        data: results,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postProductsAction = createAsyncThunk(
  'products/postProductsAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await products.postProducts(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const putProductsAction = createAsyncThunk(
  'products/putProductsAction',
  async (params: ParameterPut, thunkAPI) => {
    try {
      const res = await products.putProducts(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getDetailProductsByIdAction = createAsyncThunk(
  'products/getDetailProductsByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await products.getDetailProductsById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailProductsByIdAdminAction = createAsyncThunk(
  'products/getDetailProductsByIdAdminAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await products.getDetailProductsByIdAdmin(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteProductsAction = createAsyncThunk(
  'products/deleteProductsAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await products.deleteProducts(id);
      return {
        ...res,
        id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

// mix and match
const getProductMixAndMatchAction = createAsyncThunk(
  'products/getProductMixAndMatchAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await products.getProductMixAndMatch(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

// you may also like
const getProductAlsoLikeAction = createAsyncThunk(
  'products/getProductAlsoLikeAction',
  async (params: ParameterPostProductSoLike, thunkAPI) => {
    try {
      const res = await products.getProductAlsoLike(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchMultiActiveProductAction = createAsyncThunk(
  'products/patchMultiActiveProductAction',
  async (params: PatchMultiDeleteProduct, thunkAPI) => {
    try {
      const res = await products.patchMultiActiveProduct(params);
      return {
        ...res,
        productIds: params.productIds,
        isActive: params.isActive,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postExcelImportProductAction = createAsyncThunk(
  'products/postExcelImportProductAction',
  async (params: { file: File }, thunkAPI) => {
    try {
      const res = await products.postExcelImportProduct(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const postFilterProductsAction = createAsyncThunk(
  'products/postFilterProductsAction',
  async (params: BodyFilterSearch, thunkAPI) => {
    try {
      const res = await products.postFilterProducts(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const postFilterProductsByCatalogAction = createAsyncThunk(
  'products/postFilterProductsByCatalogAction',
  async (params: BodyFilterGroupSearch, thunkAPI) => {
    try {
      const res = await products.postFilterProductsByCatalog(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getProductByAllCatalogsAction = createAsyncThunk(
  'products/getProductByAllCatalogsAction',
  async (_, thunkAPI) => {
    try {
      const res = await products.getProductByAllCatalogs();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postS3ServiceImageProductAction = createAsyncThunk(
  'products/postS3ServiceImageProductAction',
  async (params: { sourceFolder: string }, thunkAPI) => {
    try {
      const res = await products.postS3ServiceImageProduct(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getListS3TrackingAction = createAsyncThunk(
  'products/getListS3TrackingAction',
  async (params: { type: string }, thunkAPI) => {
    try {
      const res = await products.getListS3Tracking(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

export {
  getProductsAction,
  getProductsByAdminAction,
  postProductsAction,
  getDetailProductsByIdAction,
  getDetailProductsByIdAdminAction,
  putProductsAction,
  deleteProductsAction,
  getProductAtHomePageAction,
  getProductMixAndMatchAction,
  getProductAlsoLikeAction,
  postExcelImportProductAction,
  patchMultiActiveProductAction,
  postFilterProductsAction,
  postFilterProductsByCatalogAction,
  getProductsAllForDropdownByAdminAction,
  getProductByAllCatalogsAction,
  postS3ServiceImageProductAction,
  getListS3TrackingAction,
};
