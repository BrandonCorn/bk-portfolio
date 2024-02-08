import * as sms from '@/lib/apiClient/sms';
import * as visitors from '@/lib/apiClient/visitors';
import * as posts from '@/lib/apiClient/posts';

const api = {
  sms: {
    ...sms
  },
  visitors: {
    ...visitors
  },
  posts: {
    ...posts
  }
}

export const baseUrl = process.env.NODE_ENV !== 'production' ? `http://${process.env.VERCEL_URL}` : `https://${process.env.VERCEL_URL}`;


export default api;