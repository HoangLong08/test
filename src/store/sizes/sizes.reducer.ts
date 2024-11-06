import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { arrayMove } from '@dnd-kit/sortable';
import { SizesStateReducer, ItemSizes, ItemSizesGuide } from './sizes.type';
import {
  deleteSizesAction,
  getDetailSizesByIdAction,
  getSizesAction,
  postSizesAction,
  patchMultiActiveSizeAction,
  getSizesByAdminAction,
  getSizesGuideAction,
  getDetailSizesGuideByIdAction,
  getSizesGuideByAdminAction,
} from './sizes.action';

const initialState: SizesStateReducer = {
  listSizes: {
    data: [] as ItemSizes[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listSizesByAdmin: {
    data: [] as ItemSizes[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailSizes: {
    data: {} as ItemSizes,
    load: false,
    error: '',
  },

  listSizesGuide: {
    data: [] as ItemSizesGuide[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listSizesGuideByAdmin: {
    data: [] as ItemSizesGuide[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailSizesGuide: {
    data: {} as ItemSizesGuide,
    load: false,
    error: '',
  },
};

const sizesSlice = createSlice({
  name: 'sizes',
  initialState,
  reducers: {
    setDragDropDataSizeGuide: (
      state,
      action: {
        payload: {
          active: number;
          over: number;
          resultId: string;
          resultIndex: number;
        };
      }
    ) => {
      const { active, over, resultId, resultIndex } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.listSizesGuideByAdmin = {
        ...state.listSizesGuideByAdmin,
        data: arrayMove(state.listSizesGuideByAdmin.data, active, over),
      };
      // eslint-disable-next-line no-param-reassign
      state.listSizesGuideByAdmin = {
        ...state.listSizesGuideByAdmin,
        data: state.listSizesGuideByAdmin.data?.map((item) => {
          if (item.id === resultId) {
            return {
              ...item,
              index: resultIndex,
            };
          }
          return { ...item };
        }),
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getSizesAction.pending, (state: SizesStateReducer) => ({
      ...state,
      listSizes: {
        ...state.listSizes,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getSizesAction.fulfilled,
      (state: SizesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listSizes: {
          data: action.payload.data,
          meta: {},
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getSizesAction.rejected, (state: SizesStateReducer) => ({
      ...state,
      listSizes: {
        data: [] as ItemSizes[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getSizesByAdminAction.pending, (state: SizesStateReducer) => ({
      ...state,
      listSizesByAdmin: {
        ...state.listSizesByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getSizesByAdminAction.fulfilled,
      (state: SizesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listSizesByAdmin: {
          data: action.payload.data,
          meta: {},
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getSizesByAdminAction.rejected, (state: SizesStateReducer) => ({
      ...state,
      listSizesByAdmin: {
        data: [] as ItemSizes[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailSizesByIdAction.pending, (state: SizesStateReducer) => ({
      ...state,
      detailSizes: {
        ...state.detailSizes,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailSizesByIdAction.fulfilled,
      (state: SizesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailSizes: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailSizesByIdAction.rejected, (state: SizesStateReducer) => ({
      ...state,
      detailSizes: {
        data: {} as ItemSizes,
        load: false,
        error: '',
      },
    }));
    // ------------------
    builder.addCase(postSizesAction.pending, (state: SizesStateReducer) => ({
      ...state,
      listSizesByAdmin: {
        ...state.listSizesByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      postSizesAction.fulfilled,
      (state: SizesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listSizesByAdmin: {
          data: [action.payload.data, ...state.listSizesByAdmin.data],
          meta: {},
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(postSizesAction.rejected, (state: SizesStateReducer) => ({
      ...state,
      listSizesByAdmin: {
        ...state.listSizesByAdmin,
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteSizesAction.pending, (state: SizesStateReducer) => ({
      ...state,
      listSizesByAdmin: {
        ...state.listSizesByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteSizesAction.fulfilled,
      (state: SizesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listSizesByAdmin: {
          ...state.listSizesByAdmin,
          data: state.listSizesByAdmin.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteSizesAction.rejected, (state: SizesStateReducer) => ({
      ...state,
      listSizesByAdmin: {
        data: [] as ItemSizes[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(patchMultiActiveSizeAction.pending, (state) => ({
      ...state,
      listSizesByAdmin: {
        ...state.listSizesByAdmin,
        load: true,
      },
    }));
    builder.addCase(patchMultiActiveSizeAction.fulfilled, (state, action: any) => ({
      ...state,
      listSizesByAdmin: {
        ...state.listSizesByAdmin,
        data: state.listSizesByAdmin.data.map((item) => {
          if (action.payload.ids.includes(item.id)) {
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
    builder.addCase(patchMultiActiveSizeAction.rejected, (state) => ({
      ...state,
      listSizesByAdmin: {
        ...state.listSizesByAdmin,
        load: false,
      },
    }));

    // -----------
    builder.addCase(getSizesGuideAction.pending, (state: SizesStateReducer) => ({
      ...state,
      listSizesGuide: {
        ...state.listSizesGuide,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getSizesGuideAction.fulfilled,
      (state: SizesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listSizesGuide: {
          data: action.payload.data,
          meta: {},
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getSizesGuideAction.rejected, (state: SizesStateReducer) => ({
      ...state,
      listSizesGuide: {
        data: [] as ItemSizesGuide[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailSizesGuideByIdAction.pending, (state: SizesStateReducer) => ({
      ...state,
      detailSizesGuide: {
        ...state.detailSizesGuide,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailSizesGuideByIdAction.fulfilled,
      (state: SizesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailSizesGuide: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailSizesGuideByIdAction.rejected, (state: SizesStateReducer) => ({
      ...state,
      detailSizesGuide: {
        data: {} as ItemSizesGuide,
        load: false,
        error: '',
      },
    }));

    // -----------
    builder.addCase(getSizesGuideByAdminAction.pending, (state: SizesStateReducer) => ({
      ...state,
      listSizesGuideByAdmin: {
        ...state.listSizesGuideByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getSizesGuideByAdminAction.fulfilled,
      (state: SizesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listSizesGuideByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getSizesGuideByAdminAction.rejected, (state: SizesStateReducer) => ({
      ...state,
      listSizesGuideByAdmin: {
        data: [] as ItemSizesGuide[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));
  },
});

export const { setDragDropDataSizeGuide } = sizesSlice.actions;

export default sizesSlice.reducer;
