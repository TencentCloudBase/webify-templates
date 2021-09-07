import { request } from 'umi';
import type { CurrentUser, GeographicItemType } from './data';

export async function queryCurrent(): Promise<{ data: CurrentUser }> {
  return request('https://proapi.azurewebsites.net/api/accountSettingCurrentUser');
}

export async function queryProvince(): Promise<{ data: GeographicItemType[] }> {
  return request('https://proapi.azurewebsites.net/api/geographic/province');
}

export async function queryCity(province: string): Promise<{ data: GeographicItemType[] }> {
  return request(`/api/geographic/city/${province}`);
}

export async function query() {
  return request('https://proapi.azurewebsites.net/api/users');
}
