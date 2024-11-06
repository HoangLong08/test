import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { FabricsStateReducer, GroupFabricResponse, ItemFabrics } from './fabrics.type';
import {
  deleteFabricsAction,
  getDetailFabricsByIdAction,
  getFabricsForDropDownAction,
  getFabricsByAdminAction,
  patchMultiActiveFabricsAction,
  postFabricsAction,
  getAllGroupFabricAction,
  getDetailGroupFabricAction,
  deleteGroupFabricAction,
  postGroupFabricAction,
} from './fabrics.action';

const initialState: FabricsStateReducer = {
  listFabrics: {
    data: [] as ItemFabrics[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listFabricsByAdmin: {
    data: [] as ItemFabrics[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailFabrics: {
    data: {} as ItemFabrics,
    load: false,
    error: '',
  },

  listGroupFabricAll: {
    data: [] as GroupFabricResponse[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailGroupFabric: {
    data: {} as GroupFabricResponse,
    load: false,
    error: '',
  },
};

const fabricsSlice = createSlice({
  name: 'fabrics',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getFabricsForDropDownAction.pending, (state: FabricsStateReducer) => ({
      ...state,
      listFabrics: {
        ...state.listFabrics,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getFabricsForDropDownAction.fulfilled,
      (state: FabricsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listFabrics: {
          data: action.payload.data,
          meta: {},
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getFabricsForDropDownAction.rejected, (state: FabricsStateReducer) => ({
      ...state,
      listFabrics: {
        data: [] as ItemFabrics[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));
    // -----------------
    builder.addCase(getFabricsByAdminAction.pending, (state: FabricsStateReducer) => ({
      ...state,
      listFabricsByAdmin: {
        ...state.listFabricsByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getFabricsByAdminAction.fulfilled,
      (state: FabricsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listFabricsByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getFabricsByAdminAction.rejected, (state: FabricsStateReducer) => ({
      ...state,
      listFabricsByAdmin: {
        data: [] as ItemFabrics[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));
    // ------------------
    builder.addCase(postFabricsAction.pending, (state: FabricsStateReducer) => ({
      ...state,
      listFabricsByAdmin: {
        ...state.listFabricsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      postFabricsAction.fulfilled,
      (state: FabricsStateReducer, action: PayloadAction<any>) => ({
          ...state,
          listFabricsByAdmin: {
            ...state.listFabricsByAdmin,
            data: [action.payload.data, ...state.listFabricsByAdmin.data],
            load: false,
            error: '',
          },
        })
    );
    builder.addCase(postFabricsAction.rejected, (state: FabricsStateReducer) => ({
      ...state,
      listFabricsByAdmin: {
        data: state.listFabricsByAdmin.data,
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailFabricsByIdAction.pending, (state: FabricsStateReducer) => ({
      ...state,
      detailFabrics: {
        ...state.detailFabrics,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailFabricsByIdAction.fulfilled,
      (state: FabricsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailFabrics: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailFabricsByIdAction.rejected, (state: FabricsStateReducer) => ({
      ...state,
      detailFaqs: {
        ...state.detailFabrics,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteFabricsAction.pending, (state: FabricsStateReducer) => ({
      ...state,
      listFabricsByAdmin: {
        ...state.listFabricsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteFabricsAction.fulfilled,
      (state: FabricsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listFabricsByAdmin: {
          ...state.listFabricsByAdmin,
          data: state.listFabricsByAdmin.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteFabricsAction.rejected, (state: FabricsStateReducer) => ({
      ...state,
      listFabricsByAdmin: {
        data: [] as ItemFabrics[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(patchMultiActiveFabricsAction.pending, (state) => ({
      ...state,
      listFabricsByAdmin: {
        ...state.listFabricsByAdmin,
        load: true,
      },
    }));
    builder.addCase(patchMultiActiveFabricsAction.fulfilled, (state, action: any) => ({
      ...state,
      listFabricsByAdmin: {
        ...state.listFabricsByAdmin,
        data: state.listFabricsByAdmin.data.map((item) => {
          if (action.payload.fabricIds.includes(item.id)) {
            return {
              ...item,
              isActive: action.payload.isActive,
            };
          }
          return item;
        }),
        load: false,
      },
    }));
    builder.addCase(patchMultiActiveFabricsAction.rejected, (state) => ({
      ...state,
      listFabricsByAdmin: {
        ...state.listFabricsByAdmin,
        load: false,
      },
    }));

    // ------------------
    builder.addCase(getAllGroupFabricAction.pending, (state) => ({
      ...state,
      listGroupFabricAll: {
        ...state.listGroupFabricAll,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getAllGroupFabricAction.fulfilled, (state, action: PayloadAction<any>) => ({
      ...state,
      listGroupFabricAll: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getAllGroupFabricAction.rejected, (state) => ({
      ...state,
      listGroupFabricAll: {
        data: [],
        meta: {},
        load: false,
        error: '',
      },
    }));

    // ---------------
    builder.addCase(getDetailGroupFabricAction.pending, (state) => ({
      ...state,
      detailGroupFabric: {
        ...state.detailGroupFabric,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getDetailGroupFabricAction.fulfilled, (state, action: any) => ({
      ...state,
      detailGroupFabric: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDetailGroupFabricAction.rejected, (state) => ({
      ...state,
      detailGroupFabric: {
        ...state.detailGroupFabric,
        load: false,
        error: '',
      },
    }));

    // ---------------
    builder.addCase(postGroupFabricAction.pending, (state) => ({
      ...state,
      listGroupFabricAll: {
        ...state.listGroupFabricAll,
        load: true,
        error: '',
      },
    }));
    builder.addCase(postGroupFabricAction.fulfilled, (state, action: any) => ({
      ...state,
      listGroupFabricAll: {
        ...state.listGroupFabricAll,
        data: [action.payload.data, ...state.listGroupFabricAll.data],
        load: false,
      },
    }));
    builder.addCase(postGroupFabricAction.rejected, (state) => ({
      ...state,
      listGroupFabricAll: {
        ...state.listGroupFabricAll,
        load: false,
        error: '',
      },
    }));

    // ---------------
    builder.addCase(deleteGroupFabricAction.pending, (state) => ({
      ...state,
      listGroupFabricAll: {
        ...state.listGroupFabricAll,
        load: false,
      },
    }));
    builder.addCase(deleteGroupFabricAction.fulfilled, (state, action: any) => ({
      ...state,
      listGroupFabricAll: {
        ...state.listGroupFabricAll,
        data: [...state.listGroupFabricAll.data].filter(
          (item) => item.id !== action.payload.idDelete
        ),
      },
    }));
    builder.addCase(deleteGroupFabricAction.rejected, (state) => ({
      ...state,
      listGroupFabricAll: {
        ...state.listGroupFabricAll,
        error: '',
      },
    }));
  },
});

export default fabricsSlice.reducer;
