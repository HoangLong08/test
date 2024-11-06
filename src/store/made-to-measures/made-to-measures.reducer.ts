import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  MadeToMeasuresStateReducer,
  ItemMadeToMeasures,
  ItemMadeToMeasuresGuide,
  ParamMadeToMeasureForm,
  ParamMadeToMeasureGuidePopup,
} from './made-to-measures.type';
import {
  getDetailMadeToMeasuresByIdAction,
  getDetailMadeToMeasuresByOrderIdAction,
  getMadeToMeasuresGuideAction,
  getMadeToMeasuresFormAction,
  getMadeToMeasuresGuidePopupAction,
} from './made-to-measures.action';

const initialState: MadeToMeasuresStateReducer = {
  getDetailMadeToMeasuresById: {
    data: {} as ItemMadeToMeasures,
    load: false,
    error: '',
  },

  getDetailMadeToMeasuresByOrderId: {
    data: {} as ItemMadeToMeasures,
    load: false,
    error: '',
  },

  getMadeToMeasuresGuide: {
    data: {} as ItemMadeToMeasuresGuide,
    load: false,
    error: '',
  },

  getMadeToMeasuresForm: {
    data: {} as ParamMadeToMeasureForm,
    load: false,
    error: '',
  },

  getMadeToMeasuresGuidePopup: {
    data: {} as ParamMadeToMeasureGuidePopup,
    load: false,
    error: '',
  },
};

const madeToMeasuresSlice = createSlice({
  name: 'madeToMeasures',
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    // ------------------
    builder.addCase(
      getDetailMadeToMeasuresByOrderIdAction.pending,
      (state: MadeToMeasuresStateReducer) => ({
        ...state,
        getDetailMadeToMeasuresByOrderId: {
          ...state.getDetailMadeToMeasuresByOrderId,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailMadeToMeasuresByOrderIdAction.fulfilled,
      (state: MadeToMeasuresStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getDetailMadeToMeasuresByOrderId: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailMadeToMeasuresByOrderIdAction.rejected,
      (state: MadeToMeasuresStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getDetailMadeToMeasuresByOrderId: {
          ...state.getDetailMadeToMeasuresByOrderId,
          load: false,
          error: action.payload.error,
        },
      })
    );

    // ------------------
    builder.addCase(getMadeToMeasuresGuideAction.pending, (state: MadeToMeasuresStateReducer) => ({
      ...state,
      getMadeToMeasuresGuide: {
        ...state.getMadeToMeasuresGuide,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getMadeToMeasuresGuideAction.fulfilled,
      (state: MadeToMeasuresStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getMadeToMeasuresGuide: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getMadeToMeasuresGuideAction.rejected, (state: MadeToMeasuresStateReducer) => ({
      ...state,
      getMadeToMeasuresGuide: {
        ...state.getMadeToMeasuresGuide,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      getDetailMadeToMeasuresByIdAction.pending,
      (state: MadeToMeasuresStateReducer) => ({
        ...state,
        getDetailMadeToMeasuresById: {
          ...state.getDetailMadeToMeasuresById,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailMadeToMeasuresByIdAction.fulfilled,
      (state: MadeToMeasuresStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getDetailMadeToMeasuresById: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getDetailMadeToMeasuresByIdAction.rejected,
      (state: MadeToMeasuresStateReducer) => ({
        ...state,
        getDetailMadeToMeasuresById: {
          ...state.getDetailMadeToMeasuresById,
          load: false,
          error: '',
        },
      })
    );

    // ------------------
    builder.addCase(getMadeToMeasuresFormAction.pending, (state: MadeToMeasuresStateReducer) => ({
      ...state,
      getMadeToMeasuresForm: {
        ...state.getMadeToMeasuresForm,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getMadeToMeasuresFormAction.fulfilled,
      (state: MadeToMeasuresStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getMadeToMeasuresForm: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getMadeToMeasuresFormAction.rejected, (state: MadeToMeasuresStateReducer) => ({
      ...state,
      getMadeToMeasuresForm: {
        ...state.getMadeToMeasuresForm,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      getMadeToMeasuresGuidePopupAction.pending,
      (state: MadeToMeasuresStateReducer) => ({
        ...state,
        getMadeToMeasuresGuidePopup: {
          ...state.getMadeToMeasuresGuidePopup,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getMadeToMeasuresGuidePopupAction.fulfilled,
      (state: MadeToMeasuresStateReducer, action: PayloadAction<any>) => ({
        ...state,
        getMadeToMeasuresGuidePopup: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getMadeToMeasuresGuidePopupAction.rejected,
      (state: MadeToMeasuresStateReducer) => ({
        ...state,
        getMadeToMeasuresGuidePopup: {
          ...state.getMadeToMeasuresGuidePopup,
          load: false,
          error: '',
        },
      })
    );
  },
});

export default madeToMeasuresSlice.reducer;
