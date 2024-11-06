import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { arrayMove } from '@dnd-kit/sortable';
import { CatalogsStateReducer, ItemCatalog } from './catalogs.type';
import {
  deleteCatalogsMainAction,
  deleteCatalogsSubAction,
  getCatalogsGroupAllAction,
  getCatalogsGroupAllByAdminAction,
  getDetailCatalogsMainAction,
  getDetailCatalogsSubAction,
  patchMultiCatalogMainIsActiveAdminAction,
  postCatalogsMainAction,
  postCatalogsSubAction,
} from './catalogs.action';

const initialState: CatalogsStateReducer = {
  listCatalogsGroupAll: {
    data: [] as ItemCatalog[],
    load: false,
    error: '',
  },

  listCatalogsGroupAllByAdmin: {
    data: [] as ItemCatalog[],
    load: false,
    error: '',
  },

  detailCatalogsMain: {
    data: {} as ItemCatalog,
    load: false,
    error: '',
  },

  detailCatalogsSub: {
    data: {} as ItemCatalog,
    load: false,
    error: '',
  },
};

const catalogsSlice = createSlice({
  name: 'catalogs',
  initialState,
  reducers: {
    setDragDropDataCatalogGroupMainSection: (
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
      // state.user = action.payload;
      const { active, over, resultId, resultIndex } = action.payload;
      return {
        ...state,
        listCatalogsGroupAllByAdmin: {
          ...state.listCatalogsGroupAllByAdmin,
          data: arrayMove(state.listCatalogsGroupAllByAdmin.data, active, over).map((item: any) => {
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

    setDragDropDataCatalogGroupSubSection: (
      state,
      action: {
        payload: {
          idCatalogMain: string;
          active: number;
          over: number;
          resultId: string;
          resultIndex: number;
        };
      }
    ) => {
      // state.user = action.payload;
      const { idCatalogMain, active, over, resultId, resultIndex } = action.payload;
      return {
        ...state,
        listCatalogsGroupAllByAdmin: {
          ...state.listCatalogsGroupAllByAdmin,
          data: state.listCatalogsGroupAllByAdmin.data.map((item) => {
            if (item.id === idCatalogMain) {
              return {
                ...item,
                catalogs: arrayMove(item?.catalogs || [], active, over).map((itemSub: any) => {
                  if (itemSub.id === resultId) {
                    return {
                      ...itemSub,
                      index: resultIndex,
                    };
                  }
                  return { ...itemSub };
                }),
              };
            }
            return item;
          }),
        },
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getCatalogsGroupAllAction.pending, (state: CatalogsStateReducer) => ({
      ...state,
      listCatalogsGroupAll: {
        ...state.listCatalogsGroupAll,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getCatalogsGroupAllAction.fulfilled,
      (state: CatalogsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listCatalogsGroupAll: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getCatalogsGroupAllAction.rejected, (state: CatalogsStateReducer) => ({
      ...state,
      listCatalogsGroupAll: {
        data: [] as ItemCatalog[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ---------------
    builder.addCase(getCatalogsGroupAllByAdminAction.pending, (state: CatalogsStateReducer) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getCatalogsGroupAllByAdminAction.fulfilled,
      (state: CatalogsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listCatalogsGroupAllByAdmin: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getCatalogsGroupAllByAdminAction.rejected, (state: CatalogsStateReducer) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        data: [] as ItemCatalog[],
        load: false,
        error: '',
      },
    }));
    // ---------------
    builder.addCase(patchMultiCatalogMainIsActiveAdminAction.pending, (state) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        load: true,
      },
    }));
    builder.addCase(patchMultiCatalogMainIsActiveAdminAction.fulfilled, (state, action: any) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        data: state.listCatalogsGroupAllByAdmin.data.map((item) => {
          if (action.payload.catalogIds.includes(item.id)) {
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
    builder.addCase(patchMultiCatalogMainIsActiveAdminAction.rejected, (state) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        load: false,
      },
    }));

    // ---------------
    builder.addCase(getDetailCatalogsMainAction.pending, (state) => ({
      ...state,
      detailCatalogsMain: {
        data: {} as ItemCatalog,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getDetailCatalogsMainAction.fulfilled, (state, action: any) => ({
      ...state,
      detailCatalogsMain: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDetailCatalogsMainAction.rejected, (state) => ({
      ...state,
      detailCatalogsMain: {
        data: {} as ItemCatalog,
        load: false,
        error: '',
      },
    }));
    // ---------------
    builder.addCase(getDetailCatalogsSubAction.pending, (state) => ({
      ...state,
      detailCatalogsSub: {
        data: {} as ItemCatalog,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getDetailCatalogsSubAction.fulfilled, (state, action: any) => ({
      ...state,
      detailCatalogsSub: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDetailCatalogsSubAction.rejected, (state) => ({
      ...state,
      detailCatalogsSub: {
        data: {} as ItemCatalog,
        load: false,
        error: '',
      },
    }));
    // ---------------
    builder.addCase(postCatalogsMainAction.pending, (state: CatalogsStateReducer) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      postCatalogsMainAction.fulfilled,
      (state: CatalogsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listCatalogsGroupAllByAdmin: {
          ...state.listCatalogsGroupAllByAdmin,
          data: [action.payload.data, ...state.listCatalogsGroupAllByAdmin.data],
        },
      })
    );
    builder.addCase(postCatalogsMainAction.rejected, (state: CatalogsStateReducer) => ({
      ...state,
      listCatalogsGroupAll: {
        data: [] as ItemCatalog[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));
    // ---------------
    builder.addCase(postCatalogsSubAction.pending, (state) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        load: false,
      },
    }));
    builder.addCase(postCatalogsSubAction.fulfilled, (state, action: any) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        data: [...state.listCatalogsGroupAllByAdmin.data].map((item) => {
          if (item.id === action.payload.data.catalog.id) {
            return {
              ...item,
              catalogs: [action.payload.data, ...item.catalogs],
            };
          }
          return item;
        }),
      },
    }));
    builder.addCase(postCatalogsSubAction.rejected, (state) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        error: '',
      },
    }));

    // // --------------- sub catalog
    // builder.addCase(patchMultiCatalogSubIsActiveAdminAction.pending, (state) => ({
    //   ...state,
    //   listCatalogsGroupAllByAdmin: {
    //     ...state.listCatalogsGroupAllByAdmin,
    //     load: false,
    //   },
    // }));
    // builder.addCase(patchMultiCatalogSubIsActiveAdminAction.fulfilled, (state, action: any) => ({
    //   ...state,
    //   listCatalogsGroupAllByAdmin: {
    //     ...state.listCatalogsGroupAllByAdmin,
    //     data: [...state.listCatalogsGroupAllByAdmin.data].map((item) => {
    //       if (item.id === action.payload.data.catalog.id) {
    //         return {
    //           ...item,
    //           catalogs: [action.payload.data, ...item.catalogs],
    //         };
    //       }
    //       return item;
    //     }),
    //   },
    // }));
    // builder.addCase(patchMultiCatalogSubIsActiveAdminAction.rejected, (state) => ({
    //   ...state,
    //   listCatalogsGroupAllByAdmin: {
    //     ...state.listCatalogsGroupAllByAdmin,
    //     error: '',
    //   },
    // }));

    // ---------------
    builder.addCase(deleteCatalogsMainAction.pending, (state) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        load: false,
      },
    }));
    builder.addCase(deleteCatalogsMainAction.fulfilled, (state, action: any) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        data: [...state.listCatalogsGroupAllByAdmin.data].filter(
          (item) => item.id !== action.payload.idDelete
        ),
      },
    }));
    builder.addCase(deleteCatalogsMainAction.rejected, (state) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        error: '',
      },
    }));

    // ---------------
    builder.addCase(deleteCatalogsSubAction.pending, (state) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        load: false,
      },
    }));
    builder.addCase(deleteCatalogsSubAction.fulfilled, (state, action: any) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        data: [...state.listCatalogsGroupAllByAdmin.data].map((item) => {
          if (item.id === action.payload.idMainCatalog) {
            return {
              ...item,
              catalogs: item?.catalogs?.filter((itemSub) => itemSub.id !== action.payload.idDelete),
            };
          }
          return item;
        }),
      },
    }));
    builder.addCase(deleteCatalogsSubAction.rejected, (state) => ({
      ...state,
      listCatalogsGroupAllByAdmin: {
        ...state.listCatalogsGroupAllByAdmin,
        error: '',
      },
    }));
  },
});

export const { setDragDropDataCatalogGroupMainSection, setDragDropDataCatalogGroupSubSection } =
  catalogsSlice.actions;

export default catalogsSlice.reducer;
