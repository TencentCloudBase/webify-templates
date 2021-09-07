// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

// 后台 API，这里使用 antd 官方提供的示例服务
const API_ENDPOINT = 'https://proapi.azurewebsites.net'

/** 发送验证码 POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query
    /** 手机号 */
    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>(`${API_ENDPOINT}/api/login/captcha`, {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
