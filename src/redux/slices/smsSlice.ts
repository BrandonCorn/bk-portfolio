import { v4 } from 'uuid';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type Sms = {
  id?: string;
  content: string;
  dateSent?: Date;
}

export type SmsState = {
  sms: Sms[];
}

const initialState: SmsState = {
  sms: [],
};


const smsSlice = createSlice({
  name: 'sms',
  initialState,
  reducers: {
    updateSmsSent: (state, action: PayloadAction<Sms>) => {
      const { id, content, dateSent } = action.payload;
      state.sms?.push({ id, content, dateSent });
    }
  },
});

