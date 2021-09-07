import { request } from 'umi';

export async function queryAdvancedProfile() {
  return request('https://proapi.azurewebsites.net/api/profile/advanced');
}
