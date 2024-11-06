import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { removeNullOrEmptyValues } from '@/utils/removeNullOrEmptyValues';
import omit from 'lodash/omit';
import {
  BodyFilterGroupSearch,
  BodyFilterSearch,
  GetDetailProductsResponse,
  GetProductsByGroupCatalogResponse,
  GetProductsResponse,
  ParamGetProductAdmin,
  ParameterPost,
  ParameterPostProductSoLike,
  ParameterPut,
  PatchMultiDeleteProduct,
} from './products.type';

const products = {
  getProducts(params: ParameterGet): Promise<GetProductsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/products?${newParams}`;
    return instanceAxios.get(url);
  },

  getProductsByAdmin(params: ParamGetProductAdmin): Promise<GetProductsResponse> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/products/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  getProductsAllForDropdownByAdmin(): Promise<GetProductsResponse> {
    const url = `/products/all-for-dropdown`;
    return instanceAxios.get(url);
  },

  getProductAtHomePage(catalogId: string): Promise<GetProductsResponse> {
    const url = `/products/${catalogId}/catalog/home`;
    return instanceAxios.get(url);
  },

  postProducts(params: ParameterPost): Promise<GetProductsResponse> {
    const url = `/products`;
    return instanceAxios.post(url, params);
  },

  getDetailProductsById(id: string): Promise<GetDetailProductsResponse> {
    const url = `/products/${id}`;
    return instanceAxios.get(url);
  },

  getDetailProductsByIdAdmin(id: string): Promise<GetDetailProductsResponse> {
    const url = `/products/${id}/by-admin`;
    return instanceAxios.get(url);
  },

  putProducts(params: ParameterPut): Promise<GetProductsResponse> {
    const url = `/products/${params.id}`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  deleteProducts(id: string): Promise<any> {
    const url = `/products/${id}`;
    return instanceAxios.delete(url);
  },

  getProductMixAndMatch(id: string): Promise<any> {
    const url = `/products/${id}/mix-and-match`;
    return instanceAxios.get(url);
  },

  getProductAlsoLike(params: ParameterPostProductSoLike): Promise<any> {
    const url = `/products/${params.id}/you-may-also-like`;
    return instanceAxios.post(url, omit(params, 'id'));
  },

  patchMultiActiveProduct(params: PatchMultiDeleteProduct): Promise<any> {
    const url = `/products/${params.isActive}/is-active`;
    return instanceAxios.patch(url, omit(params, 'isActive'));
  },

  postExcelImportProduct(params: { file: File }): Promise<any> {
    const url = `/products/import-excel`;
    const formData = new FormData();
    formData.append('files', params.file);
    return instanceAxios.post(url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  postS3ServiceImageProduct(params: { sourceFolder: string }): Promise<any> {
    const url = `/products/s3-service/source-folder`;
    return instanceAxios.post(url, params);
  },

  getListS3Tracking(params: { type: string }): Promise<any> {
    const url = `/s3-upload-trackings/${params.type}`;
    return instanceAxios.get(url);
  },

  // search sản phẩm
  postFilterProducts(params: BodyFilterSearch): Promise<GetProductsResponse> {
    const url = `/products/all-products`;
    return instanceAxios.post(url, removeNullOrEmptyValues(params));
  },

  // search sản phẩm group theo catalogs
  postFilterProductsByCatalog(
    params: BodyFilterGroupSearch
  ): Promise<GetProductsByGroupCatalogResponse> {
    const url = `/products/all-products/group-by-catalog`;
    return instanceAxios.post(url, params);
  },

  getProductByAllCatalogs(): Promise<any> {
    const url = `/products/all-catalog/home`;
    return instanceAxios.get(url);
  },
};

export default products;
