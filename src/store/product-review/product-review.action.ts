import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParameterGet } from '@/config/constant';
import productReview from './product-review.api';
import { PatchQuestionOrder, PostProductReview, ProductReviewType } from './product-review.type';

const getProductReviewByAdminAction = createAsyncThunk(
  'productReview/getProductReviewByAdminAction',
  async (param: ParameterGet, thunkAPI) => {
    try {
      const res = await productReview.getProductReviewByAdmin(param);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getProductReviewAction = createAsyncThunk(
  'productReview/getProductReviewAction',
  async (param: ParameterGet, thunkAPI) => {
    try {
      const res = await productReview.getProductReview(param);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getQuestionsByProductIdAction = createAsyncThunk(
  'productReview/getQuestionsByProductIdAction',
  async (productId: string, thunkAPI) => {
    try {
      const res = await productReview.getQuestionsByProductId(productId);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getProductReviewAllAction = createAsyncThunk(
  'productReview/getProductReviewAllAction',
  async (_, thunkAPI) => {
    try {
      const res = await productReview.getProductReviewAll();
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailProductReviewAction = createAsyncThunk(
  'productReview/getDetailProductReviewAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await productReview.getDetailProductReview(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const getDetailProductReviewByAdminAction = createAsyncThunk(
  'productReview/getDetailProductReviewByAdminAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await productReview.getDetailProductReviewByAdmin(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);
const postProductReviewQuestionAction = createAsyncThunk(
  'productReview/postProductReviewQuestionAction',
  async (body: PostProductReview, thunkAPI) => {
    try {
      const res = await productReview.postProductReviewQuestion(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);
const postProductReviewAction = createAsyncThunk(
  'productReview/postProductReviewAction',
  async (body: PostProductReview, thunkAPI) => {
    try {
      const res = await productReview.postProductReview(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);
const patchQuestionsAction = createAsyncThunk(
  'productReview/patchQuestionsAction',
  async (body: PatchQuestionOrder, thunkAPI) => {
    try {
      const res = await productReview.patchQuestions(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);
const putProductReviewAction = createAsyncThunk(
  'productReview/putProductReviewAction',
  async (body: ProductReviewType, thunkAPI) => {
    try {
      const res = await productReview.putProductReview(body);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);
const deleteProductReviewQuestionAction = createAsyncThunk(
  'productReview/deleteProductReviewQuestionAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await productReview.deleteProductReviewQuestion(id);
      return { ...res, idDelete: id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);
const deleteProductReviewAction = createAsyncThunk(
  'productReview/deleteProductReviewAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await productReview.deleteProductReview(id);
      return { ...res, idDelete: id };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

export {
  getProductReviewByAdminAction,
  postProductReviewQuestionAction,
  getProductReviewAction,
  postProductReviewAction,
  patchQuestionsAction,
  putProductReviewAction,
  deleteProductReviewQuestionAction,
  deleteProductReviewAction,
  getDetailProductReviewAction,
  getDetailProductReviewByAdminAction,
  getProductReviewAllAction,
  getQuestionsByProductIdAction,
};
