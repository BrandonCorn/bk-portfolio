import { v4 } from 'uuid';
import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '@/types/common/type';
import { CreateSmsRequest, SendSmsRequest } from '@/types/sms/type';
import api from '@/lib/apiClient';
import { Sms as DbSms } from '@prisma/client';

export type Sms = {
  id?: string;
  content: string;
  dateSent?: Date;
  createdAt?: Date;
  visitorId?: string;
}

export type SmsState = {
  sms: Sms[];
  sendSmsRequestLoading: LoadingState | null;
  sendSmsRequestSuccess: any;
  sendSmsRequestFailure: any;
  createSmsRequestLoading: LoadingState | null;
  createSmsRequestSuccess: any;
  createSmsRequestFailure: any;
}

const initialState: SmsState = {
  sms: [],
  sendSmsRequestLoading: null,
  sendSmsRequestSuccess: null,
  sendSmsRequestFailure: null,
  createSmsRequestLoading: null,
  createSmsRequestSuccess: null,
  createSmsRequestFailure: null,
};

export const sendSms = createAsyncThunk('sms/sendSms', 
  async (smsData: SendSmsRequest, thunkApi) => {
    try{
      const response = await api.sms.sendSms(smsData);
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

  const sendSmsBuilders = (builder: ActionReducerMapBuilder<SmsState>) => {
    builder.addCase(sendSms.pending, (state, action) => {
      state.sendSmsRequestLoading = 'loading';
      state.sendSmsRequestFailure = null;
      state.sendSmsRequestSuccess = null;
    });
    builder.addCase(sendSms.fulfilled, (state, action) => {
      let message = action.payload;
      state.sendSmsRequestLoading = 'success';
      state.sendSmsRequestSuccess = action.payload;
      state.sms.push({id: message.sid, content: message.body, dateSent: message.dateCreated})
    });
    builder.addCase(sendSms.rejected, (state, action) => {
      state.sendSmsRequestLoading = 'error';
      state.sendSmsRequestFailure = action.payload;
    });
  }

export const createSms = createAsyncThunk('sms/createSms', 
  async (smsData: CreateSmsRequest, thunkApi) => {
    try{
      const response = await api.sms.createSms(smsData);
      if(response.success){
        return response.data;
      }
      else return thunkApi.rejectWithValue(response);
    }
    catch(err){
      return thunkApi.rejectWithValue(err);
    }
  });

const createSmsBuilders = (builder: ActionReducerMapBuilder<SmsState>) => {
  builder.addCase(createSms.pending, (state, action) => {
    state.createSmsRequestLoading = 'loading';
    state.createSmsRequestFailure = null;
    state.sendSmsRequestSuccess = null;
  });
  builder.addCase(createSms.fulfilled, (state, action) => {
    state.createSmsRequestLoading = 'success';
    state.createSmsRequestSuccess = action.payload;
  });
  builder.addCase(createSms.rejected, (state, action) => {
    state.createSmsRequestLoading = 'error';
    state.createSmsRequestFailure = action.payload;
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

