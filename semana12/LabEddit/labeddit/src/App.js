import ThemeProvider from '@material-ui/styles/ThemeProvider';
import theme from './constants/theme';
import RouterDef from './routes/routerDef';

const App = () => {
  return (
    <ThemeProvider theme={theme} >
       <RouterDef />
    </ThemeProvider>
  );
}

export default App;
