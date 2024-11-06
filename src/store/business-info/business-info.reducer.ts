import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { arrayMove } from '@dnd-kit/sortable';
import { MetaDataSeo } from '@/config/constant';
import {
  deleteSlideAction,
  getAnnouncementBarAction,
  getAnnouncementBarPublicAction,
  getBusinessInfoAction,
  getDetailBannerByIdAction,
  getInfoPopupAction,
  getInfoPopupPublicAction,
  getSlideAction,
  getSlideByAdminAction,
  patchSlideIsActiveAdminAction,
  getCheckShowVideoSlideAction,
  patchIsShowVideBannerAdminAction,
  getBusinessLogoAction,
  getSlideEventByAdminAction,
  getSlideEventAction,
  getDetailSlideEventByIdAction,
  patchSlideEventIsActiveAdminAction,
  deleteSlideEventAction,
  getSeoHomePageAction,
} from './business-info.action';
import {
  ItemAnnouncementBar,
  BusinessesInfoResponse,
  ItemSlide,
  BusinessInfoState,
  BusinessesLogoResponse,
  ItemSlideEvent,
} from './business-info.type';

const initialState: BusinessInfoState = {
  listSlide: {
    data: [] as ItemSlide[],
    load: false,
    error: '',
  },

  listSlideByAdmin: {
    data: [] as ItemSlide[],
    load: false,
    error: '',
  },

  listSlideEvent: {
    data: [] as ItemSlideEvent[],
    load: false,
    error: '',
  },

  listSlideEventByAdmin: {
    data: [] as ItemSlideEvent[],
    load: false,
    error: '',
  },

  detailSlideEvent: {
    data: {} as ItemSlideEvent,
    load: false,
    error: '',
  },

  detailSlide: {
    data: {} as ItemSlide,
    load: false,
    error: '',
  },

  infoAnnouncementBar: {
    data: {} as ItemAnnouncementBar,
    load: false,
    error: '',
  },

  infoAnnouncementBarPublic: {
    data: {} as ItemAnnouncementBar,
    load: false,
    error: '',
  },

  infoPopup: {
    data: {} as ItemAnnouncementBar,
    load: false,
    error: '',
  },

  infoPopupPublic: {
    data: {} as ItemAnnouncementBar,
    load: false,
    error: '',
  },

  getBusinessInfo: {
    data: {} as BusinessesInfoResponse,
    load: false,
    error: '',
  },

  promotion: {
    top: true,
    popup: true,
  },

  getBusinessLogo: {
    data: {} as BusinessesLogoResponse,
    load: false,
    error: '',
  },

  seoHomePage: {
    data: {} as MetaDataSeo,
    load: false,
    error: '',
  },

  isShowVideoBanner: false,
  isHideBannerMedia: false,
};

