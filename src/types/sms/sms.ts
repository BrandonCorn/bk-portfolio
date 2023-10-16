//ROUTES
export type SendSmsDataRoute = {
  name: string;
  email: string
  phoneNumber?: string;
  message: string;
}




//SERVICES

//TWILIO SMS SERVICE TO SENT AN SMS
export interface SendSms {
  toPhoneNumber: string;
  fromPhoneNumber: string;
  message: string;
}

//UTIL SERVICE FOR FORMATTING SMS MESSAGE
export type SmsDetails = {
  name: string;
  phoneNumber?: string;
  email?: string;
  message: string;
}