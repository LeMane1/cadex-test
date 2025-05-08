import {z, ZodString} from "zod";

const userNameField: ZodString = z.string().min(4, "Min 4 characters")
const emailField: ZodString = z.string().email("Incorrect email")
const messageField: ZodString = z.string().max(1000, "Мax 1000 characters")

export const ContactSchema = z.object({
  userName: userNameField,
  email: emailField,
  message: messageField,
});

export type ContactFormData = z.infer<typeof ContactSchema>;