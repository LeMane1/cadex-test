import {Box, Grid, Stack, Typography} from "@mui/material";
import ContainerLayout from "@/lib/ContainerLayout";
import HeroVideo from "@/components/app-components/hero-section/ui/HeroVideo";

export default function HeroSection(){
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'var(--bg-section)',
        paddingTop: 4,
        paddingBottom: 4,
      }}>
      <ContainerLayout>
        <Grid container spacing={2}>
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <Stack direction={'column'} spacing={2}>
              <Typography
                variant='h1'
                component='h1'
                fontWeight={'bold'}
              >
                Most important title on the page
              </Typography>
              
              <Typography variant='body1' color='textSecondary'>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Aliquam mattis, leo et condimentum ultricies, sem urna convallis metus,
            vel suscipit nibh lacus tincidunt ante`}
              </Typography>
            </Stack>
          </Grid>
          
          <Grid size={{ xs: 12, sm: 12, md: 6 }}>
            <HeroVideo/>
          </Grid>
        </Grid>
      </ContainerLayout>
    </Box>
  )
}