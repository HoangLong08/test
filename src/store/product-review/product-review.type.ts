import { ParameterRequestLanguage } from '@/config/constant';
import { UserPayloadAction } from '../auth/auth.type';
import { TranslateType } from '../translation/translation.type';

// eslint-disable-next-line no-shadow
export enum QuestionProductReview {
  radio = 'RADIO_BOX',
  checkbox = 'CHECK_BOX',
  text = 'TEXT_BOX',
}
export interface ProductReviewType {
  id?: string;
  createdAt?: string;
  updatedAt?: string;
  type?: QuestionProductReview;
  question?: TranslateType;
  answer: TranslateType[];
  isRequired?: boolean;
  index?: number;
  code?: string;
}

export interface ProductReviewAllType {
  id: string;
  code?: string;
}

export interface ProductReviewTypeAdmin {
  id?: string;
  createdAt?: string;
  user: UserPayloadAction;
  userName: string;
  userEmail: string;
  product: {
    id: string;
    name: TranslateType;
  };
  detail: {
    type: QuestionProductReview;
    question: TranslateType;
    answer: TranslateType[];
    userAnswer: any;
  }[];
  order: {
    id: string;
    docNo: string;
    isMeasurementInfoAvailable: boolean;
    productReviews: [];
  };
  index?: number;
}

export interface PostProductReview {
  userName?: string;
  userEmail?: string;
  code?: string;
  productId?: string;
  productName?: ParameterRequestLanguage;
  detail?: {
    type: QuestionProductReview;
    question: ParameterRequestLanguage;
    answer: ParameterRequestLanguage[];
    userAnswer: ParameterRequestLanguage[] | string;
  };
  type?: QuestionProductReview;
  question: ParameterRequestLanguage;
  answer: ParameterRequestLanguage[];
  isRequired?: boolean;
  orderId?: string;
}

export interface PatchQuestionOrder {
  id: string;
  index: number;
}
