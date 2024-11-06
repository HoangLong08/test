import { ParameterGet } from '@/config/constant';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ParameterPost } from './subscriptions.type';
import subscriptions from './subscriptions.api';

const getSubscriptionsAction = createAsyncThunk(
  'subscriptions/getSubscriptionsAction',
  async (params: ParameterGet, thunkAPI) => {
    try {
      const res = await subscriptions.getSubscriptions(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const postSubscriptionsAction = createAsyncThunk(
  'subscriptions/postSubscriptionsAction',
  async (params: ParameterPost, thunkAPI) => {
    try {
      const res = await subscriptions.postSubscriptions(params);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

const getDetailSubscriptionsByIdAction = createAsyncThunk(
  'subscriptions/getDetailSubscriptionsByIdAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await subscriptions.getDetailSubscriptionsById(id);
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteSubscriptionsAction = createAsyncThunk(
  'subscriptions/deleteSubscriptionsAction',
  async (id: string, thunkAPI) => {
    try {
      const res = await subscriptions.deleteSubscriptions(id);
      return {
        ...res,
        id,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const patchMultiDeleteAction = createAsyncThunk(
  'subscriptions/patchMultiDeleteAction',
  async (ids: string[], thunkAPI) => {
    try {
      const res = await subscriptions.patchMultiDelete(ids);
      return {
        ...res,
        ids,
      };
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

const deleteUnSubscriptionsByEmailAction = createAsyncThunk(
  'subscriptions/deleteUnSubscriptionsByEmailAction',
  async (
    {
      email,
      languageCode,
    }: {
      email: string;
      languageCode: string;
    },
    thunkAPI
  ) => {
    try {
      const res = await subscriptions.deleteUnSubscriptionsByEmail({
        email,
        languageCode,
      });
      return res;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data.messageCode });
    }
  }
);

export {
  getSubscriptionsAction,
  postSubscriptionsAction,
  getDetailSubscriptionsByIdAction,
  deleteSubscriptionsAction,
  patchMultiDeleteAction,
  deleteUnSubscriptionsByEmailAction,
};
