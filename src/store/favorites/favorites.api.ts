import { instanceAxios } from '@/config/axios';
import { ParameterGet } from '@/config/constant';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import {
  ParamSearchFavorites,
  ProductFavorite,
  GetListProductFavoriteResponse,
  ProductFavoriteUser,
} from './favorites.type';

const favorites = {
  getProductFavorites(params: ParameterGet): Promise<ProductFavoriteUser[]> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/favorites/me?${newParams}`;
    return instanceAxios.get(url);
  },

  getFavoritesByAdmin(params: ParamSearchFavorites): Promise<GetListProductFavoriteResponse[]> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `/favorites/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  postFavorites(productId: string): Promise<ProductFavorite> {
    const url = `/favorites/${productId}/product`;
    return instanceAxios.patch(url);
  },

  getDetailFavoritesById(id: string): Promise<ProductFavorite> {
    const url = `/favorites/${id}`;
    return instanceAxios.get(url);
  },

  getIdsFavoritesOnlyMe(): Promise<string[]> {
    const url = `/favorites/me/only-product-id`;
    return instanceAxios.get(url);
  },

  deleteFavorites(id: string): Promise<ProductFavorite> {
    const url = `/favorites/${id}`;
    return instanceAxios.delete(url);
  },
};

export default favorites;
