import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import {
  ParameterPost,
  ParameterPut,
  GetAllContactUsResponse,
  GetDetailContactUsResponse,
  ParameterPatchMultiDelete,
} from './contact-us.type';

const contactUs = {
  getContactUsAll(params: Pick<ParameterGet, 'searchKey'>): Promise<GetAllContactUsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/contact-us?${newParams}`;
    return instanceAxios.get(url);
  },

  getDetailContactUs(id: string): Promise<GetDetailContactUsResponse> {
    const url = `/contact-us/${id}`;
    return instanceAxios.get(url);
  },

  postContactUs(params: ParameterPost): Promise<GetDetailContactUsResponse> {
    const url = `/contact-us`;
    return instanceAxios.post(url, params);
  },

  putContactUsStatus(params: ParameterPut): Promise<GetDetailContactUsResponse> {
    const url = `/contact-us/${params.id}/status/${params.status}`;
    return instanceAxios.put(url);
  },

  patchDeleteMultiContactUs(params: ParameterPatchMultiDelete): Promise<any> {
    const url = `/contact-us/multiple-delete`;
    return instanceAxios.patch(url, params);
  },

  deleteContactUs(id: string): Promise<any> {
    const url = `/contact-us/${id}`;
    return instanceAxios.delete(url);
  },
};

export default contactUs;
