import { request } from 'umi';

export async function fakeSubmitForm(params: any) {
  return request('https://proapi.azurewebsites.net/api/advancedForm', {
    method: 'POST',
    data: params,
  });
}
