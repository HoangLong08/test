import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { FavoritesStateReducer, ProductFavorite, ProductFavoriteUser } from './favorites.type';
import {
  deleteFavoritesAction,
  getDetailFavoritesByIdAction,
  getFavoritesByAdminAction,
  getIdsFavoritesOnlyMeAction,
  getProductFavoritesAction,
  postFavoritesAction,
} from './favorites.action';

const initialState: FavoritesStateReducer = {
  listMyFavorites: {
    data: [] as ProductFavoriteUser[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listFavoritesByAdmin: {
    data: [] as ProductFavorite[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  myIdsProductFavorites: {
    data: [],
    load: false,
    error: '',
  },

  detailFavorites: {
    data: {} as ProductFavorite,
    load: false,
    error: '',
  },
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setMyIdsProductFavorites: (state: FavoritesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        myIdsProductFavorites: {
          ...state.myIdsProductFavorites,
          data: action.payload,
        },
      }),
  },

  extraReducers: (builder) => {
    builder.addCase(getProductFavoritesAction.pending, (state: FavoritesStateReducer) => ({
      ...state,
      listMyFavorites: {
        ...state.listMyFavorites,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getProductFavoritesAction.fulfilled,
      (state: FavoritesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listMyFavorites: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getProductFavoritesAction.rejected, (state: FavoritesStateReducer) => ({
      ...state,
      listMyFavorites: {
        ...state.listMyFavorites,
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(getFavoritesByAdminAction.pending, (state: FavoritesStateReducer) => ({
      ...state,
      listFavoritesByAdmin: {
        ...state.listFavoritesByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getFavoritesByAdminAction.fulfilled,
      (state: FavoritesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listFavoritesByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getFavoritesByAdminAction.rejected, (state: FavoritesStateReducer) => ({
      ...state,
      listFavoritesByAdmin: {
        ...state.listFavoritesByAdmin,
        load: false,
        error: '',
      },
    }));

    //! ------------------
    builder.addCase(postFavoritesAction.pending, (state: FavoritesStateReducer) => ({
      ...state,
      listMyFavorites: {
        ...state.listMyFavorites,
        load: true,
        error: '',
      },
    }));
    builder.addCase(postFavoritesAction.fulfilled, (state: FavoritesStateReducer, action: any) => {
      const idResponse = action.payload.data.productId;
      const rootIds = state.myIdsProductFavorites.data;
      let newIds = rootIds;
      let newListFavorites = state.listMyFavorites.data;
      const index = rootIds.findIndex((item) => item === idResponse);
      if (index !== -1) {
        newIds = rootIds.filter((item) => item !== idResponse);
        newListFavorites = state.listMyFavorites.data.filter(
          (item) => item.product.id !== idResponse
        );
      } else {
        newIds = [idResponse, ...rootIds];
      }
      return {
        ...state,
        myIdsProductFavorites: {
          ...state.myIdsProductFavorites,
          data: newIds,
          load: false,
          error: '',
        },
        listMyFavorites: {
          ...state.listMyFavorites,
          data: newListFavorites,
          load: false,
          error: '',
        },
      };
    });
    builder.addCase(postFavoritesAction.rejected, (state: FavoritesStateReducer) => ({
      ...state,
      listMyFavorites: {
        ...state.listMyFavorites,
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(getDetailFavoritesByIdAction.pending, (state: FavoritesStateReducer) => ({
      ...state,
      detailFavorites: {
        ...state.detailFavorites,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailFavoritesByIdAction.fulfilled,
      (state: FavoritesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailFavorites: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailFavoritesByIdAction.rejected, (state: FavoritesStateReducer) => ({
      ...state,
      detailFavorites: {
        ...state.detailFavorites,
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(getIdsFavoritesOnlyMeAction.pending, (state: FavoritesStateReducer) => ({
      ...state,
      myIdsProductFavorites: {
        ...state.myIdsProductFavorites,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getIdsFavoritesOnlyMeAction.fulfilled,
      (state: FavoritesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        myIdsProductFavorites: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getIdsFavoritesOnlyMeAction.rejected, (state: FavoritesStateReducer) => ({
      ...state,
      myIdsProductFavorites: {
        ...state.myIdsProductFavorites,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteFavoritesAction.pending, (state: FavoritesStateReducer) => ({
      ...state,
      listFavoritesByAdmin: {
        ...state.listFavoritesByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteFavoritesAction.fulfilled,
      (state: FavoritesStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listFavoritesByAdmin: {
          ...state.listFavoritesByAdmin,
          data: state.listFavoritesByAdmin.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteFavoritesAction.rejected, (state: FavoritesStateReducer) => ({
      ...state,
      listFavoritesByAdmin: {
        ...state.listFavoritesByAdmin,
        load: false,
        error: '',
      },
    }));
  },
});

export const { setMyIdsProductFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
