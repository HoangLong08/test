import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { UsersStateReducer, ItemUser } from './users.type';
import {
  deleteUsersAction,
  getAllPermissionAction,
  getDetailUserByIdAction,
  getPermissionByUserIdAction,
  getUsersAction,
  postUserForSaleAction,
} from './users.action';

const initialState: UsersStateReducer = {
  listUsers: {
    data: [] as ItemUser[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailUser: {
    data: {} as ItemUser,
    load: false,
    error: '',
  },

  listPermission: {
    data: [] as string[],
    load: false,
    error: '',
  },

  detailPermissionUser: {
    data: {} as ItemUser,
    load: false,
    error: '',
  },
};

const userSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getUsersAction.pending, (state: UsersStateReducer) => ({
      ...state,
      listUsers: {
        ...state.listUsers,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getUsersAction.fulfilled,
      (state: UsersStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listUsers: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getUsersAction.rejected, (state: UsersStateReducer) => ({
      ...state,
      listUsers: {
        ...state.listUsers,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailUserByIdAction.pending, (state: UsersStateReducer) => ({
      ...state,
      detailUser: {
        ...state.detailUser,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailUserByIdAction.fulfilled,
      (state: UsersStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailUser: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailUserByIdAction.rejected, (state: UsersStateReducer) => ({
      ...state,
      detailUser: {
        ...state.detailUser,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getAllPermissionAction.pending, (state: UsersStateReducer) => ({
      ...state,
      listPermission: {
        ...state.listPermission,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getAllPermissionAction.fulfilled,
      (state: UsersStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listPermission: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getAllPermissionAction.rejected, (state: UsersStateReducer) => ({
      ...state,
      listPermission: {
        ...state.listPermission,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getPermissionByUserIdAction.pending, (state: UsersStateReducer) => ({
      ...state,
      detailPermissionUser: {
        ...state.detailPermissionUser,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getPermissionByUserIdAction.fulfilled,
      (state: UsersStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailPermissionUser: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getPermissionByUserIdAction.rejected, (state: UsersStateReducer) => ({
      ...state,
      detailPermissionUser: {
        ...state.detailPermissionUser,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteUsersAction.pending, (state: UsersStateReducer) => ({
      ...state,
      listUsers: {
        ...state.listUsers,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteUsersAction.fulfilled,
      (state: UsersStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listUsers: {
          ...state.listUsers,
          data: state.listUsers.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteUsersAction.rejected, (state: UsersStateReducer) => ({
      ...state,
      listUsers: {
        ...state.listUsers,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(postUserForSaleAction.pending, (state: UsersStateReducer) => ({
      ...state,
      listUsers: {
        ...state.listUsers,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      postUserForSaleAction.fulfilled,
      (state: UsersStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listUsers: {
          ...state.listUsers,
          data: [action.payload.data, ...state.listUsers.data],
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      postUserForSaleAction.rejected,
      (state: UsersStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listUsers: {
          ...state.listUsers,
          load: false,
          error: action.payload.data,
        },
      })
    );
  },
});

export default userSlice.reducer;
