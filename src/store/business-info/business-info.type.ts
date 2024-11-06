import { BusinessSlideEnum, MetaDataSeo, ParameterRequestLanguage } from '@/config/constant';
import { AxiosResponse } from 'axios';
import { TranslateType } from '../translation/translation.type';

export type ParamGetSlide = {
  type: BusinessSlideEnum;
};

export type ParamPostSlideEvent = {
  title?: TranslateType | null;
  image?: string | null;
  youtube?: string | null;
  buttonText?: TranslateType | null;
  buttonLink?: string | null;
  titleColor?: string | null;
};

export interface ParamPutSlideEvent extends ParamPostSlideEvent {
  id: string;
}

export type ItemAnnouncementBar = {
  text?: TranslateType;
  image?: string;
  link: string;
  effectiveDate?: string;
  expirationDate?: string;
  isActive: boolean;
  type: string;
  createdAt?: string;
  updatedAt?: string;
  displayType: string;
};

export interface PutAnnouncementBar extends ItemAnnouncementBar {}

export type ItemSlide = {
  id: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
  index: number;
  images: string[];
  buttonText?: TranslateType;
  buttonLink?: string;
  isActive: boolean;
  type?: string;
  isVideo?: boolean;
  video?: string;
};

export type ItemSlideEvent = {
  id: string;
  createdAt: string;
  updatedAt: string;
  index: number;
  image: string;
  youtube: string;
  title: TranslateType;
  buttonText: TranslateType;
  buttonLink: string;
  isActive: boolean;
  titleColor?: string;
};

export type GetSlideResponse = AxiosResponse<{
  data: ItemSlide;
}>;

export type GetDetailSlideResponse = AxiosResponse<{
  data: ItemSlide;
}>;

export type ParamPostSlide = {
  buttonText: ParameterRequestLanguage;
  buttonLink?: string;
  images?: string[];
  type: BusinessSlideEnum;
  video?: string;
  isVideo?: boolean;
};

export interface ParamPutSlide extends Omit<ParamPostSlide, 'id'> {
  id: string;
}

export type ParamPutUpdateOrderSlideBusinessInfo = {
  activeId: string;
  activeIndex: number;
};

export interface BusinessesInfoResponse {
  id: string;
  createdAt: string;
  updatedAt: string;
  businessName: string;
  facebook: string;
  email: string;
  phoneNumber: string;
  instagram: string;
  tiktok: string;
  youtube: string;
  otherSocial: string;
}

export interface BusinessesLogoResponse {
  id: string;
  brandStatement: string;
  mobileHeaderLogo: string;
  desktopHeaderLogo: string;
  footerLogo: string;
}

export interface ParamsPutBusinessesInfo {
  facebook?: string;
  email?: string;
  instagram?: string;
  tiktok?: string;
  youtube?: string;
  phoneNumber?: string;
  brandStatement?: string;
  mobileHeaderLogo?: string;
  desktopHeaderLogo?: string;
  footerLogo?: string;
}

export type BusinessInfoState = {
  listSlide: {
    data: ItemSlide[];
    load: boolean;
    error: string;
  };

  listSlideByAdmin: {
    data: ItemSlide[];
    load: boolean;
    error: string;
  };

  listSlideEvent: {
    data: ItemSlideEvent[];
    load: boolean;
    error: string;
  };

  listSlideEventByAdmin: {
    data: ItemSlideEvent[];
    load: boolean;
    error: string;
  };

  detailSlideEvent: {
    data: ItemSlideEvent;
    load: boolean;
    error: string;
  };

  detailSlide: {
    data: ItemSlide;
    load: boolean;
    error: string;
  };

  infoAnnouncementBar: {
    data: ItemAnnouncementBar;
    load: boolean;
    error: string;
  };

  infoAnnouncementBarPublic: {
    data: ItemAnnouncementBar;
    load: boolean;
    error: string;
  };

  infoPopup: {
    data: ItemAnnouncementBar;
    load: boolean;
    error: string;
  };

  infoPopupPublic: {
    data: ItemAnnouncementBar;
    load: boolean;
    error: string;
  };

  getBusinessInfo: {
    data: BusinessesInfoResponse;
    load: boolean;
    error: string;
  };

  getBusinessLogo: {
    data: BusinessesLogoResponse;
    load: boolean;
    error: string;
  };

  promotion: {
    top: boolean;
    popup: boolean;
  };

  seoHomePage: {
    data: MetaDataSeo;
    load: boolean;
    error: string;
  };

  isShowVideoBanner: boolean;
  isHideBannerMedia: boolean;
};
