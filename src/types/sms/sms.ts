export interface SendSms {
  toPhoneNumber: string;
  fromPhoneNumber: string;
  message: string;
}

export type SmsDetails = {
  name: string;
  phoneNumber?: string;
  email?: string;
  message: string;
}