const businessInfoSlice = createSlice({
  name: 'businessInfo',
  initialState,
  reducers: {
    setDragDropDataSlideSection: (
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
      state.listSlideByAdmin = {
        ...state.listSlideByAdmin,
        data: arrayMove(state.listSlideByAdmin.data?.filter((item) => item.images), active, over),
      };
      // eslint-disable-next-line no-param-reassign
      state.listSlideByAdmin = {
        ...state.listSlideByAdmin,
        data: state.listSlideByAdmin.data
          .filter((item) => item.images)
          ?.map((item) => {
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

    setDragDropDataSlideEventSection: (
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
      state.listSlideEventByAdmin = {
        ...state.listSlideEventByAdmin,
        data: arrayMove(state.listSlideEventByAdmin.data, active, over),
      };
      // eslint-disable-next-line no-param-reassign
      state.listSlideEventByAdmin = {
        ...state.listSlideEventByAdmin,
        data: state.listSlideEventByAdmin.data?.map((item) => {
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

    setTurnOffPromotionPopup: (state: BusinessInfoState, action: PayloadAction<boolean>) => ({
      ...state,
      promotion: {
        ...state.promotion,
        popup: action.payload,
      },
    }),

    setTurnOffPromotionTop: (state: BusinessInfoState, action: PayloadAction<boolean>) => ({
      ...state,
      promotion: {
        ...state.promotion,
        top: action.payload,
      },
    }),

    setIsHideBannerMedia: (state: BusinessInfoState, action: PayloadAction<boolean>) => ({
      ...state,
      isHideBannerMedia: action.payload,
    }),
  },

  extraReducers: (builder) => {
    // ----------------------
    builder.addCase(getSlideAction.pending, (state) => ({
      ...state,
      listSlide: {
        data: [],
        load: true,
        error: '',
      },
    }));
    builder.addCase(getSlideAction.fulfilled, (state, action: any) => ({
      ...state,
      listSlide: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getSlideAction.rejected, (state) => ({
      ...state,
      listSlide: {
        data: [],
        load: false,
        error: '',
      },
    }));

    // --------------
    builder.addCase(getAnnouncementBarAction.pending, (state) => ({
      ...state,
      infoAnnouncementBar: {
        data: {} as ItemAnnouncementBar,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getAnnouncementBarAction.fulfilled, (state, action: any) => ({
      ...state,
      infoAnnouncementBar: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getAnnouncementBarAction.rejected, (state) => ({
      ...state,
      infoAnnouncementBar: {
        data: {} as ItemAnnouncementBar,
        load: false,
        error: '',
      },
    }));

    // --------------
    builder.addCase(getAnnouncementBarPublicAction.pending, (state) => ({
      ...state,
      infoAnnouncementBarPublic: {
        data: {} as ItemAnnouncementBar,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getAnnouncementBarPublicAction.fulfilled, (state, action: any) => ({
      ...state,
      infoAnnouncementBarPublic: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getAnnouncementBarPublicAction.rejected, (state) => ({
      ...state,
      infoAnnouncementBarPublic: {
        data: {} as ItemAnnouncementBar,
        load: false,
        error: '',
      },
    }));

    // --------------
    builder.addCase(getInfoPopupAction.pending, (state) => ({
      ...state,
      infoPopup: {
        data: {} as ItemAnnouncementBar,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getInfoPopupAction.fulfilled, (state, action: any) => ({
      ...state,
      infoPopup: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getInfoPopupAction.rejected, (state) => ({
      ...state,
      infoPopup: {
        data: {} as ItemAnnouncementBar,
        load: false,
        error: '',
      },
    }));

    // --------------
    builder.addCase(getInfoPopupPublicAction.pending, (state) => ({
      ...state,
      infoPopupPublic: {
        data: {} as ItemAnnouncementBar,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getInfoPopupPublicAction.fulfilled, (state, action: any) => ({
      ...state,
      infoPopupPublic: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getInfoPopupPublicAction.rejected, (state) => ({
      ...state,
      infoPopupPublic: {
        data: {} as ItemAnnouncementBar,
        load: false,
        error: '',
      },
    }));

    // --------------
    builder.addCase(getSlideByAdminAction.pending, (state) => ({
      ...state,
      listSlideByAdmin: {
        data: [],
        load: true,
        error: '',
      },
    }));
    builder.addCase(getSlideByAdminAction.fulfilled, (state, action: any) => ({
      ...state,
      listSlideByAdmin: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getSlideByAdminAction.rejected, (state) => ({
      ...state,
      listSlideByAdmin: {
        data: [],
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailBannerByIdAction.pending, (state) => ({
      ...state,
      detailSlide: {
        data: {} as ItemSlide,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getDetailBannerByIdAction.fulfilled, (state, action: any) => ({
      ...state,
      detailSlide: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDetailBannerByIdAction.rejected, (state) => ({
      ...state,
      detailSlide: {
        data: {} as ItemSlide,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(patchSlideIsActiveAdminAction.pending, (state) => ({
      ...state,
      listSlideByAdmin: {
        ...state.listSlideByAdmin,
        load: true,
      },
    }));
    builder.addCase(patchSlideIsActiveAdminAction.fulfilled, (state, action: any) => ({
      ...state,
      listSlideByAdmin: {
        ...state.listSlideByAdmin,
        data: state.listSlideByAdmin.data.map((item) => {
          if (item.id === action.payload.id) {
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
    builder.addCase(patchSlideIsActiveAdminAction.rejected, (state) => ({
      ...state,
      listSlideByAdmin: {
        ...state.listSlideByAdmin,
        load: false,
      },
    }));

    // ---------------
    builder.addCase(deleteSlideAction.pending, (state) => ({
      ...state,
      listSlideByAdmin: {
        ...state.listSlideByAdmin,
        load: false,
      },
    }));
    builder.addCase(deleteSlideAction.fulfilled, (state, action: any) => ({
      ...state,
      listSlideByAdmin: {
        ...state.listSlideByAdmin,
        data: [...state.listSlideByAdmin.data].filter(
          (item) => item.id !== action.payload.idDelete
        ),
      },
    }));
    builder.addCase(deleteSlideAction.rejected, (state) => ({
      ...state,
      listSlideByAdmin: {
        ...state.listSlideByAdmin,
        error: '',
      },
    }));

    // ---------------
    builder.addCase(getBusinessInfoAction.pending, (state) => ({
      ...state,
      getBusinessInfo: {
        ...state.getBusinessInfo,
        load: false,
      },
    }));
    builder.addCase(getBusinessInfoAction.fulfilled, (state, action: any) => ({
      ...state,
      getBusinessInfo: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getBusinessInfoAction.rejected, (state) => ({
      ...state,
      getBusinessInfo: {
        ...state.getBusinessInfo,
        error: '',
        loading: false,
      },
    }));

    // ----------------------
    builder.addCase(getCheckShowVideoSlideAction.pending, (state) => ({
      ...state,
      isShowVideoBanner: false,
    }));
    builder.addCase(getCheckShowVideoSlideAction.fulfilled, (state, action: any) => ({
      ...state,
      isShowVideoBanner: action.payload.data,
    }));
    builder.addCase(getCheckShowVideoSlideAction.rejected, (state) => ({
      ...state,
      isShowVideoBanner: false,
    }));

    // --------------
    builder.addCase(patchIsShowVideBannerAdminAction.fulfilled, (state, action: any) => ({
      ...state,
      isShowVideoBanner: action.payload.isVideo,
    }));
    builder.addCase(patchIsShowVideBannerAdminAction.rejected, (state) => ({
      ...state,
      isShowVideoBanner: false,
    }));

    // ---------------
    builder.addCase(getBusinessLogoAction.pending, (state) => ({
      ...state,
      getBusinessLogo: {
        ...state.getBusinessLogo,
        load: false,
      },
    }));
    builder.addCase(getBusinessLogoAction.fulfilled, (state, action: any) => ({
      ...state,
      getBusinessLogo: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getBusinessLogoAction.rejected, (state) => ({
      ...state,
      getBusinessLogo: {
        ...state.getBusinessLogo,
        error: '',
        loading: false,
      },
    }));

    // --------------
    builder.addCase(getSlideEventAction.pending, (state) => ({
      ...state,
      listSlideEvent: {
        data: [],
        load: true,
        error: '',
      },
    }));
    builder.addCase(getSlideEventAction.fulfilled, (state, action: any) => ({
      ...state,
      listSlideEvent: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getSlideEventAction.rejected, (state) => ({
      ...state,
      listSlideEvent: {
        data: [],
        load: false,
        error: '',
      },
    }));

    // --------------
    builder.addCase(getSlideEventByAdminAction.pending, (state) => ({
      ...state,
      listSlideEventByAdmin: {
        data: [],
        load: true,
        error: '',
      },
    }));
    builder.addCase(getSlideEventByAdminAction.fulfilled, (state, action: any) => ({
      ...state,
      listSlideEventByAdmin: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getSlideEventByAdminAction.rejected, (state) => ({
      ...state,
      listSlideEventByAdmin: {
        data: [],
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailSlideEventByIdAction.pending, (state) => ({
      ...state,
      detailSlideEvent: {
        data: {} as ItemSlideEvent,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getDetailSlideEventByIdAction.fulfilled, (state, action: any) => ({
      ...state,
      detailSlideEvent: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getDetailSlideEventByIdAction.rejected, (state) => ({
      ...state,
      detailSlideEvent: {
        data: {} as ItemSlideEvent,
        load: false,
        error: '',
      },
    }));

    // -----------------
    // ------------------
    builder.addCase(patchSlideEventIsActiveAdminAction.pending, (state) => ({
      ...state,
      listSlideEventByAdmin: {
        ...state.listSlideEventByAdmin,
        load: true,
      },
    }));
    builder.addCase(patchSlideEventIsActiveAdminAction.fulfilled, (state, action: any) => ({
      ...state,
      listSlideEventByAdmin: {
        ...state.listSlideEventByAdmin,
        data: state.listSlideEventByAdmin.data.map((item) => {
          if (item.id === action.payload.id) {
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
    builder.addCase(patchSlideEventIsActiveAdminAction.rejected, (state) => ({
      ...state,
      listSlideEventByAdmin: {
        ...state.listSlideEventByAdmin,
        load: false,
      },
    }));

    // ---------------
    builder.addCase(deleteSlideEventAction.pending, (state) => ({
      ...state,
      listSlideEventByAdmin: {
        ...state.listSlideEventByAdmin,
        load: false,
      },
    }));
    builder.addCase(deleteSlideEventAction.fulfilled, (state, action: any) => ({
      ...state,
      listSlideEventByAdmin: {
        ...state.listSlideEventByAdmin,
        data: [...state.listSlideEventByAdmin.data].filter(
          (item) => item.id !== action.payload.idDelete
        ),
      },
    }));
    builder.addCase(deleteSlideEventAction.rejected, (state) => ({
      ...state,
      listSlideEventByAdmin: {
        ...state.listSlideEventByAdmin,
        error: '',
      },
    }));

    // --------------
    builder.addCase(getSeoHomePageAction.pending, (state) => ({
      ...state,
      seoHomePage: {
        data: {} as MetaDataSeo,
        load: true,
        error: '',
      },
    }));
    builder.addCase(getSeoHomePageAction.fulfilled, (state, action: any) => ({
      ...state,
      seoHomePage: {
        data: action.payload.data,
        load: false,
        error: '',
      },
    }));
    builder.addCase(getSeoHomePageAction.rejected, (state) => ({
      ...state,
      seoHomePage: {
        data: {} as MetaDataSeo,
        load: false,
        error: '',
      },
    }));
  },
});

export const {
  setDragDropDataSlideSection,
  setTurnOffPromotionTop,
  setTurnOffPromotionPopup,
  setIsHideBannerMedia,
  setDragDropDataSlideEventSection,
} = businessInfoSlice.actions;

export default businessInfoSlice.reducer;
