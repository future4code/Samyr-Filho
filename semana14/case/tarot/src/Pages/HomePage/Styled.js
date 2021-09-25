import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styled from 'styled-components';


export const useStyles = makeStyles(() => ({
    paper: {
      height: 231,
      width: 110,
    }
  }));

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  Button{
    width: 100px;
    margin-top: 15px;
  }
`

export const ListCardsContainer = styled(Grid)`
  overflow: auto;
  height: 90vh;
`