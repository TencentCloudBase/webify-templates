import { request } from 'umi';
import type { BasicGood, BasicProgress } from './data.d';

export async function queryBasicProfile(): Promise<{
  data: {
    basicProgress: BasicProgress[];
    basicGoods: BasicGood[];
  };
}> {
  return request('https://proapi.azurewebsites.net/api/profile/basic');
}
