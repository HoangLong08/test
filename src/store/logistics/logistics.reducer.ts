import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import {
  NationalStateReducer,
  ItemNational,
  ItemPostalTariff,
  ItemDomesticPostal,
  ItemNotice,
  IShippingEstimate,
} from './logistics.type';
import {
  deleteNationalAction,
  getDetailNationalByIdAction,
  getDomesticPostalsAction,
  getNationalAction,
  getNationalByAdminAction,
  getPostalTariffByIdNationalAdminAction,
  getDomesticPostalsByAdminAction,
  postNationalAction,
  getNoticeByTypeNationalAction,
  getNoticeByTypeInternalAction,
  getPostalTariffShippingEstimateAction,
  getPostalTariffShippingEstimateDomesticsAction,
} from './logistics.action';

const initialState: NationalStateReducer = {
  listNational: {
    data: [] as ItemNational[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listNationalByAdmin: {
    data: [] as ItemNational[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  detailNational: {
    data: {} as ItemNational,
    load: false,
    error: '',
  },

  listPostalTariffByIdNationalAdmin: {
    data: [] as ItemPostalTariff[],
    load: false,
    error: '',
  },

  listDomesticPostal: {
    data: [] as ItemDomesticPostal[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  listDomesticPostalByAdmin: {
    data: [] as ItemDomesticPostal[],
    meta: {} as MetaPagination,
    load: false,
    error: '',
  },

  // ghi chú quốc tế
  noticeNation: {
    data: {} as ItemNotice,
    load: false,
    error: '',
  },

  // ghi chú trong nước
  noticeInternal: {
    data: {} as ItemNotice,
    load: false,
    error: '',
  },

  // api chỉ dành cho phương thức vận chuyển quốc tê (hàng không, bưu điện)
  shippingEstimate: {
    data: {} as IShippingEstimate,
    load: false,
    error: '',
  },

  // api chỉ dành cho phương thức vận chuyển trong nước
  shippingEstimateDomestics: {
    data: {} as IShippingEstimate,
    load: false,
    error: '',
  },
};

const logisticsSlice = createSlice({
  name: 'logistics',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getNationalAction.pending, (state: NationalStateReducer) => ({
      ...state,
      listNational: {
        ...state.listNational,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getNationalAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listNational: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getNationalAction.rejected, (state: NationalStateReducer) => ({
      ...state,
      listNational: {
        data: [] as ItemNational[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(
      getPostalTariffShippingEstimateAction.pending,
      (state: NationalStateReducer) => ({
        ...state,
        shippingEstimate: {
          ...state.shippingEstimate,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getPostalTariffShippingEstimateAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        shippingEstimate: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getPostalTariffShippingEstimateAction.rejected,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
          ...state,
          shippingEstimate: {
            data: {} as IShippingEstimate,
            load: false,
            error: action.payload.error.messageCode,
          },
        })
    );

    // -----------------
    builder.addCase(getDomesticPostalsAction.pending, (state: NationalStateReducer) => ({
      ...state,
      listDomesticPostal: {
        ...state.listDomesticPostal,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDomesticPostalsAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listDomesticPostal: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDomesticPostalsAction.rejected, (state: NationalStateReducer) => ({
      ...state,
      listDomesticPostal: {
        data: [] as ItemDomesticPostal[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      getPostalTariffByIdNationalAdminAction.pending,
      (state: NationalStateReducer) => ({
        ...state,
        listPostalTariffByIdNationalAdmin: {
          ...state.listPostalTariffByIdNationalAdmin,
          data: [],
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getPostalTariffByIdNationalAdminAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listPostalTariffByIdNationalAdmin: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getPostalTariffByIdNationalAdminAction.rejected,
      (state: NationalStateReducer) => ({
        ...state,
        listPostalTariffByIdNationalAdmin: {
          data: [] as ItemPostalTariff[],
          load: false,
          error: '',
        },
      })
    );
    // ------------------
    // builder.addCase(postDetailPostalTariffAction.pending, (state: NationalStateReducer) => ({
    //   ...state,
    //   listPostalTariffByIdNationalAdmin: {
    //     ...state.listPostalTariffByIdNationalAdmin,
    //     load: true,
    //     error: '',
    //   },
    // }));
    // builder.addCase(
    //   postDetailPostalTariffAction.fulfilled,
    //   (state: NationalStateReducer, action: PayloadAction<any>) => ({
    //     ...state,
    //     listPostalTariffByIdNationalAdmin: {
    //       data: [action.payload.data, ...state.listPostalTariffByIdNationalAdmin.data],
    //       load: false,
    //       error: '',
    //     },
    //   })
    // );
    // builder.addCase(postDetailPostalTariffAction.rejected, (state: NationalStateReducer) => ({
    //   ...state,
    //   listPostalTariffByIdNationalAdmin: {
    //     data: [] as ItemPostalTariff[],
    //     load: false,
    //     error: '',
    //   },
    // }));

    // ------------------
    builder.addCase(getNationalByAdminAction.pending, (state: NationalStateReducer) => ({
      ...state,
      listNationalByAdmin: {
        ...state.listNationalByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getNationalByAdminAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listNationalByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getNationalByAdminAction.rejected, (state: NationalStateReducer) => ({
      ...state,
      listNationalByAdmin: {
        data: [] as ItemNational[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(getDetailNationalByIdAction.pending, (state: NationalStateReducer) => ({
      ...state,
      detailNational: {
        ...state.detailNational,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDetailNationalByIdAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        detailNational: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDetailNationalByIdAction.rejected, (state: NationalStateReducer) => ({
      ...state,
      detailFaqs: {
        data: {} as ItemNational,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(deleteNationalAction.pending, (state: NationalStateReducer) => ({
      ...state,
      listNationalByAdmin: {
        ...state.listNationalByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      deleteNationalAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listNationalByAdmin: {
          ...state.listNationalByAdmin,
          data: state.listNationalByAdmin.data.filter((item) => item.id !== action.payload.id),
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(deleteNationalAction.rejected, (state: NationalStateReducer) => ({
      ...state,
      listNationalByAdmin: {
        data: [] as ItemNational[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(postNationalAction.pending, (state: NationalStateReducer) => ({
      ...state,
      listNationalByAdmin: {
        ...state.listNationalByAdmin,
        load: false,
        error: '',
      },
    }));
    builder.addCase(
      postNationalAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listNationalByAdmin: {
          data: [action.payload.data, ...state.listNationalByAdmin.data],
          meta: {},
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(postNationalAction.rejected, (state: NationalStateReducer) => ({
      ...state,
      listNationalByAdmin: {
        data: state.listNationalByAdmin.data,
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(getDomesticPostalsByAdminAction.pending, (state: NationalStateReducer) => ({
      ...state,
      listDomesticPostalByAdmin: {
        ...state.listDomesticPostalByAdmin,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getDomesticPostalsByAdminAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listDomesticPostalByAdmin: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getDomesticPostalsByAdminAction.rejected, (state: NationalStateReducer) => ({
      ...state,
      listDomesticPostalByAdmin: {
        data: [] as ItemDomesticPostal[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // ---------------------
    builder.addCase(getNoticeByTypeNationalAction.pending, (state: NationalStateReducer) => ({
      ...state,
      noticeNation: {
        ...state.noticeNation,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getNoticeByTypeNationalAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        noticeNation: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getNoticeByTypeNationalAction.rejected, (state: NationalStateReducer) => ({
      ...state,
      noticeNation: {
        data: {} as ItemNotice,
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(getNoticeByTypeInternalAction.pending, (state: NationalStateReducer) => ({
      ...state,
      noticeInternal: {
        ...state.noticeInternal,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getNoticeByTypeInternalAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        noticeInternal: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getNoticeByTypeInternalAction.rejected, (state: NationalStateReducer) => ({
      ...state,
      noticeInternal: {
        data: {} as ItemNotice,
        load: false,
        error: '',
      },
    }));

    // -----------------
    builder.addCase(
      getPostalTariffShippingEstimateDomesticsAction.pending,
      (state: NationalStateReducer) => ({
        ...state,
        shippingEstimateDomestics: {
          ...state.shippingEstimateDomestics,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getPostalTariffShippingEstimateDomesticsAction.fulfilled,
      (state: NationalStateReducer, action: PayloadAction<any>) => ({
        ...state,
        shippingEstimateDomestics: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getPostalTariffShippingEstimateDomesticsAction.rejected,
      (state: NationalStateReducer) => ({
        ...state,
        shippingEstimateDomestics: {
          ...state.shippingEstimateDomestics,
          load: false,
          error: '',
        },
      })
    );
  },
});

export default logisticsSlice.reducer;
