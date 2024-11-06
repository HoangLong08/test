import { instanceAxios } from '@/config/axios';
import omit from 'lodash/omit';
import { removeNullOrEmptyValues } from '@/utils/removeNullOrEmptyValues';
import { MetaDataSeo } from '@/config/constant';
import {
  BusinessesInfoResponse,
  GetDetailSlideResponse,
  GetSlideResponse,
  ParamGetSlide,
  ParamPostSlide,
  ParamPutSlide,
  PutAnnouncementBar,
  ParamsPutBusinessesInfo,
  ParamPostSlideEvent,
  ParamPutSlideEvent,
} from './business-info.type';

const businessInfo = {
  getSlide(params: ParamGetSlide): Promise<GetSlideResponse> {
    const url = `/businesses/slides/banner?type=${params.type}`;
    return instanceAxios.get(url);
  },

  getSlideByAdmin(params: ParamGetSlide): Promise<GetSlideResponse> {
    const url = `/businesses/slides/banner/by-admin?type=${params.type}`;
    return instanceAxios.get(url);
  },

  getSlideEvent(): Promise<any> {
    const url = `/businesses/slides/banner/v2`;
    return instanceAxios.get(url);
  },

  getSlideEventByAdmin(): Promise<any> {
    const url = `/businesses/slides/banner/v2/by-admin`;
    return instanceAxios.get(url);
  },

  getDetailSlideEventById(id: string): Promise<any> {
    const url = `/businesses/slides/${id}/banner/v2`;
    return instanceAxios.get(url);
  },

  postSlideEvent(params: ParamPostSlideEvent): Promise<any> {
    const url = '/businesses/slides/banner/v2';
    return instanceAxios.post(url, params);
  },

  putSlideEvent(params: ParamPutSlideEvent): Promise<any> {
    const url = `/businesses/slides/${params.id}/banner/v2`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  patchSlideEventIsActiveAdmin(params: { id: string; isActive: boolean }): Promise<any> {
    const url = `/businesses/slides/banner/v2/${params.id}/is-active/${params.isActive}`;
    return instanceAxios.patch(url);
  },

  patchSlideEventReOrderAdmin(params: { activeId: string; activeIndex: number }): Promise<any> {
    const url = `/businesses/slides/banner/v2/${params.activeId}/index/${params.activeIndex}/reorder`;
    return instanceAxios.patch(url);
  },

  deleteSlideEvent(id: string): Promise<any> {
    const url = `/businesses/slides/${id}/banner/v2`;
    return instanceAxios.delete(url);
  },

  getDetailBannerById(id: string): Promise<GetDetailSlideResponse> {
    const url = `/businesses/slides/${id}/banner`;
    return instanceAxios.get(url);
  },

  getAnnouncementBar(type: string): Promise<any> {
    const url = `/promotions/${type}`;
    return instanceAxios.get(url);
  },

  getAnnouncementBarPublic(type: string): Promise<any> {
    const url = `/promotions/${type}/public`;
    return instanceAxios.get(url);
  },

  putAnnouncementBar(params: PutAnnouncementBar): Promise<any> {
    const url = `/promotions/${params.type}`;
    return instanceAxios.put(url, omit(params, 'type'));
  },

  postSlide(params: ParamPostSlide): Promise<ParamPostSlide> {
    const url = '/businesses/slides/banner';
    return instanceAxios.post(url, params);
  },

  getCheckShowVideoSlide(): Promise<any> {
    const url = '/businesses/slides/banner/view-type';
    return instanceAxios.get(url);
  },

  patchIsShowVideBannerAdmin(isVideo: boolean): Promise<any> {
    const url = `/businesses/slides/banner/${isVideo}/is-show-video`;
    return instanceAxios.patch(url);
  },

  patchSlideIsActiveAdmin(params: { id: string; isActive: boolean }): Promise<any> {
    const url = `/businesses/slides/${params.id}/is-active/${params.isActive}`;
    return instanceAxios.patch(url);
  },

  patchSlideReOrderAdmin(params: { activeId: string; activeIndex: number }): Promise<any> {
    const url = `/businesses/slides/${params.activeId}/index/${params.activeIndex}/reorder`;
    return instanceAxios.patch(url);
  },

  putSlide(params: ParamPutSlide): Promise<any> {
    const url = `/businesses/slides/${params.id}/banner`;
    return instanceAxios.put(url, {
      buttonText: {
        vn_VN: params.buttonText.vn_VN,
        en_US: params.buttonText.en_US,
      },
      buttonLink: params.buttonLink,
      images: params.images,
      type: params.type,
    });
  },

  deleteSlide(id: string): Promise<any> {
    const url = `/businesses/slides/${id}/banner`;
    return instanceAxios.delete(url);
  },

  getBusinessInfo(): Promise<BusinessesInfoResponse> {
    const url = `/businesses`;
    return instanceAxios.get(url);
  },

  putBusinessInfo(params: ParamsPutBusinessesInfo): Promise<any> {
    const url = `/businesses`;
    return instanceAxios.put(url, removeNullOrEmptyValues(params));
  },

  getBusinessLogo(): Promise<any> {
    const url = `/businesses/logo`;
    return instanceAxios.get(url);
  },

  getSeoHomePage(): Promise<any> {
    const url = `/businesses/home-page/seo`;
    return instanceAxios.get(url);
  },

  patchSeoHomePage(params: MetaDataSeo): Promise<any> {
    const url = `/businesses/home-page/seo`;
    return instanceAxios.patch(url, params);
  },
};

export default businessInfo;
