import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import omit from 'lodash/omit';
import {
  GetDetailFaqsResponse,
  GetFaqsResponse,
  ParameterPost,
  ParameterPostFaqsGroup,
  ParameterPut,
  FaqsGroupResponse,
  GetFaqsGroupResponse,
  ParameterPutFaqsGroup,
} from './faqs.type';

const faqs = {
  getFaqs(params: ParameterGet): Promise<GetFaqsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/faqs?${newParams}`;
    return instanceAxios.get(url);
  },

  getFaqsByAdmin(params: ParameterGet): Promise<GetFaqsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/faqs/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  postFaqs(params: ParameterPost): Promise<GetFaqsResponse> {
    const url = `/faqs`;
    return instanceAxios.post(url, params);
  },

  getDetailFaqsById(id: string): Promise<GetDetailFaqsResponse> {
    const url = `/faqs/${id}`;
    return instanceAxios.get(url);
  },

  putFaqs(params: ParameterPut): Promise<GetFaqsResponse> {
    const url = `/faqs/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  deleteFaqs(id: string): Promise<any> {
    const url = `/faqs/${id}`;
    return instanceAxios.delete(url);
  },

  patchMultiDeleteFaqs(ids: string[]): Promise<any> {
    const url = `/faqs/multiple-delete`;
    return instanceAxios.patch(url, { faqsIds: ids });
  },

  patchReorderFaqs(params: { id: string; index: number }): Promise<any> {
    const url = `/faqs/${params.id}/index/${params.index}/reorder`;
    return instanceAxios.patch(url);
  },

  postGroupFaqs(body: ParameterPostFaqsGroup): Promise<FaqsGroupResponse> {
    const url = `/faqs-groups`;
    return instanceAxios.post(url, body);
  },

  getGroupFaqs(params: ParameterGet): Promise<GetFaqsGroupResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/faqs-groups?${newParams}`;
    return instanceAxios.get(url);
  },

  getGroupFaqsByAdmin(params: ParameterGet): Promise<GetFaqsGroupResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/faqs-groups/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  getDetailGroupFaqs(params: ParameterGet): Promise<GetFaqsGroupResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/faqs-groups/detail?${newParams}`;
    return instanceAxios.get(url);
  },

  getDetailGroupFaqsById(id: string): Promise<FaqsGroupResponse> {
    const url = `/faqs-groups/${id}`;
    return instanceAxios.get(url);
  },

  putGroupFaqs(body: ParameterPutFaqsGroup): Promise<FaqsGroupResponse> {
    const url = `/faqs-groups/${body.id}`;
    return instanceAxios.put(url, {
      title: body.title,
    });
  },

  deleteGroupFaqs(id: string): Promise<FaqsGroupResponse> {
    const url = `/faqs-groups/${id}`;
    return instanceAxios.delete(url);
  },

  patchMultiDeleteGroupFaqs(faqsGroupIds: string[]): Promise<any> {
    const url = `/faqs-groups/multiple-delete`;
    return instanceAxios.patch(url, { faqsGroupIds });
  },

  patchReorderGroupFaqs(params: { id: string; index: number }): Promise<any> {
    const url = `/faqs-groups/${params.id}/index/${params.index}/reorder`;
    return instanceAxios.patch(url);
  },
};

export default faqs;
