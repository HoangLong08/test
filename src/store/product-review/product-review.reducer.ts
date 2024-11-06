import { arrayMove } from '@dnd-kit/sortable';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import {
  getProductReviewByAdminAction,
  getProductReviewAction,
  deleteProductReviewAction,
  deleteProductReviewQuestionAction,
  getDetailProductReviewAction,
  getDetailProductReviewByAdminAction,
  getProductReviewAllAction,
  getQuestionsByProductIdAction,
} from './product-review.action';
import {
  ProductReviewAllType,
  ProductReviewType,
  ProductReviewTypeAdmin,
} from './product-review.type';

const initialState = {
  getProductReviewByAdmin: {
    data: [] as ProductReviewTypeAdmin[],
    load: false,
    error: '',
  },
  getProductReview: {
    data: [] as ProductReviewType[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
  getProductReviewAll: {
    data: [] as ProductReviewAllType[],
    load: false,
    error: '',
  },
  getDetailProductReview: {
    data: {} as ProductReviewType,
    load: false,
    error: '',
  },
  getDetailProductReviewByAdmin: {
    data: {} as ProductReviewTypeAdmin,
    load: false,
    error: '',
  },
  questionsByProductId: {
    data: [] as ProductReviewType[],
    load: false,
    error: '',
  },
};

const productReviewSlice = createSlice({
  name: 'productReview',
  initialState,
  reducers: {
    setDragDropDataQuestion: (state, action) => {
      const { active, over, resultId, resultIndex } = action.payload;
      // eslint-disable-next-line no-param-reassign
      state.getProductReview = {
        ...state.getProductReview,
        data: arrayMove(state.getProductReview.data, active, over),
      };
      // eslint-disable-next-line no-param-reassign
      state.getProductReview = {
        ...state.getProductReview,
        data: state.getProductReview.data?.map((item) => {
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
    builder.addCase(getProductReviewByAdminAction.pending, (state) => ({
      ...state,
      getProductReviewByAdmin: {
        ...state.getProductReviewByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getProductReviewByAdminAction.fulfilled,
      (state, action: PayloadAction<any>) => ({
        ...state,
        getProductReviewByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getProductReviewByAdminAction.rejected, (state) => ({
      ...state,
      getProductReviewByAdmin: {
        data: [],
        error: '',
        load: false,
      },
    }));

    // -----------------
    builder.addCase(getQuestionsByProductIdAction.pending, (state) => ({
      ...state,
      questionsByProductId: {
        ...state.questionsByProductId,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getQuestionsByProductIdAction.fulfilled,
      (state, action: PayloadAction<any>) => ({
        ...state,
        questionsByProductId: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getQuestionsByProductIdAction.rejected, (state) => ({
      ...state,
      questionsByProductId: {
        data: [],
        error: '',
        load: false,
      },
    }));

    // ------------------
    builder.addCase(getProductReviewAction.pending, (state) => ({
      ...state,
      getProductReview: {
        ...state.getProductReview,
        data: [],
        load: true,
        error: '',
        meta: {},
      },
    }));
    builder.addCase(getProductReviewAction.fulfilled, (state, action: PayloadAction<any>) => ({
      ...state,
      getProductReview: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getProductReviewAction.rejected, (state) => ({
      ...state,
      getProductReview: {
        data: [],
        load: false,
        error: '',
        meta: {},
      },
    }));

    // ------------------
    builder.addCase(getProductReviewAllAction.pending, (state) => ({
      ...state,
      getProductReviewAll: {
        ...state.getProductReviewAll,
        data: [],
        load: true,
        error: '',
      },
    }));
    builder.addCase(getProductReviewAllAction.fulfilled, (state, action: PayloadAction<any>) => ({
      ...state,
      getProductReviewAll: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getProductReviewAllAction.rejected, (state) => ({
      ...state,
      getProductReviewAll: {
        data: [],
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailProductReviewAction.pending, (state) => ({
      ...state,
      getDetailProductReview: {
        ...state.getDetailProductReview,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailProductReviewAction.fulfilled,
      (state, action: PayloadAction<any>) => ({
        ...state,
        getDetailProductReview: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailProductReviewAction.rejected, (state) => ({
      ...state,
      getDetailProductReview: {
        ...state.getDetailProductReview,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailProductReviewByAdminAction.pending, (state) => ({
      ...state,
      getDetailProductReviewByAdmin: {
        ...state.getDetailProductReviewByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailProductReviewByAdminAction.fulfilled,
      (state, action: PayloadAction<any>) => ({
        ...state,
        getDetailProductReviewByAdmin: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailProductReviewByAdminAction.rejected, (state) => ({
      ...state,
      getDetailProductReviewByAdmin: {
        ...state.getDetailProductReviewByAdmin,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteProductReviewAction.pending, (state) => ({
      ...state,
      getProductReviewByAdmin: {
        ...state.getProductReviewByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(deleteProductReviewAction.fulfilled, (state, action: PayloadAction<any>) => ({
      ...state,
      getProductReviewByAdmin: {
        ...state.getProductReviewByAdmin,
        data: state.getProductReviewByAdmin.data.filter(
          (item) => item.id !== action.payload.idDelete
        ),
        load: false,
        error: '',
      },
    }));
    builder.addCase(deleteProductReviewAction.rejected, (state) => ({
      ...state,
      getProductReviewByAdmin: {
        ...state.getProductReviewByAdmin,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteProductReviewQuestionAction.pending, (state) => ({
      ...state,
      getProductReview: {
        ...state.getProductReview,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteProductReviewQuestionAction.fulfilled,
      (state, action: PayloadAction<any>) => ({
        ...state,
        getProductReview: {
          ...state.getProductReview,
          data: state.getProductReview.data.filter((item) => item.id !== action.payload.idDelete),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteProductReviewQuestionAction.rejected, (state) => ({
      ...state,
      getProductReview: {
        ...state.getProductReview,
        load: false,
        error: '',
      },
    }));
  },
});
export const { setDragDropDataQuestion } = productReviewSlice.actions;
export default productReviewSlice.reducer;
