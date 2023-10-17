import { v4 } from 'uuid';
import { ActionReducerMapBuilder, createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoadingState } from '@/types/common/type';
import { CreateSmsRequest, SendSmsRequest } from '@/types/sms/type';
import api from '@/lib/apiClient';

export type Sms = {
  id?: string;
  content: string;
  dateSent?: Date;
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
      console.log('what is wrong with response ', response);
      if(response.success){
        const message = response.data;
        thunkApi.dispatch(updateSmsSent({ id: message.sid, content: message.body, dateSent: message.dateSent}));
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
      state.sendSmsRequestLoading = 'success';
      state.sendSmsRequestSuccess = action.payload;
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
        if (!response.data) return thunkApi.rejectWithValue(false);
        const message = response.data;
        return message;
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
    updateSmsSent: (state, action: PayloadAction<Sms>) => {
      const { id, content, dateSent } = action.payload;
      state.sms?.push({ id, content, dateSent });
    }
  },
  extraReducers: (builder) => {
    sendSmsBuilders(builder);
    createSmsBuilders(builder);
  }
});

export const { updateSmsSent } = smsSlice.actions;

export default smsSlice.reducer;

