import twilio from 'twilio';
import { NextRequest, NextResponse } from 'next/server';

const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export type CheckVerificationBody = {
    phoneNumber: string;
    code: string;
}

export async function POST(req: NextRequest){
    const data: CheckVerificationBody = await req.json();
    return await client.verify.v2.services(process.env.TWILIO_VERIFY_SERVICE_ID || '')
        .verificationChecks
        .create({ to: data.phoneNumber, code: data.code })
        .then(response => {
            if (response.status === 'approved'){
                return NextResponse.json({ tokenStatus: response.status})
            }
            else{        
                return NextResponse.json( { tokenStatus: 'Invalid token, please try again'}, { status: 401 })
            } 
        })
}