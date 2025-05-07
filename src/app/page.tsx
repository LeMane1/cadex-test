import HeroSection from "@/components/app-components/hero-section";
import {Stack} from "@mui/material";
import AdvantagesSection from "@/components/app-components/advantages-section";
import LastSection from "@/components/app-components/last-section";

export default function Home() {
  return (
    <Stack direction='column' spacing={5}>
      <HeroSection/>
      <AdvantagesSection/>
      <LastSection/>
    </Stack>
  );
}
