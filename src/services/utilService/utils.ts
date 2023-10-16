import { SmsDetails } from "@/types/sms/type"

export function formatSms(smsInfo: SmsDetails){
  return `You have a new message from ${smsInfo.name} @ ${smsInfo.email || smsInfo.phoneNumber}\n\n${smsInfo.message}`
}