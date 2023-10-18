import { createSlice, PayloadAction, createAsyncThunk, ActionReducerMapBuilder } from '@reduxjs/toolkit';
import { Sms } from './smsSlice';
import api from '@/lib/apiClient';
import { LoadingState } from '@/types/common/type';
import { CreateVisitorRequest, VisitorsWithSms } from '@/types/visitors/type';
import { updateSmsSent } from "@/redux/slices/smsSlice";
import { MessageInstance } from 'twilio/lib/rest/api/v2010/account/message';


type Visitor = {
  id?: string;
  name: string;
  phoneNumber: string | null;
  email: string | null;
  visitCount: number;
  lastVisit: Date | null;
  sms: Sms[];
}

export type VisitorState = {
  visitor: Visitor
  createVisitorRequestLoading: LoadingState | null,
  createVisitorRequestSuccess: any,
  createVisitorRequestFailure: any,
  getVisitorRequestLoading: LoadingState | null,
  getVisitorRequestSuccess: any,
  getVisitorRequestFailure: any,
}

type CreateVisitor = {
  name: string;
  phoneNumber?: string;
  email?: string;
}


const initialState: VisitorState = {
  visitor: {
    id: '',
    name: '',
    phoneNumber: "",
    email: '',
    visitCount: 0,
    lastVisit: null,
    sms: [],
  },
  createVisitorRequestLoading: null,
  createVisitorRequestSuccess: null,
  createVisitorRequestFailure: null,
  getVisitorRequestLoading: null,
  getVisitorRequestSuccess: null,
  getVisitorRequestFailure: null,
};

export const getVisitorByEmail = createAsyncThunk('visitor/getVisitorByEmail', 
  async (email: {email: string}, thunkApi) => {
    try{
      const response = await api.visitors.getVisitorByEmail(email);
      if(response.success){
        if (!response.data) return response.data;
        let data = response.data;
        thunkApi.dispatch(setVisitor(data));
        thunkApi.dispatch(updateSmsSent(data.sms));
        return data;
      }
      else {
        return thunkApi.rejectWithValue(response.error);
      }
    }
    catch(err){
      return thunkApi.rejectWithValue(err);
    }
  }
)

const getVisitorByEmailBuilders = (builder: ActionReducerMapBuilder<VisitorState>) => {
  builder.addCase(getVisitorByEmail.pending, (state, action) => {
    state.getVisitorRequestLoading = 'loading';
    state.getVisitorRequestFailure = null;
    state.getVisitorRequestSuccess = null;
  })
  builder.addCase(getVisitorByEmail.fulfilled, (state, action) => {
    state.getVisitorRequestLoading = 'success';
    state.getVisitorRequestSuccess = action.payload;
  })
  builder.addCase(getVisitorByEmail.rejected, (state, action) => {
    state.getVisitorRequestLoading = 'error';
    state.getVisitorRequestFailure = action.payload;
  })
}

export const createVisitor = createAsyncThunk('visitor/createVisitor', 
  async (visitor: CreateVisitorRequest, thunkApi) => {
    try{
      const response = await api.visitors.createVisitor(visitor);
      if (response.success) {
        if (!response.data) return response.data;
        thunkApi.dispatch(setVisitor(response.data));
        return response.data;
      }
      else return thunkApi.rejectWithValue(response);
    }
    catch(err){
      return thunkApi.rejectWithValue(err);
    }
});

const createVisitorBuilders = (builder: ActionReducerMapBuilder<VisitorState>) => {
  builder.addCase(createVisitor.pending, (state, action) => {
    state.createVisitorRequestLoading = 'loading';
    state.createVisitorRequestFailure = null;
    state.createVisitorRequestSuccess = null;
  })
  builder.addCase(createVisitor.fulfilled, (state, action) => {
    state.createVisitorRequestLoading = 'success';
    state.createVisitorRequestSuccess = action.payload;
  })
  builder.addCase(createVisitor.rejected, (state, action) => {
    state.createVisitorRequestLoading = 'error';
    state.createVisitorRequestFailure = action.payload;
    return state;
  })
}


const updateVisitor = createAsyncThunk('visitor/updateVisitor', 
  async (visitor, thunkApi) => {
    //add logic to update the visitor
});

const visitorSlice = createSlice({
  name: 'visitor',
  initialState,
  reducers: {
    setVisitor: (state, action) => {
      state.visitor = action.payload;
    },
    updateVisitorSms: (state, action: PayloadAction<MessageInstance & {visitorId: string}>) => {
      let twilioSms = action.payload;
      const message: Sms = {
        id: twilioSms.sid,
        dateSent: twilioSms.dateCreated,
        content: twilioSms.body,
        visitorId: twilioSms.visitorId
      }
      if (!state.visitor.sms) state.visitor.sms = [message];
      else state.visitor.sms = [...state.visitor.sms, message]
    }
  },
  extraReducers: (builder) => {
    getVisitorByEmailBuilders(builder);
    createVisitorBuilders(builder);
  }
});

export const { setVisitor, updateVisitorSms } = visitorSlice.actions;

export default visitorSlice.reducer;