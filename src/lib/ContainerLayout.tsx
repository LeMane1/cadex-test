import {Container, SxProps} from "@mui/material";

interface IContainerLayoutProps {
  children: React.ReactNode;
  sx?: SxProps;
}

export default function ContainerLayout({ children, sx }: IContainerLayoutProps) {
  return (
    <Container maxWidth="lg" sx={{...sx}}>
      {children}
    </Container>
  )
}