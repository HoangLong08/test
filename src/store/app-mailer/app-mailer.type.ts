import { TranslateType } from '../translation/translation.type';

export type ItemAppMailer = {
  content: TranslateType;
  createdAt: string;
  email: string;
  host: string;
  id: string;
  isActive: true;
  mission: string;
  subject: TranslateType;
  transporter: string;
  updatedAt: string;
  description: string;
};

export type ITemplateContentVariableAssignsValue = {
  key: string;
  description: string;
  contextValues: {
    value: string;
    description: string;
  }[];
  subjectValues: {
    value: string;
    description: string;
  }[];
};

export type AppMailerStateReducer = {
  listAppMailer: {
    data: ItemAppMailer[];
    load: boolean;
    error: string;
  };

  templateContent: {
    data: ItemAppMailer;
    load: boolean;
    error: string;
  };

  templateContentVariableAssignsValue: {
    data: ITemplateContentVariableAssignsValue;
    load: boolean;
    error: string;
  };

  infoSendEmail: {
    data: {
      totalProcessEmailsInTheQueue: number;
      totalEmailsSended: number;
      status: boolean;
    };
    load: boolean;
    error: string;
  };
};
