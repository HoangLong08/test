import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { TagsStateReducer, ItemTags } from './tags.type';
import {
  deleteTagsAction,
  getDetailTagsByIdAction,
  getTagsAction,
  getTagsByAdminAction,
  patchMultiActiveRibbonsAction,
  postTagsAction,
} from './tags.action';

const initialState: TagsStateReducer = {
  listTags: {
    data: [] as ItemTags[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listTagsByAdmin: {
    data: [] as ItemTags[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailTags: {
    data: {} as ItemTags,
    load: false,
    error: '',
  },
};

const tagsSlice = createSlice({
  name: 'tags',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getTagsAction.pending, (state: TagsStateReducer) => ({
      ...state,
      listTags: {
        ...state.listTags,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getTagsAction.fulfilled,
      (state: TagsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listTags: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getTagsAction.rejected, (state: TagsStateReducer) => ({
      ...state,
      listTags: {
        data: [] as ItemTags[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));
    // ------------------
    builder.addCase(getTagsByAdminAction.pending, (state: TagsStateReducer) => ({
      ...state,
      listTagsByAdmin: {
        ...state.listTagsByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getTagsByAdminAction.fulfilled,
      (state: TagsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listTagsByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getTagsByAdminAction.rejected, (state: TagsStateReducer) => ({
      ...state,
      listTagsByAdmin: {
        data: [] as ItemTags[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailTagsByIdAction.pending, (state: TagsStateReducer) => ({
      ...state,
      detailTags: {
        ...state.detailTags,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailTagsByIdAction.fulfilled,
      (state: TagsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailTags: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailTagsByIdAction.rejected, (state: TagsStateReducer) => ({
      ...state,
      detailFaqs: {
        data: {} as ItemTags,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteTagsAction.pending, (state: TagsStateReducer) => ({
      ...state,
      listTagsByAdmin: {
        ...state.listTagsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteTagsAction.fulfilled,
      (state: TagsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listTagsByAdmin: {
          ...state.listTagsByAdmin,
          data: state.listTagsByAdmin.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteTagsAction.rejected, (state: TagsStateReducer) => ({
      ...state,
      listTagsByAdmin: {
        data: [] as ItemTags[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(postTagsAction.pending, (state: TagsStateReducer) => ({
      ...state,
      listTagsByAdmin: {
        ...state.listTagsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      postTagsAction.fulfilled,
      (state: TagsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listTagsByAdmin: {
          ...state.listTagsByAdmin,
          data: [action.payload.data, ...state.listTagsByAdmin.data],
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(postTagsAction.rejected, (state: TagsStateReducer) => ({
      ...state,
      listTagsByAdmin: {
        data: state.listTagsByAdmin.data,
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));
    // ------------------
    builder.addCase(patchMultiActiveRibbonsAction.pending, (state) => ({
      ...state,
      listTagsByAdmin: {
        ...state.listTagsByAdmin,
        load: true,
      },
    }));
    builder.addCase(patchMultiActiveRibbonsAction.fulfilled, (state, action: any) => ({
      ...state,
      listTagsByAdmin: {
        ...state.listTagsByAdmin,
        data: state.listTagsByAdmin.data.map((item) => {
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
    builder.addCase(patchMultiActiveRibbonsAction.rejected, (state) => ({
      ...state,
      listTagsByAdmin: {
        ...state.listTagsByAdmin,
        load: false,
      },
    }));
  },
});

export default tagsSlice.reducer;
