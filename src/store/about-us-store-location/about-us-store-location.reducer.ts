import { MetaPagination } from '@/config/constant';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { arrayMove } from '@dnd-kit/sortable';
import {
  deleteAboutUsAction,
  getAboutUsAction,
  getDetailAboutUsByIdAction,
  getStoreLocationAction,
  getStoreLocationByAdminAction,
  getDetailStoreLocationAction,
  deleteStoreLocationAction,
  patchIsShowAtHomeAction,
  getInfoAboutUsShowAtHomeAction,
  deleteAboutUsAllAction,
  getNewsAction,
  getDetailNewsByIdAction,
  getNewsByAdminAction,
  getDetailNewsByIdAdminAction,
  patchIsShowAtFooterNewsAction,
  patchMultiNewsIsActiveAdminAction,
  getNewsFooterAction,
  getAboutUsFooterAction,
  patchIsShowAtFooterAboutUsAction,
  getDetailAboutUsExtendsByIdAction,
  patchIsShowAtGetMeasuredAction,
  getListAboutUsByGetMeasuredForAllAction,
} from './about-us-store-location.action';
import {
  AboutUsStoreLocationStateReducer,
  ItemAboutUs,
  ItemAboutUsExtend,
  ItemNews,
  StoreLocationType,
} from './about-us-store-location.type';

