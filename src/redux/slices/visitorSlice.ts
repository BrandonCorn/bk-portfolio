import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 } from 'uuid';
import { Sms } from './smsSlice';


type VisitorState = {
  id?: string;
  name: string;
  phoneNumber?: string
  email?: string;
  visitCount: number;
  lastVisit?: Date;
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
  visitCount: 0,
  lastVisit: undefined,
  sms: []
};

const visitorSlice = createSlice({
  name: 'visitor',
  initialState,
  reducers: {
    createVisitor: (state, action: PayloadAction<Pick<VisitorState, keyof CreateVisitor>>) => {
      const { name, email, phoneNumber } = action.payload;
      state.name = v4();
      state.name = name;
      state.email = email;
      state.phoneNumber = phoneNumber;
      state.visitCount += 1;
      state.lastVisit = new Date(Date.now());
    },
    setVisitor: (state, action: PayloadAction<VisitorState>) => {
      const visitorData = action.payload;
      return {
        ...visitorData, lastVisit: new Date(Date.now()), newVisit: visitorData.visitCount++ 
      }
    },
  },
});

export const { createVisitor, setVisitor } = visitorSlice.actions;

export default visitorSlice.reducer;