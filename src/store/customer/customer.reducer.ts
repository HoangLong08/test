import { createSlice } from '@reduxjs/toolkit';
import {
  deleteCustomerAction,
  getCustomerAction,
  getDetailCustomerAction,
  postCustomerAction,
  putCustomerAction,
} from './customer.action';
import {
  CustomerState,
  DetailCustomer,
  ItemCustomer,
  MetaCustomer,
} from './customer.type';

const initialState: CustomerState = {
  listCustomer: {
    data: [] as ItemCustomer[],
    meta: {} as MetaCustomer,
    load: false,
    error: '',
  },
  detailCustomer: {
    data: {} as DetailCustomer,
    load: false,
    error: '',
  },
  deleteCustomer: {
    data: {},
    load: false,
  },
  putCustomer: {
    load: false,
    data: {},
    messageCode: '',
    error: '',
  },

  postCustomer: {
    load: false,
    data: {},
    error: '',
  },
};

const customerSlice = createSlice({
  name: 'customer',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getCustomerAction.pending, (state: CustomerState) => ({
      ...state,
      listCustomer: {
        ...state.listCustomer,
        load: true,
      },
    }));
    builder.addCase(
      getCustomerAction.fulfilled,
      (state: CustomerState, action: any) => ({
        ...state,
        listCustomer: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      }),
    );
    builder.addCase(getCustomerAction.rejected, (state: CustomerState) => ({
      ...state,
      listCustomer: {
        data: [],
        meta: {},
        load: false,
        error: '',
      },
    }));

    // ----------------

    builder.addCase(deleteCustomerAction.pending, (state: CustomerState) => ({
      ...state,
      deleteCustomer: {
        ...state.deleteCustomer,
        load: true,
      },
    }));
    builder.addCase(
      deleteCustomerAction.fulfilled,
      (state: CustomerState, action: any) => ({
        ...state,
        listCustomer: {
          ...state.listCustomer,
          data: state.listCustomer.data.filter(
            (item) => item.id !== action.payload.idDelete,
          ),
        },
        deleteCustomer: {
          ...state.deleteCustomer,
          load: false,
        },
      }),
    );
    builder.addCase(deleteCustomerAction.rejected, (state: CustomerState) => ({
      ...state,
      listCustomer: {
        ...state.listCustomer,
        error: '',
      },
      deleteCustomer: {
        ...state.deleteCustomer,
        load: false,
      },
    }));

    // ----------------
    builder.addCase(
      getDetailCustomerAction.pending,
      (state: CustomerState) => ({
        ...state,
        detailCustomer: {
          ...state.detailCustomer,
          load: true,
        },
      }),
    );
    builder.addCase(
      getDetailCustomerAction.fulfilled,
      (state: CustomerState, action: any) => ({
        ...state,
        detailCustomer: {
          ...state.detailCustomer,
          data: action.payload.data,
        },
      }),
    );
    builder.addCase(
      getDetailCustomerAction.rejected,
      (state: CustomerState) => ({
        ...state,
        detailCustomer: {
          ...state.detailCustomer,
          error: '',
        },
      }),
    );

    // ---------------
    builder.addCase(putCustomerAction.pending, (state: CustomerState) => ({
      ...state,
      putCustomer: {
        ...state.putCustomer,
        load: true,
      },
    }));

    builder.addCase(putCustomerAction.fulfilled, (state: CustomerState) => ({
      ...state,
      putCustomer: {
        ...state.putCustomer,
        messageCode: 'Updated',
        load: false,
      },
    }));

    builder.addCase(putCustomerAction.rejected, (state: CustomerState) => ({
      ...state,
      putCustomer: {
        ...state.putCustomer,
        error: '',
        messageCode: '',
        load: false,
      },
    }));

    // ---------------
    builder.addCase(postCustomerAction.pending, (state: CustomerState) => ({
      ...state,
      postCustomer: {
        ...state.postCustomer,
        load: true,
      },
    }));

    builder.addCase(postCustomerAction.fulfilled, (state: CustomerState) => ({
      ...state,
      postCustomer: {
        ...state.postCustomer,
        load: false,
      },
    }));

    builder.addCase(postCustomerAction.rejected, (state: CustomerState) => ({
      ...state,
      postCustomer: {
        ...state.postCustomer,
        error: '',
        load: false,
      },
    }));
  },
});

export default customerSlice.reducer;
