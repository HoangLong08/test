import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { arrayMove } from '@dnd-kit/sortable';
import { FaqsDetailResponse, FaqsGroupResponse, FaqsStateReducer, ItemFaqs } from './faqs.type';
import {
  patchMultiDeleteFaqsAction,
  deleteFaqsAction,
  getDetailFaqsByIdAction,
  getFaqsAction,
  getFaqsByAdminAction,
  getGroupFaqsAction,
  getGroupFaqsByAdminAction,
  getDetailGroupFaqsAction,
  getDetailGroupFaqsByIdAction,
  postGroupFaqsAction,
  patchMultiDeleteGroupFaqsAction,
  deleteGroupFaqsAction,
} from './faqs.action';

const initialState: FaqsStateReducer = {
  listFaqs: {
    data: [] as ItemFaqs[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listFaqsByAdmin: {
    data: [] as ItemFaqs[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailFaqs: {
    data: {} as ItemFaqs,
    load: false,
    error: '',
  },

  getGroupFaqs: {
    data: [] as FaqsGroupResponse[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  getGroupFaqsByAdmin: {
    data: [] as FaqsGroupResponse[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  getDetailGroupFaqs: {
    data: [] as FaqsDetailResponse[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  getDetailGroupFaqsById: {
    data: {} as FaqsGroupResponse,
    load: false,
    error: '',
  },
};

const faqsSlice = createSlice({
  name: 'faqs',
  initialState,
  reducers: {
    setDragDropDataGroupFaqs: (
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
        getGroupFaqsByAdmin: {
          ...state.getGroupFaqsByAdmin,
          data: arrayMove(state.getGroupFaqsByAdmin.data, active, over).map((item: any) => {
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
    setDragDropDataFaqs: (
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
        listFaqsByAdmin: {
          ...state.listFaqsByAdmin,
          data: arrayMove(state.listFaqsByAdmin.data, active, over).map((item: any) => {
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
    builder.addCase(getFaqsAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      listFaqs: {
        ...state.listFaqs,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getFaqsAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listFaqs: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getFaqsAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      listFaqs: {
        data: [] as ItemFaqs[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));
    // -----------------
    builder.addCase(getFaqsByAdminAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      listFaqsByAdmin: {
        ...state.listFaqsByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getFaqsByAdminAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listFaqsByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getFaqsByAdminAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      listFaqsByAdmin: {
        data: [] as ItemFaqs[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailFaqsByIdAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      detailFaqs: {
        ...state.detailFaqs,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailFaqsByIdAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailFaqs: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailFaqsByIdAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      detailFaqs: {
        data: {} as ItemFaqs,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteFaqsAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      listFaqsByAdmin: {
        ...state.listFaqsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteFaqsAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listFaqsByAdmin: {
          ...state.listFaqsByAdmin,
          data: state.listFaqsByAdmin.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteFaqsAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      listFaqsByAdmin: {
        ...state.listFaqsByAdmin,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(patchMultiDeleteFaqsAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      listFaqsByAdmin: {
        ...state.listFaqsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      patchMultiDeleteFaqsAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listFaqsByAdmin: {
          ...state.listFaqsByAdmin,
          data: state.listFaqsByAdmin.data.filter((item) => !action.payload.ids.includes(item.id)),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(patchMultiDeleteFaqsAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      listFaqsByAdmin: {
        ...state.listFaqsByAdmin,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getGroupFaqsAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqs: {
        ...state.getGroupFaqs,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getGroupFaqsAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getGroupFaqs: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getGroupFaqsAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqs: {
        ...state.getGroupFaqs,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailGroupFaqsAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      getDetailGroupFaqs: {
        ...state.getDetailGroupFaqs,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailGroupFaqsAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getDetailGroupFaqs: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailGroupFaqsAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      getDetailGroupFaqs: {
        ...state.getDetailGroupFaqs,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getGroupFaqsByAdminAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqsByAdmin: {
        ...state.getGroupFaqsByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getGroupFaqsByAdminAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getGroupFaqsByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getGroupFaqsByAdminAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqsByAdmin: {
        ...state.getGroupFaqsByAdmin,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailGroupFaqsByIdAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      getDetailGroupFaqsById: {
        ...state.getDetailGroupFaqsById,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailGroupFaqsByIdAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getDetailGroupFaqsById: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailGroupFaqsByIdAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      getDetailGroupFaqsById: {
        ...state.getDetailGroupFaqsById,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(postGroupFaqsAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqsByAdmin: {
        ...state.getGroupFaqsByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      postGroupFaqsAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getGroupFaqsByAdmin: {
          ...state.getGroupFaqsByAdmin,
          data: [action.payload.data, ...state.getGroupFaqsByAdmin.data],
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(postGroupFaqsAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqsByAdmin: {
        ...state.getGroupFaqsByAdmin,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteGroupFaqsAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqsByAdmin: {
        ...state.getGroupFaqsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteGroupFaqsAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getGroupFaqsByAdmin: {
          ...state.getGroupFaqsByAdmin,
          data: state.getGroupFaqsByAdmin.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteGroupFaqsAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqsByAdmin: {
        ...state.getGroupFaqsByAdmin,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(patchMultiDeleteGroupFaqsAction.pending, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqsByAdmin: {
        ...state.getGroupFaqsByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      patchMultiDeleteGroupFaqsAction.fulfilled,
      (state: FaqsStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getGroupFaqsByAdmin: {
          ...state.getGroupFaqsByAdmin,
          data: state.getGroupFaqsByAdmin.data.filter(
            (item) => !action.payload.ids.includes(item.id)
          ),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(patchMultiDeleteGroupFaqsAction.rejected, (state: FaqsStateReducer) => ({
      ...state,
      getGroupFaqsByAdmin: {
        ...state.getGroupFaqsByAdmin,
        load: false,
        error: '',
      },
    }));
  },
});
export const { setDragDropDataGroupFaqs, setDragDropDataFaqs } = faqsSlice.actions;
export default faqsSlice.reducer;
