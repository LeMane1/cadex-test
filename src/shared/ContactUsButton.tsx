import LinkButton from "@/shared/LinkButton";
import {SxProps} from "@mui/material";

interface IContactUsButtonProps {
  sx?: SxProps;
}

export default function ContactUsButton({sx}: IContactUsButtonProps) {
  return (
    <LinkButton href={'/contact'} sx={{...sx}}>
      Contact Us
    </LinkButton>
  )
}