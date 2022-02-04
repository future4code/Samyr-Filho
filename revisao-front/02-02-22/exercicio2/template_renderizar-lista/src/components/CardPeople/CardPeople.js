import React from "react";
import { CardPeopleContainer, 
        CardPeopleHeader, 
        CardPeopleProperts, 
        CardPeoplePropertsName, 
        CardPeoplePropertsDad } from "./Styles";

export const CardPeople = (props) => {
    return (
        <CardPeopleContainer >
            <CardPeopleHeader>
                Card people
            </CardPeopleHeader>
            <CardPeopleProperts>
                <CardPeoplePropertsDad>
                    <td>name: </td>
                    <td>{props.people.name}</td>
                </CardPeoplePropertsDad>
                <CardPeoplePropertsDad>
                    <td>height: </td>
                    <td>{props.people.height}</td>
                </CardPeoplePropertsDad>
                <CardPeoplePropertsDad>
                    <td>mass: </td>
                    <td>{props.people.mass}</td>
                </CardPeoplePropertsDad>
                <CardPeoplePropertsDad>
                    <td>hair_color: </td>
                    <td>{props.people.hair_color}</td>
                </CardPeoplePropertsDad>
                <CardPeoplePropertsDad>
                    <td>eye_color: </td>
                    <td>{props.people.eye_color}</td>
                </CardPeoplePropertsDad>
                <CardPeoplePropertsDad>
                    <td>birth_year: </td>
                    <td>{props.people.birth_year}</td>
                </CardPeoplePropertsDad>
                <CardPeoplePropertsDad>
                    <td>gender: </td>
                    <td>{props.people.gender}</td>
                </CardPeoplePropertsDad>
                
            </CardPeopleProperts>
            
            
            
            
            
            
            
        </CardPeopleContainer>
    )
}