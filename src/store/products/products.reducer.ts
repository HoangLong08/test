import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import {
  ProductsStateReducer,
  ItemProducts,
  ItemProductsHome,
  ProductByGroupCatalog,
  ProductsAllForDropdown,
  ItemProductByAllCatalogs,
  ItemTracking,
} from './products.type';
import {
  deleteProductsAction,
  getDetailProductsByIdAction,
  getDetailProductsByIdAdminAction,
  getProductAlsoLikeAction,
  getProductAtHomePageAction,
  getProductMixAndMatchAction,
  getProductsAction,
  getProductsByAdminAction,
  patchMultiActiveProductAction,
  postFilterProductsAction,
  postProductsAction,
  postFilterProductsByCatalogAction,
  getProductsAllForDropdownByAdminAction,
  getProductByAllCatalogsAction,
  getListS3TrackingAction,
} from './products.action';

const initialState: ProductsStateReducer = {
  listProducts: {
    data: [] as ItemProducts[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listProductsByAdmin: {
    data: [] as ItemProducts[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listProductAtHomePage: {
    data: [],
    load: false,
    error: '',
  },

  detailProducts: {
    data: {} as ItemProducts,
    load: false,
    error: '',
  },

  detailProductsByAdmin: {
    data: {} as ItemProducts,
    load: false,
    error: '',
  },

  listProductsMixAndMatch: {
    data: [] as ItemProductsHome[],
    load: false,
    error: '',
  },

  listProductsAlsoLike: {
    data: [] as ItemProductsHome[],
    load: false,
    error: '',
  },

  listProductsFilter: {
    data: [] as ItemProductsHome[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listProductsFilterByGroupCatalog: {
    data: [] as ProductByGroupCatalog[],
    load: false,
    error: '',
  },

  productsAllForDropdownByAdmin: {
    data: [] as ProductsAllForDropdown[],
    load: false,
    error: '',
  },

  productByAllCatalogs: {
    data: [] as ItemProductByAllCatalogs[],
    load: false,
    error: '',
  },

  listS3Tracking: {
    data: [] as ItemTracking[],
    load: false,
    error: '',
  },
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getProductsAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listProducts: {
        ...state.listProducts,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getProductsAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listProducts: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getProductsAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listProducts: {
        data: [] as ItemProducts[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ----------------
    builder.addCase(getProductAtHomePageAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listProductAtHomePage: {
        ...state.listProductAtHomePage,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getProductAtHomePageAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listProductAtHomePage: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getProductAtHomePageAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listProductAtHomePage: {
        data: [],
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(getProductAlsoLikeAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listProductsAlsoLike: {
        ...state.listProductsAlsoLike,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getProductAlsoLikeAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listProductsAlsoLike: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getProductAlsoLikeAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listProductsAlsoLike: {
        data: [],
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(getProductMixAndMatchAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listProductsMixAndMatch: {
        ...state.listProductsMixAndMatch,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getProductMixAndMatchAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listProductsMixAndMatch: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getProductMixAndMatchAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listProductsMixAndMatch: {
        data: [] as ItemProductsHome[],
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(
      getProductsAllForDropdownByAdminAction.pending,
      (state: ProductsStateReducer) => ({
        ...state,
        productsAllForDropdownByAdmin: {
          ...state.productsAllForDropdownByAdmin,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getProductsAllForDropdownByAdminAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        productsAllForDropdownByAdmin: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getProductsAllForDropdownByAdminAction.rejected,
      (state: ProductsStateReducer) => ({
        ...state,
        productsAllForDropdownByAdmin: {
          data: [] as ProductsAllForDropdown[],
          load: false,
          error: '',
        },
      })
    );

    // -----------------
    builder.addCase(getProductsByAdminAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listProductsByAdmin: {
        ...state.listProductsByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getProductsByAdminAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listProductsByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getProductsByAdminAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listProductsByAdmin: {
        data: [] as ItemProducts[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));
    // ------------------
    builder.addCase(postProductsAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listProductsByAdmin: {
        ...state.listProductsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      postProductsAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listProductsByAdmin: {
          data: [action.payload.data, ...state.listProductsByAdmin.data],
          meta: {},
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(postProductsAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listProductsByAdmin: {
        data: state.listProductsByAdmin.data,
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailProductsByIdAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      detailProducts: {
        ...state.detailProducts,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailProductsByIdAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailProducts: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailProductsByIdAction.rejected,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailProducts: {
          data: {} as ItemProducts,
          load: false,
          error: action.payload.error,
        },
      })
    );

    // -----------------
    builder.addCase(getDetailProductsByIdAdminAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      detailProductsByAdmin: {
        ...state.detailProductsByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailProductsByIdAdminAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailProductsByAdmin: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailProductsByIdAdminAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      detailProductsByAdmin: {
        data: {} as ItemProducts,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteProductsAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listProductsByAdmin: {
        ...state.listProductsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteProductsAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listProductsByAdmin: {
          ...state.listProductsByAdmin,
          data: state.listProductsByAdmin.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteProductsAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listProductsByAdmin: {
        data: [] as ItemProducts[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(patchMultiActiveProductAction.pending, (state) => ({
      ...state,
      listProductsByAdmin: {
        ...state.listProductsByAdmin,
        load: true,
      },
    }));
    builder.addCase(patchMultiActiveProductAction.fulfilled, (state, action: any) => ({
      ...state,
      listProductsByAdmin: {
        ...state.listProductsByAdmin,
        data: state.listProductsByAdmin.data.map((item) => {
          if (action.payload.productIds.includes(item.id)) {
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
    builder.addCase(patchMultiActiveProductAction.rejected, (state) => ({
      ...state,
      listProductsByAdmin: {
        ...state.listProductsByAdmin,
        load: false,
      },
    }));

    // ------------------
    builder.addCase(postFilterProductsAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listProductsFilter: {
        ...state.listProductsFilter,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      postFilterProductsAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listProductsFilter: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(postFilterProductsAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listProductsFilter: {
        ...state.listProductsFilter,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(postFilterProductsByCatalogAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listProductsFilterByGroupCatalog: {
        ...state.listProductsFilterByGroupCatalog,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      postFilterProductsByCatalogAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listProductsFilterByGroupCatalog: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(postFilterProductsByCatalogAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listProductsFilterByGroupCatalog: {
        ...state.listProductsFilterByGroupCatalog,
        load: false,
        error: '',
      },
    }));

    // ----------------
    builder.addCase(getProductByAllCatalogsAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      productByAllCatalogs: {
        ...state.productByAllCatalogs,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getProductByAllCatalogsAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        productByAllCatalogs: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getProductByAllCatalogsAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      productByAllCatalogs: {
        data: [] as ItemProductByAllCatalogs[],
        load: false,
        error: '',
      },
    }));

    // -------------
    builder.addCase(getListS3TrackingAction.pending, (state: ProductsStateReducer) => ({
      ...state,
      listS3Tracking: {
        ...state.listS3Tracking,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getListS3TrackingAction.fulfilled,
      (state: ProductsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listS3Tracking: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getListS3TrackingAction.rejected, (state: ProductsStateReducer) => ({
      ...state,
      listS3Tracking: {
        data: [] as ItemTracking[],
        load: false,
        error: '',
      },
    }));
  },
});

export default productsSlice.reducer;
