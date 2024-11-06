import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { MetaPagination } from '@/config/constant';
import { ItemHistoryActivity, ItemTheme, SettingAppState } from './setting-app.type';
import {
  getListHistoryActivityAction,
  getThemeAction,
  getVietcombankExchangeRateAction,
} from './setting-app.action';

const settingAppSlice = createSlice({
  name: 'settingApp',
  initialState: {
    isFullScreenEditor: false,
    isCollapsedSidebarAdmin: false,
    listHistoryActivity: {
      data: [] as ItemHistoryActivity[],
      meta: {} as MetaPagination,
      load: false,
      error: '',
    },
    vietcombank: {
      load: false,
      data: 0,
      error: '',
    },

    theme: {
      load: false,
      data: {} as ItemTheme,
      error: '',
    },
  },
  reducers: {
    setIsFullScreenEditor: (state: SettingAppState, action: PayloadAction<boolean>) => ({
      ...state,
      isFullScreenEditor: action.payload,
    }),
    setIsCollapsedSidebarAdmin: (state: SettingAppState, action: PayloadAction<boolean>) => ({
      ...state,
      isCollapsedSidebarAdmin: action.payload,
    }),

    addHistoryActivity: (state: SettingAppState, action: PayloadAction<any>) => ({
      ...state,
      listHistoryActivity: {
        ...state.listHistoryActivity,
        data: [action.payload, ...state.listHistoryActivity.data],
      },
    }),
  },

  extraReducers: (builder) => {
    builder.addCase(getListHistoryActivityAction.pending, (state: SettingAppState) => ({
      ...state,
      listHistoryActivity: {
        ...state.listHistoryActivity,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getListHistoryActivityAction.fulfilled,
      (state: SettingAppState, action: PayloadAction<any>) => ({
        ...state,
        listHistoryActivity: {
          data: action.payload.data,
          meta: action.payload.meta,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getListHistoryActivityAction.rejected, (state: SettingAppState) => ({
      ...state,
      listHistoryActivity: {
        data: [] as ItemHistoryActivity[],
        meta: {} as MetaPagination,
        load: false,
        error: '',
      },
    }));

    // -------------------------
    builder.addCase(getVietcombankExchangeRateAction.pending, (state: SettingAppState) => ({
      ...state,
      vietcombank: {
        ...state.vietcombank,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getVietcombankExchangeRateAction.fulfilled,
      (state: SettingAppState, action: PayloadAction<any>) => ({
        ...state,
        vietcombank: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getVietcombankExchangeRateAction.rejected, (state: SettingAppState) => ({
      ...state,
      vietcombank: {
        data: 0,
        load: false,
        error: '',
      },
    }));

    // -----------
    builder.addCase(getThemeAction.pending, (state: SettingAppState) => ({
      ...state,
      theme: {
        ...state.theme,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getThemeAction.fulfilled,
      (state: SettingAppState, action: PayloadAction<any>) => ({
        ...state,
        theme: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getThemeAction.rejected, (state: SettingAppState) => ({
      ...state,
      theme: {
        data: {} as ItemTheme,
        load: false,
        error: '',
      },
    }));
  },
});
export const { setIsFullScreenEditor, setIsCollapsedSidebarAdmin, addHistoryActivity } =
  settingAppSlice.actions;

export default settingAppSlice.reducer;
