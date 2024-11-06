import { MetaPagination, ParameterRequestLanguage } from '@/config/constant';
import { TranslateType } from '../translation/translation.type';

export interface ParamPostLink {
  icon: string;
  title: ParameterRequestLanguage;
  link: string;
}

export interface LinkType {
  id: string;
  index: number;
  icon: string;
  createdAt: string;
  updatedAt: string;
  title: TranslateType;
  link: string;
}
export interface ParamPutLink extends ParamPostLink {
  id: string;
}
export type LinkStateReducer = {
  listLink: {
    data: LinkType[];
    meta: MetaPagination;
    load: boolean;
    error: string;
  };
  detailLink: {
    data: LinkType;
    load: boolean;
    error: string;
  };
};
