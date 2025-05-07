import {Box, Typography} from "@mui/material";
import ContactUsButton from "@/shared/ContactUsButton";
import ContainerLayout from "@/lib/ContainerLayout";

export default function Header() {
  return (
      <Box component='header' sx={{
        position: 'sticky',
        top: 0,
        zIndex: 10,
        borderBottom: '1px solid var(--border-color)',
        backgroundColor: 'var(--background)',
      }}>
        <ContainerLayout
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: 3,
          }}
        >
          {/*  Logo */}
          <Typography variant='h5' fontWeight={'bold'}>
            Some Company
          </Typography>
          
          <ContactUsButton/>
        </ContainerLayout>
      </Box>
  )
}