import React from 'react';

export const CardName = (props) => {
  return (
      <li onClick={()=>props.onClick(props.people)}> {props.people.name} </li>
  );
}
