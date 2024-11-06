import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import omit from 'lodash/omit';
import {
  GetCatalogsGroupAllResponse,
  GetDetailCatalogsMainResponse,
  ParameterPost,
  ParameterPostSub,
  ParameterPut,
  ParameterPutSub,
} from './catalogs.type';

const catalogs = {
  getCatalogsGroupAll(): Promise<GetCatalogsGroupAllResponse> {
    const url = `/catalogs`;
    return instanceAxios.get(url);
  },

  getCatalogsGroupAllByAdmin(
    params: Pick<ParameterGet, 'searchKey'>
  ): Promise<GetCatalogsGroupAllResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/catalogs/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  getDetailCatalogsMain(id: string): Promise<GetDetailCatalogsMainResponse> {
    const url = `/catalogs/${id}`;
    return instanceAxios.get(url);
  },

  patchMultiCatalogMainIsActiveAdmin(params: {
    isActive: boolean;
    catalogIds: string[];
  }): Promise<any> {
    const url = `/catalogs/${params.isActive}/is-active`;
    return instanceAxios.patch(url, {
      catalogIds: params.catalogIds,
    });
  },

  patchMultiCatalogSubIsActiveAdmin(params: {
    isActive: boolean;
    catalogIds: string[];
  }): Promise<any> {
    const url = `/catalogs/${params.isActive}/is-active/detail`;
    return instanceAxios.patch(url, {
      catalogIds: params.catalogIds,
    });
  },

  getDetailCatalogsSub(id: string): Promise<GetDetailCatalogsMainResponse> {
    const url = `/catalogs/${id}/detail`;
    return instanceAxios.get(url);
  },

  postCatalogsMain(params: ParameterPost): Promise<GetDetailCatalogsMainResponse> {
    const url = `/catalogs`;
    return instanceAxios.post(url, params);
  },

  postCatalogsSub(params: ParameterPostSub): Promise<GetDetailCatalogsMainResponse> {
    const url = `/catalogs/detail`;
    return instanceAxios.post(url, params);
  },

  putCatalogsMain(params: ParameterPut): Promise<GetDetailCatalogsMainResponse> {
    const url = `/catalogs/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  putCatalogsSub(params: ParameterPutSub): Promise<GetDetailCatalogsMainResponse> {
    const url = `/catalogs/${params.id}/detail`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  patchCatalogsMainOrderAdmin(params: { activeId: string; activeIndex: number }): Promise<any> {
    const url = `/catalogs/${params.activeId}/index/${params.activeIndex}`;
    return instanceAxios.patch(url);
  },

  patchCatalogsSubOrderAdmin(params: { activeId: string; activeIndex: number }): Promise<any> {
    const url = `/catalogs/${params.activeId}/index/${params.activeIndex}/detail`;
    return instanceAxios.patch(url);
  },

  deleteCatalogsMain(id: string): Promise<any> {
    const url = `/catalogs/${id}`;
    return instanceAxios.delete(url);
  },

  deleteMultipleCatalogsMain(catalogIds: string[]): Promise<any> {
    const url = `/catalogs/multiple-delete`;
    return instanceAxios.patch(url, {
      catalogIds,
    });
  },

  deleteCatalogsSub(id: string): Promise<any> {
    const url = `/catalogs/${id}/detail`;
    return instanceAxios.delete(url);
  },

  deleteMultipleCatalogsSub(catalogIds: string[]): Promise<any> {
    const url = `/catalogs/multiple-delete-detail`;
    return instanceAxios.patch(url, {
      catalogIds,
    });
  },
};

export default catalogs;
