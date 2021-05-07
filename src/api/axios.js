import axios from 'axios';

const ins = axios.create({
  baseURL: 'http://open.duyiedu.com',
  params: {
    appkey: 'handsome_Tang_1611558641214',
  },
});

ins.interceptors.request.use((config) => config, (err) => Promise.reject(err));

ins.interceptors.response.use((resp) => resp.data.data);
const api = {
  getLeftNav() {
    return ins.get('/api/meituan/index/nav.json');
  },
};

export default api;
