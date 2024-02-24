import { v4 } from 'uuid';
import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '@/types/common/type';
import { CreateSmsRequest } from '@/types/sms/type';
import api from '@/lib/apiClient';
import { Sms as DbSms } from '@prisma/client';
import { SendMessageRequest } from '@/types/email/type';

export type Message = {
  id?: string;
  content: string;
  dateSent?: Date;
  createdAt?: Date;
  visitorId?: string;
}

export type MessageState = {
  sms: Message[];
  sendMessageRequestLoading: LoadingState | null;
  sendMessageRequestSuccess: any;
  sendMessageRequestFailure: any;
  createMessageRequestLoading: LoadingState | null;
  createMessageRequestSuccess: any;
  createMessageRequestFailure: any;
}

const initialState: MessageState = {
  sms: [],
  sendMessageRequestLoading: null,
  sendMessageRequestSuccess: null,
  sendMessageRequestFailure: null,
  createMessageRequestLoading: null,
  createMessageRequestSuccess: null,
  createMessageRequestFailure: null,
};

export const sendMessage = createAsyncThunk('email/send-email', 
  async (msgData: SendMessageRequest, thunkApi) => {
    try{
      const response = await api.email.sendEmail(msgData);
      if(response.success){
        const message = response.data;
        return message;
      }
      else return thunkApi.rejectWithValue(response);
    }
    catch(err){
      return thunkApi.rejectWithValue(err);
    }
  })

  const sendSmsBuilders = (builder: ActionReducerMapBuilder<MessageState>) => {
    builder.addCase(sendMessage.pending, (state, action) => {
      state.sendMessageRequestLoading = 'loading';
      state.sendMessageRequestFailure = null;
      state.sendMessageRequestSuccess = null;
    });
    builder.addCase(sendMessage.fulfilled, (state, action) => {
      let message = action.payload;
      state.sendMessageRequestLoading = 'success';
      state.sendMessageRequestSuccess = action.payload;
      // state.sms.push({id: message.sid, content: message.body, dateSent: message.headers.date})
    });
    builder.addCase(sendMessage.rejected, (state, action) => {
      state.sendMessageRequestLoading = 'error';
      state.sendMessageRequestFailure = action.payload;
    });
  }

export const createMessage = createAsyncThunk('sms/createMessage', 
  async (msgData: CreateSmsRequest, thunkApi) => {
    try{
      const response = await api.sms.createSms(msgData);
      if(response.success){
        return response.data;
      }
      else return thunkApi.rejectWithValue(response);
    }
    catch(err){
      return thunkApi.rejectWithValue(err);
    }
  });

const createSmsBuilders = (builder: ActionReducerMapBuilder<MessageState>) => {
  builder.addCase(createMessage.pending, (state, action) => {
    state.createMessageRequestLoading = 'loading';
    state.createMessageRequestFailure = null;
    state.sendMessageRequestSuccess = null;
  });
  builder.addCase(createMessage.fulfilled, (state, action) => {
    state.createMessageRequestLoading = 'success';
    state.createMessageRequestSuccess = action.payload;
  });
  builder.addCase(createMessage.rejected, (state, action) => {
    state.createMessageRequestLoading = 'error';
    state.createMessageRequestFailure = action.payload;
  });  
}

const smsSlice = createSlice({
  name: 'sms',
  initialState,
  reducers: {
    updateSmsSent: (state, action: PayloadAction<DbSms[]>) => {
      state.sms = [...state.sms, ...action.payload];
    }
  },
  extraReducers: (builder) => {
    sendSmsBuilders(builder);
    createSmsBuilders(builder);
  }
});

export const { updateSmsSent } = smsSlice.actions;

export default smsSlice.reducer;

