'use client'

import {Box, Button, FormControl, Stack, TextField, Typography} from "@mui/material";
import {ContactSchema, ContactFormData} from "@/app/contact/contact-form/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {sendContactData} from "@/app/contact/contact-form/lib/actions";

interface IContactFormProps {
  onSuccess: (message: string) => void;
}

export default function ContactForm({onSuccess}: IContactFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });
  
  const onSubmit = async (formData: ContactFormData) => {
    const result = await sendContactData(formData);
    if (result && result.length > 0) {
        onSuccess(result);
    }
  };
  
  return (
    <Box
      component='form' onSubmit={handleSubmit(onSubmit)}
      sx={{
        maxWidth: 380,
        width: '100%',
        backgroundColor: 'var(--background)',
        padding: 4,
        borderRadius: 2,
        border: '1px solid var(--border-color)',
      }}
    >
      <Stack spacing={4}>
        <Stack spacing={2}>
          <FormControl variant="outlined">
            <Box component='label'>Name</Box>
            <TextField
              placeholder='Value'
              autoComplete='off'
              id="userName"
              {...register("userName")}
            />
            {errors.userName && (
              <Typography color="error" variant="caption" mt={1}>
                {errors.userName.message}
              </Typography>
            )}
          </FormControl>
          
          <FormControl variant="outlined">
            <Box component='label'>Email</Box>
            <TextField
              placeholder='Value'
              autoComplete='off'
              id="email"
              type="email"
              {...register("email")}
            />
            {errors.email && (
              <Typography color="error" variant="caption" mt={1}>
                {errors.email.message}
              </Typography>
            )}
          </FormControl>
          
          <FormControl variant="outlined">
            <Box component='label'>Message</Box>
            <TextField
              placeholder='Value'
              autoComplete='off'
              id="message"
              type="textarea"
              multiline
              rows={5}
              {...register("message")}
            />
            {errors.message && (
              <Typography color="error" variant="caption" mt={1}>
                {errors.message.message}
              </Typography>
            )}
          </FormControl>
        </Stack>
        
        <Button type={'submit'} variant='contained'>Submit</Button>
      </Stack>
    </Box>
  )
}