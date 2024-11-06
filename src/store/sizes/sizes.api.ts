import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import omit from 'lodash/omit';
import {
  GetDetailSizesResponse,
  GetSizesResponse,
  ParameterPost,
  ParameterPostSizeGuide,
  ParameterPut,
  ParameterPutSizeGuide,
} from './sizes.type';

const sizes = {
  getSizes(params: Pick<ParameterGet, 'searchKey'>): Promise<GetSizesResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/sizes?${newParams}`;
    return instanceAxios.get(url);
  },

  getSizesByAdmin(params: Pick<ParameterGet, 'searchKey'>): Promise<GetSizesResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/sizes/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  postSizes(params: ParameterPost): Promise<GetSizesResponse> {
    const url = `/sizes`;
    return instanceAxios.post(url, params);
  },

  getDetailSizesById(id: string): Promise<GetDetailSizesResponse> {
    const url = `/sizes/${id}`;
    return instanceAxios.get(url);
  },

  putSizes(params: ParameterPut): Promise<GetSizesResponse> {
    const url = `/sizes/${params.id}`;
    return instanceAxios.put(url, {
      name: params.name,
    });
  },

  deleteSizes(id: string): Promise<any> {
    const url = `/sizes/${id}`;
    return instanceAxios.delete(url);
  },

  patchMultiActiveSize(params: { isActive: boolean; ids: string[] }): Promise<any> {
    const url = `/sizes/${params.isActive}/is-active`;
    return instanceAxios.patch(url, {
      sizeIds: params.ids,
    });
  },

  getSizesGuide(params: ParameterGet): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/size-guides?${newParams}`;
    return instanceAxios.get(url);
  },

  getSizesGuideByAdmin(params: ParameterGet): Promise<any> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/size-guides/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  postSizesGuide(params: ParameterPostSizeGuide): Promise<any> {
    const url = `/size-guides`;
    return instanceAxios.post(url, params);
  },

  getDetailSizesGuideById(id: string): Promise<any> {
    const url = `/size-guides/${id}`;
    return instanceAxios.get(url);
  },

  putSizesGuide(params: ParameterPutSizeGuide): Promise<any> {
    const url = `/size-guides/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  deleteSizesGuide(id: string): Promise<any> {
    const url = `/size-guides/${id}`;
    return instanceAxios.delete(url);
  },

  patchSizeGuideReOrder(params: { activeId: string; activeIndex: number }): Promise<any> {
    const url = `/size-guides/${params.activeId}/index/${params.activeIndex}/reorder`;
    return instanceAxios.patch(url);
  },
};

export default sizes;
