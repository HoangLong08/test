import { MetaPagination } from '@/config/constant';
import { createSlice } from '@reduxjs/toolkit';
import { arrayMove } from '@dnd-kit/sortable';
import { LinkStateReducer, LinkType } from './social-links.type';
import { getDetailLinksAction, getLinksAction } from './social-links.action';

const initialState: LinkStateReducer = {
  listLink: {
    data: [] as LinkType[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },
  detailLink: {
    data: {} as LinkType,
    load: false,
    error: '',
  },
};

const socialLinksSlice = createSlice({
  name: 'socialLinks',
  initialState,
  reducers: {
    setDragDropLinksReOrder: (
      state: any,
      action: {
        payload: {
          active: number;
          over: number;
          id: string;
          index: number;
        };
      }
    ) => {
      const { active, over, id, index } = action.payload;
      return {
        ...state,
        listLink: {
          ...state.listLink,
          data: arrayMove(state.listLink.data, active, over).map((item: any) => {
            if (item.id === id) {
              return {
                ...item,
                index,
              };
            }
            return { ...item };
          }),
        },
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(getLinksAction.pending, (state: any) => ({
      ...state,
      listLink: {
        ...state.listLink,
        load: true,
      },
    }));
    builder.addCase(getLinksAction.fulfilled, (state: any, action: any) => ({
      ...state,
      listLink: {
        data: action.payload.data,
        meta: action.payload.meta,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getLinksAction.rejected, (state: any) => ({
      ...state,
      listLink: {
        data: [] as LinkType[],
        meta: {},
        load: false,
        error: '',
      },
    }));
    //----------------

    builder.addCase(getDetailLinksAction.pending, (state: any) => ({
      ...state,
      detailLink: {
        ...state.detailLink,
        load: true,
      },
    }));
    builder.addCase(getDetailLinksAction.fulfilled, (state: any, action: any) => ({
      ...state,
      detailLink: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDetailLinksAction.rejected, (state: any) => ({
      ...state,
      detailLink: {
        data: {} as LinkType,
        load: false,
        error: '',
      },
    }));
  },
});
export const { setDragDropLinksReOrder } = socialLinksSlice.actions;
export default socialLinksSlice.reducer;
