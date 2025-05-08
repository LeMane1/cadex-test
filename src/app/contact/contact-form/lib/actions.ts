'use server'

import sanitizeHtml from "sanitize-html";
import {ContactFormData, ContactSchema} from "@/app/contact/contact-form/lib/schema";

export async function sendContactData(formData: ContactFormData): Promise<string> {
  const sanitizedFormData = {
    userName: sanitizeHtml(formData.userName as string),
    email: sanitizeHtml(formData.email as string),
    message: sanitizeHtml(formData.message as string),
  }
  
  let response:string = ''
  
  const checkFormResult = ContactSchema.safeParse(sanitizedFormData)

  if (checkFormResult.success) {
    response = `Thank you for your interest, ${sanitizedFormData.userName}`
    console.log(response)
  }else{
    response = 'Something went wrong. Please try again.'
    console.error('Failed while checkFormResult in ContactData', checkFormResult.error.format())
  }
  
  return response
}