import axios, { AxiosError } from 'axios';
import {
  ParamDeleteUploadImage,
  ParamDeleteUploadVideo,
  ParamPostUploadImage,
  ParamPostUploadImages,
  ParamPostUploadVideo,
} from './upload.type';

const baseURL = 'https://media.yalycouture.com/api/uploads/';
const { NEXT_PUBLIC_PACKAGE_NAME_FOLDER_UPLOAD } = process.env;

export const customizeAxios = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

customizeAxios.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }
    return response;
  },
  (error: AxiosError) => Promise.reject(error)
);

const upload = {
  postUploadImage({ key, file }: ParamPostUploadImage): Promise<any> {
    const url = 'single-image';
    const formData = new FormData();
    formData.append('files', file);
    return customizeAxios.post(
      `bucket/${
        NEXT_PUBLIC_PACKAGE_NAME_FOLDER_UPLOAD ||
        process.env.NEXT_PUBLIC_PACKAGE_NAME_FOLDER_UPLOAD ||
        'yaly_couture'
      }/${url}?key=${key}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  },

  postUploadImages({ key, files }: ParamPostUploadImages): Promise<any> {
    const url = 'multiple-images';
    const formData = new FormData();
    files.forEach((file: any) => {
      formData.append('files', file.originFileObj);
    });
    return customizeAxios.post(
      `bucket/${
        NEXT_PUBLIC_PACKAGE_NAME_FOLDER_UPLOAD ||
        process.env.NEXT_PUBLIC_PACKAGE_NAME_FOLDER_UPLOAD ||
        'yaly_couture'
      }/${url}?key=${key}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  },

  deleteUploadImage({ key, id }: ParamDeleteUploadImage): Promise<any> {
    return customizeAxios.delete(`?key=${key}&url=${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  //
  postUploadVideo({ key, file }: ParamPostUploadVideo): Promise<any> {
    const url = 'single-video';
    const formData = new FormData();
    formData.append('files', file);
    return customizeAxios.post(
      `bucket/${
        NEXT_PUBLIC_PACKAGE_NAME_FOLDER_UPLOAD ||
        process.env.NEXT_PUBLIC_PACKAGE_NAME_FOLDER_UPLOAD ||
        'yaly_couture'
      }/${url}?key=${key}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  },

  deleteUploadVideo({ key, id }: ParamDeleteUploadVideo): Promise<any> {
    const url = 'assets';
    return customizeAxios.delete(`${url}?key=${key}&url=${id}`, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },

  postUploadFile({ key, file }: ParamPostUploadVideo): Promise<any> {
    const url = 'single-file';
    const formData = new FormData();
    formData.append('files', file);
    return customizeAxios.post(
      `bucket/${
        NEXT_PUBLIC_PACKAGE_NAME_FOLDER_UPLOAD ||
        process.env.NEXT_PUBLIC_PACKAGE_NAME_FOLDER_UPLOAD ||
        'yaly_couture'
      }/${url}?key=${key}`,
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }
    );
  },

  // upload thông tin hình ảnh sản phẩm
  postExcelImportImageProduct({ key, file }: ParamPostUploadVideo): Promise<any> {
    const url = `products/zip-file`;
    const formData = new FormData();
    formData.append('files', file);
    return customizeAxios.post(`${url}?key=${key}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  },
};

export default upload;
