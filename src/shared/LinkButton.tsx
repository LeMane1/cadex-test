import {Button as MuiButton, SxProps} from '@mui/material'

interface IButtonProps {
  children?: string
  href?: string
  sx?: SxProps;
}

export default function LinkButton({children, href, sx}: IButtonProps) {
  return (
    <MuiButton
      variant={'contained'}
      component='a'
      href={href}
      sx={{...sx}}
    >
      {children}
    </MuiButton>
  )
}