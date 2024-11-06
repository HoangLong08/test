import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  AppMailerStateReducer,
  ItemAppMailer,
  ITemplateContentVariableAssignsValue,
} from './app-mailer.type';
import {
  getAppMailerAction,
  getTemplateContentAction,
  getVariableAssignsValueTemplateContentAction,
  patchMultiEmailTemplateIsActiveAdminAction,
} from './app-mailer.action';

const initialState: AppMailerStateReducer = {
  listAppMailer: {
    data: [] as ItemAppMailer[],
    load: false,
    error: '',
  },

  templateContent: {
    data: {} as ItemAppMailer,
    load: false,
    error: '',
  },

  templateContentVariableAssignsValue: {
    data: {} as ITemplateContentVariableAssignsValue,
    load: false,
    error: '',
  },

  infoSendEmail: {
    data: {
      totalProcessEmailsInTheQueue: 0,
      totalEmailsSended: 0,
      status: false,
    },
    load: false,
    error: '',
  },
};

const appMailerSlice = createSlice({
  name: 'appMailer',
  initialState,
  reducers: {
    infoSendEmail: (state: AppMailerStateReducer, action: PayloadAction<any>) => ({
      ...state,
      infoSendEmail: {
        ...state.infoSendEmail,
        data: {
          totalProcessEmailsInTheQueue: action.payload?.totalProcessEmailsInTheQueue,
          totalEmailsSended: action.payload?.totalEmailsSended,
          status: false,
        },
        load: false,
        error: '',
      },
    }),
  },

  extraReducers: (builder) => {
    builder.addCase(getAppMailerAction.pending, (state: AppMailerStateReducer) => ({
      ...state,
      listAppMailer: {
        ...state.listAppMailer,
        load: true,
        error: '',
      },
    }));
    builder.addCase(
      getAppMailerAction.fulfilled,
      (state: AppMailerStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAppMailer: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getAppMailerAction.rejected, (state: AppMailerStateReducer) => ({
      ...state,
      listAppMailer: {
        data: [] as ItemAppMailer[],
        load: false,
        error: '',
      },
    }));

    // --------------------
    builder.addCase(getTemplateContentAction.pending, (state: AppMailerStateReducer) => ({
      ...state,
      templateContent: {
        ...state.templateContent,
        load: true,
        error: '',
        data: {} as ItemAppMailer,
      },
    }));
    builder.addCase(
      getTemplateContentAction.fulfilled,
      (state: AppMailerStateReducer, action: PayloadAction<any>) => ({
        ...state,
        templateContent: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(getTemplateContentAction.rejected, (state: AppMailerStateReducer) => ({
      ...state,
      templateContent: {
        data: {} as ItemAppMailer,
        load: false,
        error: '',
      },
    }));

    // ------------------
    builder.addCase(
      getVariableAssignsValueTemplateContentAction.pending,
      (state: AppMailerStateReducer) => ({
        ...state,
        templateContentVariableAssignsValue: {
          data: {} as ITemplateContentVariableAssignsValue,
          load: true,
          error: '',
        },
      })
    );
    builder.addCase(
      getVariableAssignsValueTemplateContentAction.fulfilled,
      (state: AppMailerStateReducer, action: PayloadAction<any>) => ({
        ...state,
        templateContentVariableAssignsValue: {
          data: action.payload.data,
          load: false,
          error: '',
        },
      })
    );
    builder.addCase(
      getVariableAssignsValueTemplateContentAction.rejected,
      (state: AppMailerStateReducer) => ({
        ...state,
        templateContentVariableAssignsValue: {
          data: {} as ITemplateContentVariableAssignsValue,
          load: false,
          error: '',
        },
      })
    );

    // ---------
    builder.addCase(
      patchMultiEmailTemplateIsActiveAdminAction.pending,
      (state: AppMailerStateReducer) => ({
        ...state,
        listAppMailer: {
          ...state.listAppMailer,
          load: true,
        },
      })
    );
    builder.addCase(
      patchMultiEmailTemplateIsActiveAdminAction.fulfilled,
      (state: AppMailerStateReducer, action: PayloadAction<any>) => ({
        ...state,
        listAppMailer: {
          ...state.listAppMailer,
          data: state.listAppMailer.data.map((item) => {
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
      })
    );
    builder.addCase(
      patchMultiEmailTemplateIsActiveAdminAction.rejected,
      (state: AppMailerStateReducer) => ({
        ...state,
        listAppMailer: {
          ...state.listAppMailer,
          load: false,
        },
      })
    );
  },
});

export const { infoSendEmail } = appMailerSlice.actions;

export default appMailerSlice.reducer;
