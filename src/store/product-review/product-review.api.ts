import omit from 'lodash/omit';
import { instanceAxios } from '@/config/axios';
import { cleanAndSerializeQueryParams } from '@/utils/cleanAndSerializeQueryParams';
import { ParameterGet } from '@/config/constant';
import {
  ProductReviewType,
  PatchQuestionOrder,
  PostProductReview,
  ProductReviewTypeAdmin,
} from './product-review.type';

const productReview = {
  getProductReviewByAdmin(params: ParameterGet): Promise<ProductReviewTypeAdmin[]> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `product-reviews/by-admin?${newParams}`;
    return instanceAxios.get(url);
  },

  getProductReview(params: ParameterGet): Promise<ProductReviewType[]> {
    const newParams = cleanAndSerializeQueryParams(params);
    const url = `product-reviews/questions?${newParams}`;
    return instanceAxios.get(url);
  },

  getQuestionsByProductId(productId: string): Promise<ProductReviewType[]> {
    const url = `product-reviews/questions/${productId}/product`;
    return instanceAxios.get(url);
  },

  getProductReviewAll(): Promise<ProductReviewType[]> {
    const url = 'product-reviews/questions/all';
    return instanceAxios.get(url);
  },

  getDetailProductReview(id: string): Promise<ProductReviewType> {
    const url = `product-reviews/${id}/questions`;
    return instanceAxios.get(url);
  },

  getDetailProductReviewByAdmin(id: string): Promise<ProductReviewTypeAdmin> {
    const url = `product-reviews/${id}`;
    return instanceAxios.get(url);
  },

  postProductReviewQuestion(body: PostProductReview): Promise<any> {
    const url = 'product-reviews/questions';
    return instanceAxios.post(url, body);
  },

  postProductReview(body: PostProductReview): Promise<any> {
    const url = 'product-reviews';
    return instanceAxios.post(url, body);
  },

  patchQuestions(params: PatchQuestionOrder): Promise<any> {
    const url = `product-reviews/${params.id}/questions/${params.index}/index`;
    return instanceAxios.patch(url);
  },

  putProductReview(body: ProductReviewType): Promise<any> {
    const url = `/product-reviews/${body.id}/questions`;
    return instanceAxios.put(url, omit(body, 'id'));
  },

  deleteProductReviewQuestion(id: string): Promise<any> {
    const url = `/product-reviews/${id}/questions`;
    return instanceAxios.delete(url);
  },

  deleteProductReview(id: string): Promise<any> {
    const url = `/product-reviews/${id}`;
    return instanceAxios.delete(url);
  },

  patchMultiDeleteFQuestions(ids: string[]): Promise<any> {
    const url = `/product-reviews/multiple-delete`;
    return instanceAxios.patch(url, { faqsIds: ids });
  },
};

export default productReview;
