import React from 'react'
import CardMedia from '@material-ui/core/CardMedia'


export const CardCardFront = (props) => {
    return (
        <CardMedia
            image={props.url}
            title={props.name}
            component="img"
            alt={props.name}
            height="100%"
            
        />
    );
}
