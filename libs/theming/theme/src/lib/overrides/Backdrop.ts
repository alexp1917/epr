import { alpha } from '../alpha';

// ----------------------------------------------------------------------

export default function Backdrop({ theme }) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          // backgroundColor: alpha(theme.palette.grey[900], 0.5),
        },
      },
    },
  };
}
