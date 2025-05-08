import {Box, Stack, Typography} from "@mui/material";
import ContainerLayout from "@/lib/ContainerLayout";
import ContactUsButton from "@/shared/ContactUsButton";

export default function LastSection() {
  return (
    <Box
      component='section'
      sx={{
        backgroundColor: 'var(--bg-section)',
        paddingTop: 10,
        paddingBottom: 10,
      }}
    >
      <ContainerLayout>
        <Stack direction='column' spacing={4} alignItems='center' sx={{width: '100%'}}>
          <Typography variant='h1' component='h1' textAlign='center'>
            Less important title
          </Typography>
          
          <ContactUsButton/>
        </Stack>
      </ContainerLayout>
    </Box>
  )
}