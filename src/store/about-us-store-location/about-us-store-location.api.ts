import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import omit from 'lodash/omit';
import {
  GetDetailAboutUsResponse,
  GetAboutUsResponse,
  ParameterPost,
  ParameterPut,
  ParameterPostExtends,
  StoreLocationType,
  ParameterPostNews,
  ParameterPutExtends,
  ParameterPutNews,
} from './about-us-store-location.type';

const aboutUsStoreLocation = {
  getAboutUs(params: ParameterGet): Promise<GetAboutUsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/about-us?${newParams}`;
    return instanceAxios.get(url);
  },

  postAboutUs(params: ParameterPost): Promise<GetAboutUsResponse> {
    const url = `/about-us`;
    return instanceAxios.post(url, params);
  },

  patchAboutUsReOrderAdmin(params: { activeId: string; activeIndex: number }): Promise<any> {
    const url = `/about-us/${params.activeId}/index/${params.activeIndex}/reorder`;
    return instanceAxios.patch(url);
  },

  getDetailAboutUsById(id: string): Promise<GetDetailAboutUsResponse> {
    const url = `/about-us/${id}`;
    return instanceAxios.get(url);
  },

  getInfoAboutUsShowAtHome(): Promise<GetDetailAboutUsResponse> {
    const url = `/about-us/show-at-home`;
    return instanceAxios.get(url);
  },

  putAboutUs(params: ParameterPut): Promise<any> {
    const url = `/about-us/${params.id}`;
    return instanceAxios.put(url, omit(params, ['id', 'extends']));
  },

  deleteAboutUs(id: string): Promise<any> {
    const url = `/about-us/${id}`;
    return instanceAxios.delete(url);
  },

  deleteAboutUsAll(params: { aboutUsIds: string[] }): Promise<any> {
    const url = `/about-us/multiple-delete`;
    return instanceAxios.patch(url, params);
  },

  patchIsShowAtHome(params: { id: string }): Promise<any> {
    const url = `/about-us/${params.id}/is-show-at-home`;
    return instanceAxios.patch(url);
  },

  postAboutUsExtends(params: ParameterPostExtends): Promise<any> {
    const url = `/about-us/extends`;
    return instanceAxios.post(url, params);
  },

  getDetailAboutUsExtendsById(id: string): Promise<any> {
    const url = `/about-us/extends/${id}`;
    return instanceAxios.get(url);
  },

  putAboutUsExtends(params: ParameterPutExtends): Promise<any> {
    const url = `/about-us/extends/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  deleteAboutUsExtends(id: string): Promise<any> {
    const url = `/about-us/extends/${id}`;
    return instanceAxios.delete(url);
  },

  patchIsShowAtFooterAboutUs(params: { id: string; isShowAtFooter: boolean }): Promise<any> {
    const url = `/about-us/${params.id}/is-show-at-footer/${params.isShowAtFooter}`;
    return instanceAxios.patch(url);
  },

  getListAboutUsByGetMeasuredForAll(): Promise<any> {
    const url = `/about-us/show-at-get-measured`;
    return instanceAxios.get(url);
  },

  patchIsShowAtGetMeasured(params: { id: string; isShowAtGetMeasure: boolean }): Promise<any> {
    const url = `/about-us/${params.id}/is-show-at-get-measure/${params.isShowAtGetMeasure}`;
    return instanceAxios.patch(url);
  },

  getStoreLocationByAdmin(params: ParameterGet): Promise<StoreLocationType[]> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/businesses/store-location/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  getStoreLocation(): Promise<StoreLocationType[]> {
    const url = '/businesses/store-location';
    return instanceAxios.get(url);
  },

  getDetailStoreLocation(id: string): Promise<StoreLocationType> {
    const url = `/businesses/${id}/store-location`;
    return instanceAxios.get(url);
  },

  postStoreLocation(body: StoreLocationType): Promise<any> {
    const url = '/businesses/store-location';
    return instanceAxios.post(url, {
      ...body,
      address: {
        vn_VN: body.address?.vi,
        en_US: body.address?.en,
      },
    });
  },

  putStoreLocation(body: StoreLocationType): Promise<any> {
    const url = `/businesses/${body.id}/store-location`;
    return instanceAxios.put(
      url,
      omit(
        {
          ...body,
          address: {
            vn_VN: body.address?.vi,
            en_US: body.address?.en,
          },
        },
        'id'
      )
    );
  },

  deleteStoreLocation(id: string): Promise<any> {
    const url = `/businesses/${id}/store-location`;
    return instanceAxios.delete(url);
  },

  getNews(params: ParameterGet): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/news-and-presses?${newParams}`;
    return instanceAxios.get(url);
  },

  getDetailNewsById(id: string): Promise<any> {
    const url = `/news-and-presses/${id}`;
    return instanceAxios.get(url);
  },

  getNewsByAdmin(params: ParameterGet): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/news-and-presses/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  getDetailNewsByIdAdmin(id: string): Promise<any> {
    const url = `/news-and-presses/${id}/by-admin`;
    return instanceAxios.get(url);
  },

  postNewsByAdmin(params: ParameterPostNews): Promise<any> {
    const url = '/news-and-presses';
    return instanceAxios.post(url, params);
  },

  putNewsByAdmin(params: ParameterPutNews): Promise<any> {
    const url = `/news-and-presses/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  deleteNewsByAdmin(id: string): Promise<any> {
    const url = `/news-and-presses/${id}`;
    return instanceAxios.delete(url);
  },

  putMultiDeleteNews(ids: string[]): Promise<any> {
    const url = `/news-and-presses/multiple/delete`;
    return instanceAxios.put(url, {
      newsAndPressIds: ids,
    });
  },

  patchIsShowAtFooterNews(params: { id: string; isShowAtFooter: boolean }): Promise<any> {
    const url = `/news-and-presses/${params.id}/is-show-at-footer/${params.isShowAtFooter}`;
    return instanceAxios.patch(url);
  },

  patchMultiNewsIsActive(params: { isActive: boolean; newsAndPressIds: string[] }): Promise<any> {
    const url = `/news-and-presses/${params.isActive}/is-active`;
    return instanceAxios.patch(url, {
      newsAndPressIds: params.newsAndPressIds,
    });
  },
};

export default aboutUsStoreLocation;
