import { instanceAxios } from '@/config/axios';
import omit from 'lodash/omit';
import { TranslateType } from '../translation/translation.type';

const appMailer = {
  getAppMailer(): Promise<any> {
    const url = `/app-mailers`;
    return instanceAxios.get(url);
  },

  getTemplateContent(params: string): Promise<any> {
    const url = `/app-mailers/${params}`;
    return instanceAxios.get(url);
  },

  putTemplateContent(params: {
    mission: string;
    subject: TranslateType;
    content: TranslateType;
  }): Promise<any> {
    const url = `/app-mailers/${params.mission}`;
    return instanceAxios.put(url, omit(params, 'mission'));
  },

  getVariableAssignsValueTemplateContent(params: { mission: string }): Promise<any> {
    const url = `/app-mailers/template-content/variable-assigns-value?mission=${params.mission}`;
    return instanceAxios.get(url);
  },

  putVariableAssignsValueTemplateContent(params: {
    mission: string;
    description: string | undefined;
    subjectValues: { value: string; description: string }[] | undefined;
    contextValues: { value: string; description: string }[] | undefined;
  }): Promise<any> {
    const url = `/app-mailers/${params.mission}/template-content/variable-assigns-value`;
    return instanceAxios.put(url, omit(params, 'mission'));
  },

  patchMultiEmailTemplateIsActiveAdmin(params: { isActive: boolean; id: string }): Promise<any> {
    const url = `/app-mailers/${params.id}/is-active/${params.isActive}`;
    return instanceAxios.patch(url);
  },

  getSendMailer(params: { languageCode: string }): Promise<any> {
    const url = `app-mailers/language-code/${params.languageCode}/send-newsletter`;
    return instanceAxios.get(url);
  },
};

export default appMailer;
