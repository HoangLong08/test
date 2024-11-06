import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { GetDetailTagsResponse, GetTagsResponse, ParameterPost, ParameterPut } from './tags.type';

const tags = {
  getTags(): Promise<GetTagsResponse> {
    const url = `/ribbons`;
    return instanceAxios.get(url);
  },

  getTagsByAdmin(params: ParameterGet): Promise<GetTagsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/ribbons/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  postTags(params: ParameterPost): Promise<GetTagsResponse> {
    const url = `/ribbons`;
    return instanceAxios.post(url, params);
  },

  getDetailTagsById(id: string): Promise<GetDetailTagsResponse> {
    const url = `/ribbons/${id}`;
    return instanceAxios.get(url);
  },

  putTags(params: ParameterPut): Promise<GetTagsResponse> {
    const url = `/ribbons/${params.id}`;
    return instanceAxios.put(url, {
      code: params.code,
      name: {
        vn_VN: params.name.vn_VN,
        en_US: params.name.en_US,
      },
      color: params?.color,
      background: params?.background,
    });
  },

  deleteTags(id: string): Promise<any> {
    const url = `/ribbons/${id}`;
    return instanceAxios.delete(url);
  },

  patchMultiActiveRibbons(params: { isActive: boolean; ids: string[] }): Promise<any> {
    const url = `/ribbons/${params.isActive}/is-active`;
    return instanceAxios.patch(url, { ribbonIds: params.ids });
  },
};

export default tags;
