import { request } from 'umi';
import type { CurrentUser, ListItemDataType } from './data.d';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('https://proapi.azurewebsites.net/api/currentUserDetail');
}

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('https://proapi.azurewebsites.net/api/fake_list_Detail', {
    params,
  });
}
