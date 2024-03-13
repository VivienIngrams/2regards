import { NextResponse, NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();

    const email = formData.get("email");

    const AUDIENCE_ID = process.env.MAILCHIMP_AUDIENCE_ID;
    const API_KEY = process.env.MAILCHIMP_API_KEY;
    const DATACENTER = process.env.MAILCHIMP_API_SERVER;
    const data = {
      email_address: email,
      status: "subscribed",
    };
    console.log(AUDIENCE_ID, API_KEY, DATACENTER, email, data);

    const response = await fetch(
        `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${AUDIENCE_ID}/members`,
        {
            body: JSON.stringify(data),
            // headers: {
            //     Authorization: `apikey ${API_KEY}`,
            //     'Content-Type': 'application/json',
            // },
            headers: {
                Accept: "application/json",
                'Content-Type': "application/json",
                Authorization: `Basic ${API_KEY}`
              },
            method: 'POST',
        }
    );

    return NextResponse.json({ message: "Success: email was sent" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
