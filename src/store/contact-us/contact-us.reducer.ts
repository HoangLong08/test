import { MetaPagination } from '@/config/constant';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  deleteContactUsAction,
  getContactUsAllAction,
  getDetailContactUsAction,
  patchDeleteMultiContactUsAction,
  putContactUsStatusAction,
} from './contact-us.action';
import { ContactUsReducer, ContactUsResponse } from './contact-us.type';

const initialState: ContactUsReducer = {
  listContactUsAll: {
    data: [] as ContactUsResponse[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailContactUs: {
    data: {} as ContactUsResponse,
    load: false,
    error: '',
  },
};

const contactUsSlice = createSlice({
  name: 'contactUs',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getContactUsAllAction.pending, (state) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getContactUsAllAction.fulfilled, (state, action: PayloadAction<any>) => ({
      ...state,
      listContactUsAll: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getContactUsAllAction.rejected, (state) => ({
      ...state,
      listContactUsAll: {
        data: [],
        meta: {},
        load: false,
        error: '',
      },
    }));

    // ---------------
    builder.addCase(getDetailContactUsAction.pending, (state) => ({
      ...state,
      detailContactUs: {
        data: {} as ContactUsResponse,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getDetailContactUsAction.fulfilled, (state, action: any) => ({
      ...state,
      detailContactUs: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDetailContactUsAction.rejected, (state) => ({
      ...state,
      detailContactUs: {
        data: {} as ContactUsResponse,
        load: false,
        error: '',
      },
    }));

    // ---------------
    builder.addCase(patchDeleteMultiContactUsAction.pending, (state) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        load: false,
      },
    }));
    builder.addCase(patchDeleteMultiContactUsAction.fulfilled, (state, action: any) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        data: state.listContactUsAll.data.filter((item) => !action.payload.ids.includes(item.id)),
      },
    }));
    builder.addCase(patchDeleteMultiContactUsAction.rejected, (state) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        error: '',
      },
    }));

    // ---------------
    builder.addCase(deleteContactUsAction.pending, (state) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        load: false,
      },
    }));
    builder.addCase(deleteContactUsAction.fulfilled, (state, action: any) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        data: [...state.listContactUsAll.data].filter(
          (item) => item.id !== action.payload.idDelete
        ),
      },
    }));
    builder.addCase(deleteContactUsAction.rejected, (state) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        error: '',
      },
    }));

    // ----------
    builder.addCase(putContactUsStatusAction.pending, (state) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        load: true,
        error: '',
      },
    }));
    builder.addCase(putContactUsStatusAction.fulfilled, (state, action: PayloadAction<any>) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        data: state.listContactUsAll.data.map((item) => {
          if (action.payload.id === item.id) {
            return {
              ...item,
              status: action.payload.status,
            };
          }
          return item;
        }),
        load: false,
      },
    }));
    builder.addCase(putContactUsStatusAction.rejected, (state) => ({
      ...state,
      listContactUsAll: {
        ...state.listContactUsAll,
        load: false,
      },
    }));
  },
});

export default contactUsSlice.reducer;
