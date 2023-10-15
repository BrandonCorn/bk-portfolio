import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Sms = {
  content: string;
}

type VisitorState = {
  id?: string;
  name: string;
  phoneNumber?: string
  email?: string;
  numVisits: number;
  hasSentSms: boolean;
  smsSentCount: number;
  sms?: Sms[]
}

type CreateVisitor = {
  name: string;
  phoneNumber?: string;
  email?: string;
}


const initialState: VisitorState = {
  id: '',
  name: '',
  phoneNumber: "",
  email: '',
  numVisits: 0,
  hasSentSms: false,
  smsSentCount: 0,
  sms: [],
};

const visitorSlice = createSlice({
  name: 'visitor',
  initialState,
  reducers: {
    createVisitor: (state, action: PayloadAction<Pick<VisitorState, keyof CreateVisitor>>) => {
      const { name, email, phoneNumber } = action.payload;
      state.name = name;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.numVisits += 1;
    },
    newVisit: (state, action) => {
      state.numVisits++;
    },
    updateSmsSent: (state, action: PayloadAction<Sms>) => {
      if(!state.hasSentSms) state.hasSentSms = true;
      state.smsSentCount++;
      state.sms?.push({ ...action.payload});
    }
  },
});

export const { createVisitor, newVisit, updateSmsSent } = visitorSlice.actions;

export default visitorSlice.reducer;