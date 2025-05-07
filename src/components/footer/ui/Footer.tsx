import {Box, Typography} from "@mui/material";

export default function Footer() {
  return (
    <Box
      component='footer'
      sx={{
        paddingTop: 8,
        paddingBottom: 8,
        borderTop: '1px solid var(--border-color)',
      }}
    >
      <Typography variant='h5' component='h5' fontWeight='bold' textAlign='center'>
        Some company 2024
      </Typography>
    </Box>
  )
}