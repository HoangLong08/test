import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { SubscriptionsStateReducer, ItemSubscriptions } from './subscriptions.type';
import {
  deleteSubscriptionsAction,
  getDetailSubscriptionsByIdAction,
  getSubscriptionsAction,
  patchMultiDeleteAction,
} from './subscriptions.action';

const initialState: SubscriptionsStateReducer = {
  listSubscriptions: {
    data: [] as ItemSubscriptions[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailSubscriptions: {
    data: {} as ItemSubscriptions,
    load: false,
    error: '',
  },
};

const subscriptionsSlice = createSlice({
  name: 'Subscriptions',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getSubscriptionsAction.pending, (state: SubscriptionsStateReducer) => ({
      ...state,
      listSubscriptions: {
        ...state.listSubscriptions,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getSubscriptionsAction.fulfilled,
      (state: SubscriptionsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listSubscriptions: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getSubscriptionsAction.rejected, (state: SubscriptionsStateReducer) => ({
      ...state,
      listSubscriptions: {
        data: [] as ItemSubscriptions[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      getDetailSubscriptionsByIdAction.pending,
      (state: SubscriptionsStateReducer) => ({
        ...state,
        detailSubscriptions: {
          ...state.detailSubscriptions,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailSubscriptionsByIdAction.fulfilled,
      (state: SubscriptionsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailSubscriptions: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailSubscriptionsByIdAction.rejected,
      (state: SubscriptionsStateReducer) => ({
        ...state,
        detailFaqs: {
          ...state.detailSubscriptions,
          load: false,
          error: '',
        },
      })
    );

    // ------------------
    builder.addCase(deleteSubscriptionsAction.pending, (state: SubscriptionsStateReducer) => ({
      ...state,
      listSubscriptions: {
        ...state.listSubscriptions,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteSubscriptionsAction.fulfilled,
      (state: SubscriptionsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listSubscriptions: {
          ...state.listSubscriptions,
          data: state.listSubscriptions.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteSubscriptionsAction.rejected, (state: SubscriptionsStateReducer) => ({
      ...state,
      listSubscriptions: {
        ...state.listSubscriptions,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(patchMultiDeleteAction.pending, (state: SubscriptionsStateReducer) => ({
      ...state,
      listSubscriptions: {
        ...state.listSubscriptions,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      patchMultiDeleteAction.fulfilled,
      (state: SubscriptionsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listSubscriptions: {
          ...state.listSubscriptions,
          data: state.listSubscriptions.data.filter(
            (item) => !action.payload.ids.includes(item.id)
          ),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(patchMultiDeleteAction.rejected, (state: SubscriptionsStateReducer) => ({
      ...state,
      listSubscriptions: {
        ...state.listSubscriptions,
        load: false,
        error: '',
      },
    }));
  },
});

export default subscriptionsSlice.reducer;
