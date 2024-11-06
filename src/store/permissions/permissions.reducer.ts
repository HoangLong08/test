import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { getPermissionByIdAction, getPermissionsAction } from './permissions.action';
import { ItemPermissions, PermissionsStateReducer } from './permissions.type';

const initialState: PermissionsStateReducer = {
  listPermissions: {
    data: [] as ItemPermissions[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailPermissions: {
    data: {} as ItemPermissions,
    load: false,
    error: '',
  },
};

const permissionsSlice = createSlice({
  name: 'permissions',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getPermissionsAction.pending, (state: PermissionsStateReducer) => ({
      ...state,
      listPermissions: {
        ...state.listPermissions,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getPermissionsAction.fulfilled,
      (state: PermissionsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listPermissions: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getPermissionsAction.rejected, (state: PermissionsStateReducer) => ({
      ...state,
      listPermissions: {
        data: [] as ItemPermissions[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getPermissionByIdAction.pending, (state: PermissionsStateReducer) => ({
      ...state,
      detailPermissions: {
        ...state.detailPermissions,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getPermissionByIdAction.fulfilled,
      (state: PermissionsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailPermissions: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getPermissionByIdAction.rejected,
      (state: PermissionsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailPermissions: {
          data: {} as ItemPermissions,
          load: false,
          error: action.payload.error,
        },
      })
    );
  },
});

export default permissionsSlice.reducer;
