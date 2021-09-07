import { request } from 'umi';
import type { Params, ListItemDataType } from './data';

export async function queryFakeList(
  params: Params,
): Promise<{ data: { list: ListItemDataType[] } }> {
  return request('https://proapi.azurewebsites.net/api/fake_list', {
    params,
  });
}
