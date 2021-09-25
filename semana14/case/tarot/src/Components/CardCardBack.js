import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'


export const CardCardBack = (props) => {
    return (
        <CardMedia
            image={props.url}
            component="img"
            alt='Carta'
            height="100%"
            onClick={props.onClick}
            id={props.id}
        />
    );
}