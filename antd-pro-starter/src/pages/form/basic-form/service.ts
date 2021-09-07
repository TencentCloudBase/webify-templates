import { request } from 'umi';

export async function fakeSubmitForm(params: any) {
  return request('https://proapi.azurewebsites.net/api/basicForm', {
    method: 'POST',
    data: params,
  });
}
