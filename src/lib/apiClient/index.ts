import * as sms from '@/lib/apiClient/sms';
import * as visitors from '@/lib/apiClient/visitors';

const api = {
  sms: {
    ...sms
  },
  visitors: {
    ...visitors
  }
}


export default api;