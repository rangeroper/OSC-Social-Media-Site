import { createMuiTheme } from '@material-ui/core/styles'
import { lightBlue, indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
palette: {
    primary: {
        light: '#98A6D4',
        main: '#564D80',
        dark: '#6e64a1',
        contrastText: '#000',
      
    },
    secondary: {
        light: '#D3FCD5',
        main: '#C2F970',
        dark: '#D3FCD5',
        contrastText: '#fff',
    },
    openTitle: '#44344F',
    protectedTitle: indigo['700'],
    type: 'light'
    }
  })

  export default theme  