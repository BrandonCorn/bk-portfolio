import sgMail from '@sendgrid/mail';
import { BadRequestError } from '@/lib/errors/bad-request-error';
import { SendMessage } from '@/types/email/type';

export const sendEmail = async (messageInfo: SendMessage) => {
  const { email, phone, message } = messageInfo;
  // @ts-ignorets-ignore
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  const msg = {
    to: process.env.SENDGRID_TO_EMAIL || '',
    from: process.env.SENDGRID_FROM_EMAIL || '',
    subject: `You have a new message from ${email || phone}`,
    text: message
  }
  try{
    return sgMail.send(msg)
  }
  catch(error){
    console.log('error sending twilio sms', error);
    throw new BadRequestError('Error sending sms');
  }
}

