import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Logo from '../img/Logo.png'
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom'
import { goToFeedPage, goToHomePage } from '../routes/coordinator'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

const Header = (props) => {
  const history = useHistory()
  const classes = useStyles();
  const token = localStorage.getItem('token')
  const logout = () => {
    localStorage.removeItem('token')
    goToHomePage(history)
  }
  const back = () => {
    goToFeedPage(history)
  }
  return (
      <AppBar position="static">
        <Toolbar>
          <Typography className={classes.title}>
            <img style={{width:'100px', marginTop:'10px'}} src={Logo} alt='Logo' />
          </Typography>
          <Typography variant="h5" 
            className={classes.title}
            >
            
            {props.title().pathname === '/' ? 'Login' : 
              props.title().pathname === '/cadastro' ? 'Cadastro' : 
              props.title().pathname === '/feedPage' ? "Feed's" : 'Post'}
          </Typography>
          {props.title().pathname.substring(0,9) === '/postPage' ?
            <Button
              type={'submit'}
              variant="contained" 
              onClick={back}
              >
                  Voltar 
            </Button> :
            token &&
              <Button
                  type={'submit'}
                  // style={{''}} 
                  variant="contained" 
                  onClick={logout}
                  >
                      Logout 
              </Button> 
            }
        </Toolbar>
      </AppBar>
  );
}

export default Header