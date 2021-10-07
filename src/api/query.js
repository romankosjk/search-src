import axios from 'axios';
import request from '@/utils/request';

let cancel = null;
const { CancelToken } = axios;
export default function getQuery(params) {
  if (cancel) cancel();
  return request({
    url: '/-/v1/search',
    method: 'get',
    params,
    cancelToken: new CancelToken((c) => {
      cancel = c;
    }),
  });
}
