import { TranslateType } from '../translation/translation.type';

export type ItemMadeToMeasures = {
  id: string;
  createdAt: string;
  updatedAt: string;
  imageOne: string;
  imageTwo: string;
  height: number;
  weight: number;
  word: string;
  order: {
    id: string;
  };
};

export type ItemMadeToMeasuresGuide = {
  id: string;
  createdAt: string;
  imageOne: string;
  imageTwo: string;
  height: number;
  weight: number;
  word: string;
  content: TranslateType;
  title: TranslateType;
};

export interface ParameterPost {
  imageOne: string;
  imageTwo: string;
  height: number;
  weight: number;
  word: string;
  orderId: string;
}
export interface ParameterPut extends Omit<ParameterPost, 'id'> {
  id: string;
}

export interface ParamMadeToMeasureForm {
  id: string;
  title: TranslateType;
  content: TranslateType;
  imageOne: string;
  imageTwo: string;
  word: string;
}

export interface ParamPutMadeToMeasureForm extends Omit<ParamMadeToMeasureForm, 'id'> {}

export interface ParamMadeToMeasureGuide {
  id: string;
  title: TranslateType;
  content: TranslateType;
}

export interface ParamPutMadeToMeasureGuide extends Omit<ParamMadeToMeasureGuide, 'id'> {}

export interface ParamMadeToMeasureGuidePopup {
  id: string;
  popupContent: TranslateType;
}

export interface ParamPutMadeToMeasureGuidePopup extends Omit<ParamMadeToMeasureGuidePopup, 'id'> {}

export interface GetDetailMadeToMeasures {
  data: ItemMadeToMeasures;
}

export type MadeToMeasuresStateReducer = {
  getDetailMadeToMeasuresById: {
    data: ItemMadeToMeasures;
    load: boolean;
    error: string;
  };

  getDetailMadeToMeasuresByOrderId: {
    data: ItemMadeToMeasures;
    load: boolean;
    error: string;
  };

  getMadeToMeasuresGuide: {
    data: ItemMadeToMeasuresGuide;
    load: boolean;
    error: string;
  };

  getMadeToMeasuresForm: {
    data: ParamMadeToMeasureForm;
    load: boolean;
    error: string;
  };

  getMadeToMeasuresGuidePopup: {
    data: ParamMadeToMeasureGuidePopup;
    load: boolean;
    error: string;
  };
};
