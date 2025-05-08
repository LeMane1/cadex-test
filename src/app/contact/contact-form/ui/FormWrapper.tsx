'use client'

import {Box, Stack, Typography} from "@mui/material";
import ContactForm from "@/app/contact/contact-form/ui/ContactForm";
import {useState} from "react";

export default function FormWrapper() {
  const [formResponse, setFormResponse] = useState<string>('');
  
  const handleOnSuccess = (message: string) => setFormResponse(message)
  
  return (
    <Box
      component='section'
      sx={{
        paddingTop: 25,
        paddingBottom: 25,
        backgroundColor: 'var(--bg-section)',
      }}
    >
      {
        formResponse ?
          <Typography variant='h2' component='h2' textAlign='center'>
            {formResponse}
          </Typography>
          :
          <Stack spacing={3} alignItems={'center'}>
            <Typography variant='h1' component='h1' fontWeight='bold' textAlign='center'>
              Only CTA on the page
            </Typography>
            
            <ContactForm onSuccess={handleOnSuccess}/>
          </Stack>
      }
    </Box>
  )
}