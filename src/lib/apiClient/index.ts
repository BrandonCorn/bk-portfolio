import * as sms from '@/lib/apiClient/messages/sms';
import * as email from '@/lib/apiClient/messages/email';
import * as visitors from '@/lib/apiClient/visitors';
import * as posts from '@/lib/apiClient/posts';
import * as comments from '@/lib/apiClient/comments';
import * as messages from '@/lib/apiClient/messages/api';

const api = {
  sms: {
    ...sms
  },
  email: {
    ...email 
  },
  messages: {
    ...messages
  },
  visitors: {
    ...visitors
  },
  posts: {
    ...posts
  },
  comments: {
    ...comments
  }
}

export const baseUrl = process.env.NODE_ENV !== 'production' ? `http://${process.env.VERCEL_URL}` : `https://${process.env.VERCEL_URL}`;


export default api;