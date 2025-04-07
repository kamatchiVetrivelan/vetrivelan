"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");

interface EmailData {
   Name: string;
comment?:string;
  PhoneNumber: string;
}

 
export async function sendEmail(data: EmailData) {
  try {
    const {
      Name,
      
      PhoneNumber,
      comment,
    } = data;

    const emailResponse = await resend.emails.send({
      from: "manojkumar<onboarding@resend.dev>",
      to: ["manomk9425@gmail.com"],
      subject: "New Form Submission",
      html: `
        <p>New form submission received:</p>
        <ul>cls
        
          <li><strong>  Name:</strong> ${ Name}</li>
                      <li><strong>Phone Number:</strong> ${PhoneNumber}</li>

          <li><strong>Comment:</strong> ${comment}</li>
        </ul>
      `,
    });

    if (!emailResponse) {
      return { success: false, error: "Failed to send email" };
    }

    console.log("Email sent successfully:", emailResponse);
    return {
      success: true,
      message: "Form submitted successfully",
    };
  } catch (error: unknown) {
    console.error("Unexpected error:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    };
  }
}
