import { instanceAxios } from '@/config/axios';
import { ParameterReOrder } from '@/config/constant';
import omit from 'lodash/omit';
import { ParamPostLink, ParamPutLink } from './social-links.type';

const baseUrl = '/social-links';

const links = {
  postLinks(params: ParamPostLink): Promise<any> {
    return instanceAxios.post(baseUrl, params);
  },
  putLinks(params: ParamPutLink): Promise<any> {
    const url = `${baseUrl}/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },
  getLinks(): Promise<any> {
    return instanceAxios.get(baseUrl);
  },
  getDetailLinks(id: string): Promise<any> {
    const url = `${baseUrl}/${id}`;
    return instanceAxios.get(url);
  },
  deleteLinks(id: string): Promise<any> {
    const url = `${baseUrl}/${id}`;
    return instanceAxios.delete(url);
  },
  patchLinkReOrder(params: ParameterReOrder): Promise<any> {
    return instanceAxios.patch(`${baseUrl}/${params.id}/index/${params.index}/reorder`);
  },
};

export default links;
