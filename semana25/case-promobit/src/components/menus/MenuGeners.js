import React, { useContext, useState } from "react";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Chip from '@material-ui/core/Chip';
import GlobalContext from "../../global/GlobalContext";
import { Button } from "@material-ui/core";
const MenuGeners = () => {
    const {states, setters} = useContext(GlobalContext)
    const [personName, setPersonName] = useState([]);
    const [filtro, setFiltro] = useState([])

    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 220,
          maxWidth: 300,
        },
        chips: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        chip: {
          margin: 2,
        },
        noLabel: {
          marginTop: theme.spacing(3),
        },
      }));

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
            },
        },
    };

    const getStyles = (name, personName, theme) => {
    return {
        fontWeight:
        personName.indexOf(name) === -1
            ? theme.typography.fontWeightRegular
            : theme.typography.fontWeightMedium,
        };
    }
    const classes = useStyles();
    const theme = useTheme();

    const handleChange = (event) => {
        setPersonName(event.target.value);
    };
    const MultipleSelect = () => {  

        const handleChange = (event) => {
            setPersonName(event.target.value);
        };

        const handleChangeMultiple = (event) => {
            const { options } = event.target;
            const value = [];
            for (let i = 0, l = options.length; i < l; i += 1) {
            if (options[i].selected) {
                value.push(options[i].value);
            }
            }
            setPersonName(value);
        };

    }
    const setFiltros = () => {
        const filtro = states.genres.filter((genre)=>{
            for(let name of personName){
                if(name === genre.name){ return true}
            }
        })
        setFiltro(filtro)
    }

    return(
<div style={{border: "blue 1px solid", borderRadius: "5px"}}>
    <FormControl className={classes.formControl}>
        <InputLabel id="demo-mutiple-chip-label">Geners</InputLabel>
        <Select
          labelId="demo-mutiple-chip-label"
          id="demo-mutiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<Input id="select-multiple-chip" />}
          renderValue={(selected) => (
            <div className={classes.chips}>
              {selected.map((value) => (
                <Chip key={value} label={value} className={classes.chip} />
              ))}
            </div>
          )}
          MenuProps={MenuProps}
        >
          {states.genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.name} style={getStyles(genre.name, personName, theme)}>
              {genre.name}
            </MenuItem>
          ))}
        </Select>
    </FormControl>
    <Button variant="contained" color="secondary" style={{margin: "10px"}}
        onClick={setFiltros}
    >
        Aplicar
    </Button>
    <Button variant="contained" color="secondary" style={{margin: "10px"}}
        onClick={()=>setters.resetMoviesFiltered()}
    >
        Reset
    </Button>
</div>
    )
}

    export default MenuGeners