const initialState: AboutUsStoreLocationStateReducer = {
  listAboutUs: {
    data: [] as ItemAboutUs[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listAboutUsByGetMeasuredForAll: {
    data: [] as ItemAboutUs[],
    load: false,
    error: '',
  },

  listAboutUsFooter: {
    data: [] as ItemAboutUs[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailAboutUs: {
    data: {} as ItemAboutUs,
    load: false,
    error: '',
  },

  getStoreLocationByAdmin: {
    data: [] as StoreLocationType[],
    load: false,
    error: '',
  },

  getStoreLocation: {
    data: [] as StoreLocationType[],
    load: false,
    error: '',
  },

  getDetailStoreLocation: {
    data: {} as StoreLocationType,
    load: false,
    error: '',
  },

  infoAboutUsShowAtHome: {
    data: {} as ItemAboutUs,
    load: false,
    error: '',
  },

  listNews: {
    data: [] as ItemNews[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailNews: {
    data: {} as ItemNews,
    load: false,
    error: '',
  },

  listNewsByAdmin: {
    data: [] as ItemNews[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailNewsByAdmin: {
    data: {} as ItemNews,
    load: false,
    error: '',
  },

  listNewsFooter: {
    data: [] as ItemNews[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailAboutUsExtend: {
    data: {} as ItemAboutUsExtend,
    load: false,
    error: '',
  },
};

const aboutUsStoreLocationSlice = createSlice({
  name: 'aboutUsStoreLocation',
  initialState,
  reducers: {
    setDragDropDataAboutUsSection: (
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
      return {
        ...state,
        listAboutUs: {
          ...state.listAboutUs,
          data: arrayMove(state.listAboutUs.data, active, over).map((item: any) => {
            if (item.id === resultId) {
              return {
                ...item,
                index: resultIndex,
              };
            }
            return { ...item };
          }),
        },
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getAboutUsAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listAboutUs: {
        ...state.listAboutUs,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getAboutUsAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAboutUs: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getAboutUsAction.rejected, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listAboutUs: {
        data: [] as ItemAboutUs[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      getListAboutUsByGetMeasuredForAllAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        listAboutUsByGetMeasuredForAll: {
          ...state.listAboutUsByGetMeasuredForAll,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getListAboutUsByGetMeasuredForAllAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAboutUsByGetMeasuredForAll: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getListAboutUsByGetMeasuredForAllAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        listAboutUsByGetMeasuredForAll: {
          data: [] as ItemAboutUs[],
          load: false,
          error: '',
        },
      })
    );

    // ------------------
    builder.addCase(getAboutUsFooterAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listAboutUsFooter: {
        ...state.listAboutUsFooter,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getAboutUsFooterAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAboutUsFooter: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getAboutUsFooterAction.rejected, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listAboutUsFooter: {
        data: [] as ItemAboutUs[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(patchIsShowAtHomeAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listAboutUs: {
        ...state.listAboutUs,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      patchIsShowAtHomeAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAboutUs: {
          ...state.listAboutUs,
          data: state.listAboutUs.data.map((item: any) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                isShowAtHome: !item.isShowAtHome,
              };
            }
            return {
              ...item,
              isShowAtHome: false,
            };
          }),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      patchIsShowAtHomeAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        listAboutUs: {
          data: [] as ItemAboutUs[],
          meta: {} as MetaPagination,
          load: false,
          error: '',
        },
      })
    );

    // ------------------
    builder.addCase(
      getDetailAboutUsByIdAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        detailAboutUs: {
          ...state.detailAboutUs,
          data: {} as ItemAboutUs,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailAboutUsByIdAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailAboutUs: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailAboutUsByIdAction.rejected,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailAboutUs: {
          data: {} as ItemAboutUs,
          load: false,
          error: action.payload.error,
        },
      })
    );

    // ----------------
    builder.addCase(
      getInfoAboutUsShowAtHomeAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        infoAboutUsShowAtHome: {
          ...state.infoAboutUsShowAtHome,
          data: {} as ItemAboutUs,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getInfoAboutUsShowAtHomeAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        infoAboutUsShowAtHome: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getInfoAboutUsShowAtHomeAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        infoAboutUsShowAtHome: {
          data: {} as ItemAboutUs,
          load: false,
          error: '',
        },
      })
    );

    // ------------------
    builder.addCase(deleteAboutUsAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listAboutUs: {
        ...state.listAboutUs,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteAboutUsAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAboutUs: {
          ...state.listAboutUs,
          data: state.listAboutUs.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteAboutUsAction.rejected, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listAboutUs: {
        ...state.listAboutUs,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteAboutUsAllAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listAboutUs: {
        ...state.listAboutUs,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteAboutUsAllAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAboutUs: {
          ...state.listAboutUs,
          data: state.listAboutUs.data.filter((item) => !action.payload.ids.includes(item.id)),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteAboutUsAllAction.rejected, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listAboutUs: {
        ...state.listAboutUs,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      patchIsShowAtFooterAboutUsAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        listAboutUs: {
          ...state.listAboutUs,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      patchIsShowAtFooterAboutUsAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAboutUs: {
          ...state.listAboutUs,
          data: state.listAboutUs.data.map((item: any) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                isShowAtFooter: !item.isShowAtFooter,
              };
            }
            return item;
          }),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      patchIsShowAtFooterAboutUsAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        listAboutUs: {
          data: [] as ItemAboutUs[],
          meta: {} as MetaPagination,
          load: false,
          error: '',
        },
      })
    );

    // -----------------
    builder.addCase(
      patchIsShowAtGetMeasuredAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        listAboutUs: {
          ...state.listAboutUs,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      patchIsShowAtGetMeasuredAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAboutUs: {
          ...state.listAboutUs,
          data: state.listAboutUs.data.map((item: any) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                isShowAtGetMeasured: !item.isShowAtGetMeasured,
              };
            }
            return item;
          }),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      patchIsShowAtGetMeasuredAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        listAboutUs: {
          data: [] as ItemAboutUs[],
          meta: {} as MetaPagination,
          load: false,
          error: '',
        },
      })
    );

    // ------------------
    builder.addCase(
      getStoreLocationByAdminAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        getStoreLocationByAdmin: {
          ...state.getStoreLocationByAdmin,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getStoreLocationByAdminAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getStoreLocationByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getStoreLocationByAdminAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        getStoreLocationByAdmin: {
          data: [],
          meta: {},
          load: false,
          error: '',
        },
      })
    );

    // ------------------
    builder.addCase(getStoreLocationAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      getStoreLocation: {
        ...state.getStoreLocation,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getStoreLocationAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getStoreLocation: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getStoreLocationAction.rejected, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      getStoreLocation: {
        data: [],
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      getDetailStoreLocationAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        getDetailStoreLocation: {
          data: {} as StoreLocationType,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailStoreLocationAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getDetailStoreLocation: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailStoreLocationAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        getDetailStoreLocation: {
          data: {} as StoreLocationType,
          load: false,
          error: '',
        },
      })
    );

    // ------------------
    builder.addCase(
      deleteStoreLocationAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        getStoreLocationByAdmin: {
          ...state.getStoreLocationByAdmin,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      deleteStoreLocationAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getStoreLocationByAdmin: {
          ...state.getStoreLocationByAdmin,
          data: state.getStoreLocationByAdmin.data.filter(
            (item) => item.id !== action.payload.idDelete
          ),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      deleteStoreLocationAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        getStoreLocationByAdmin: {
          ...state.getStoreLocationByAdmin,
          load: false,
          error: '',
        },
      })
    );

    // ------------
    builder.addCase(getNewsAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listNews: {
        ...state.listNews,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getNewsAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listNews: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getNewsAction.rejected, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listNews: {
        data: [] as ItemNews[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailNewsByIdAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      detailNews: {
        ...state.detailNews,
        data: {} as ItemNews,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailNewsByIdAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailNews: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailNewsByIdAction.rejected,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailNews: {
          data: {} as ItemNews,
          load: false,
          error: action.payload.error,
        },
      })
    );

    // ------------
    builder.addCase(getNewsByAdminAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listNewsByAdmin: {
        ...state.listNewsByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getNewsByAdminAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listNewsByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getNewsByAdminAction.rejected, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listNewsByAdmin: {
        data: [] as ItemNews[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      getDetailNewsByIdAdminAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        detailNewsByAdmin: {
          ...state.detailNewsByAdmin,
          data: {} as ItemNews,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailNewsByIdAdminAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailNewsByAdmin: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailNewsByIdAdminAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        detailNewsByAdmin: {
          data: {} as ItemNews,
          load: false,
          error: '',
        },
      })
    );

    // ------------------
    builder.addCase(
      patchIsShowAtFooterNewsAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        listNewsByAdmin: {
          ...state.listNewsByAdmin,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      patchIsShowAtFooterNewsAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listNewsByAdmin: {
          ...state.listNewsByAdmin,
          data: state.listNewsByAdmin.data.map((item: any) => {
            if (item.id === action.payload.id) {
              return {
                ...item,
                isShowAtFooter: !item.isShowAtFooter,
              };
            }
            return item;
          }),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      patchIsShowAtFooterNewsAction.rejected,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        listNewsByAdmin: {
          data: [] as ItemNews[],
          meta: {} as MetaPagination,
          load: false,
          error: '',
        },
      })
    );

    // ---------------
    builder.addCase(patchMultiNewsIsActiveAdminAction.pending, (state) => ({
      ...state,
      listNewsByAdmin: {
        ...state.listNewsByAdmin,
        load: true,
      },
    }));
    builder.addCase(patchMultiNewsIsActiveAdminAction.fulfilled, (state, action: any) => ({
      ...state,
      listNewsByAdmin: {
        ...state.listNewsByAdmin,
        data: state.listNewsByAdmin.data.map((item) => {
          if (action.payload.newsAndPressIds.includes(item.id)) {
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
    builder.addCase(patchMultiNewsIsActiveAdminAction.rejected, (state) => ({
      ...state,
      listNewsByAdmin: {
        ...state.listNewsByAdmin,
        load: false,
      },
    }));

    // ------------
    builder.addCase(getNewsFooterAction.pending, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listNewsFooter: {
        ...state.listNewsFooter,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getNewsFooterAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listNewsFooter: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getNewsFooterAction.rejected, (state: AboutUsStoreLocationStateReducer) => ({
      ...state,
      listNewsFooter: {
        data: [] as ItemNews[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      getDetailAboutUsExtendsByIdAction.pending,
      (state: AboutUsStoreLocationStateReducer) => ({
        ...state,
        detailAboutUsExtend: {
          ...state.detailAboutUsExtend,
          data: {} as ItemAboutUsExtend,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailAboutUsExtendsByIdAction.fulfilled,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailAboutUsExtend: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailAboutUsExtendsByIdAction.rejected,
      (state: AboutUsStoreLocationStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailAboutUsExtend: {
          data: {} as ItemAboutUsExtend,
          load: false,
          error: action.payload.error,
        },
      })
    );
  },
});

export const { setDragDropDataAboutUsSection } = aboutUsStoreLocationSlice.actions;

export default aboutUsStoreLocationSlice.reducer;
