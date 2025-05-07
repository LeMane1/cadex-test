import {Box, Grid, Stack, Typography} from "@mui/material";
import ContainerLayout from "@/lib/ContainerLayout";
import {advantages} from "@/components/app-components/advantages-section/lib/constants";
import ContactUsButton from "@/shared/ContactUsButton";

export default function AdvantagesSection() {
  return (
    <Box component='section'>
      <ContainerLayout>
        <Stack direction='column' spacing={3} marginBottom={5}>
          <Typography variant='h1' component='h1' textAlign='center'>
            Also very important title
          </Typography>
          
          <Grid container spacing={4}>
            {
              advantages.map((advantage) => (
                <Grid size={{ xs: 12, sm: 6, md: 4, lg: 4 }} key={advantage.id}>
                  <Stack direction='column' spacing={0.5}>
                    <Typography variant='h5' component='h5' fontWeight='bold'>
                      {advantage.title}
                    </Typography>
                    
                    <Typography variant='body2' component='p' color='textSecondary'>
                      {advantage.description}
                    </Typography>
                  </Stack>
                </Grid>
              ))
            }
          </Grid>
        </Stack>
        
        <Box sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
        }}>
          <ContactUsButton/>
        </Box>
      </ContainerLayout>
    </Box>
  )
}