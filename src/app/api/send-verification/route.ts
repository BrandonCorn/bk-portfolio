import twilio from 'twilio';
import { NextRequest, NextResponse } from 'next/server';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export type SendVerificationBody = {
    phoneNumber: string;
}

export async function POST(req: NextRequest){
    const data: SendVerificationBody = await req.json();
    const verify = await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_ID || '')
        .verifications
        .create({ to: data.phoneNumber, channel: 'sms' })
        .then(verification => verification);
    return NextResponse.json(verify);
}   
