import { instanceAxios } from '@/config/axios';
import { removeNullOrEmptyValues } from '@/utils/removeNullOrEmptyValues';
import omit from 'lodash/omit';
import {
  GetDetailMadeToMeasures,
  ParamMadeToMeasureGuidePopup,
  ParamPutMadeToMeasureForm,
  ParamPutMadeToMeasureGuide,
  ParameterPost,
} from './made-to-measures.type';

const madeToMeasures = {
  postMadeToMeasures(params: ParameterPost): Promise<GetDetailMadeToMeasures> {
    const url = `/made-to-measures`;
    return instanceAxios.post(url, removeNullOrEmptyValues(params));
  },

  getDetailMadeToMeasuresById(id: string): Promise<GetDetailMadeToMeasures> {
    const url = `/made-to-measures/${id}`;
    return instanceAxios.get(url);
  },

  getDetailMadeToMeasuresByOrderId(id: string): Promise<GetDetailMadeToMeasures> {
    const url = `/made-to-measures/${id}/order`;
    return instanceAxios.get(url);
  },

  getMadeToMeasuresForm(): Promise<any> {
    const url = `/made-to-measures/form`;
    return instanceAxios.get(url);
  },

  putMadeToMeasuresForm(params: ParamPutMadeToMeasureForm): Promise<GetDetailMadeToMeasures> {
    const url = `/made-to-measures/form`;
    return instanceAxios.put(url, removeNullOrEmptyValues(omit(params, 'id')));
  },

  deleteMadeToMeasures(id: string): Promise<any> {
    const url = `/made-to-measures/${id}`;
    return instanceAxios.delete(url);
  },

  getMadeToMeasuresGuide(): Promise<any> {
    const url = `/made-to-measures/guide`;
    return instanceAxios.get(url);
  },

  putMadeToMeasuresGuide(params: ParamPutMadeToMeasureGuide): Promise<any> {
    const url = `/made-to-measures/guide`;
    return instanceAxios.put(url, omit(params, 'id'));
  },

  getMadeToMeasuresGuidePopup(): Promise<any> {
    const url = `/made-to-measures/guide/popup`;
    return instanceAxios.get(url);
  },

  putMadeToMeasuresGuidePopup(params: ParamMadeToMeasureGuidePopup): Promise<any> {
    const url = `/made-to-measures/guide/popup`;
    return instanceAxios.put(url, omit(params, 'id'));
  },
};

export default madeToMeasures;
