import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import omit from 'lodash/omit';
import {
  GetAllGroupFabricResponse,
  GetDetailFabricsResponse,
  GetDetailGroupFabricResponse,
  GetFabricsResponse,
  ParamGetFabricsAdmin,
  ParameterGroupFabricPost,
  ParameterGroupFabricPut,
  ParameterPost,
  ParameterPut,
} from './fabrics.type';

const fabrics = {
  getFabricsForDropDown(): Promise<any> {
    const url = `/fabrics/all-for-dropdown`;
    return instanceAxios.get(url);
  },

  getFabricsByAdmin(params: ParamGetFabricsAdmin): Promise<GetFabricsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/fabrics/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  postFabrics(params: ParameterPost): Promise<GetFabricsResponse> {
    const url = `/fabrics`;
    return instanceAxios.post(url, params);
  },

  getDetailFabricsById(id: string): Promise<GetDetailFabricsResponse> {
    const url = `/fabrics/${id}`;
    return instanceAxios.get(url);
  },

  postExcelImportFabric(params: { file: File }): Promise<any> {
    const url = `/fabrics/import-excel`;
    const formData = new FormData();
    formData.append('files', params.file);
    return instanceAxios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  putFabrics(params: ParameterPut): Promise<GetFabricsResponse> {
    const url = `/fabrics/${params.id}`;
    return instanceAxios.put(url, {
      code: params.code,
      name: {
        vn_VN: params.name.vn_VN,
        en_US: params.name.en_US,
      },
      image: params.image,
      type: params.type,
      colorCode: params.colorCode,
      detail: params.detail,
      groupId: params.groupId,
    });
  },

  deleteFabrics(id: string): Promise<any> {
    const url = `/fabrics/${id}`;
    return instanceAxios.delete(url);
  },

  patchMultiActiveFabrics(params: { isActive: boolean; fabricIds: string[] }): Promise<any> {
    const url = `/fabrics/${params.isActive}/is-active`;
    return instanceAxios.patch(url, {
      fabricIds: params.fabricIds,
    });
  },

  getAllGroupFabric(params: ParameterGet): Promise<GetAllGroupFabricResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/fabrics/groups/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  getDetailGroupFabric(id: string): Promise<GetDetailGroupFabricResponse> {
    const url = `/fabrics/${id}/groups/by-admin`;
    return instanceAxios.get(url);
  },

  postGroupFabric(params: ParameterGroupFabricPost): Promise<GetDetailGroupFabricResponse> {
    const url = `/fabrics/groups`;
    return instanceAxios.post(url, params);
  },

  putGroupFabricStatus(params: ParameterGroupFabricPut): Promise<GetDetailGroupFabricResponse> {
    const url = `/fabrics/${params.id}/groups`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  deleteGroupFabric(id: string): Promise<any> {
    const url = `/fabrics/${id}/groups`;
    return instanceAxios.delete(url);
  },
};

export default fabrics;
