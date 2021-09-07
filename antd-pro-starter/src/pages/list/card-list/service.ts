import { request } from 'umi';
import type { CardListItemDataType } from './data.d';

export async function queryFakeList(params: {
  count: number;
}): Promise<{ data: { list: CardListItemDataType[] } }> {
  return request('https://proapi.azurewebsites.net/api/card_fake_list', {
    params,
  });
}
