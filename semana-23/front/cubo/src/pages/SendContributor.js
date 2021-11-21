import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { BarraSuperior, Corpo } from "./styleds";

const SendContributor = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [participation, setParticipation] = useState('');
    const [participations, setParticiations] = useState([])
    const [numberParticipation, setNumberParticipation] = useState(0);

    useEffect(()=>{
        getParticipations()
    },[])

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value)
    }
    const onChangeLastName = (e) => {
        setLastName(e.target.value)
    }
    const onChangeParticipation = (e) => {
        setParticipation(e.target.value)
        
    }
    const send = () => {
        // setNumberParticipation(participations.length)

    }
    
    const getParticipations = () => {
        // axios.get("https://case-cubo-samyr.herokuapp.com/participation")
        // axios.get('http://localhost:3003/participation')
        //     .then((res) => {
        //         setParticipation(res.data)
        //         console.log('res.data', res.data)
        //     })
        //     .catch((err) => {
        //         console.log('Erro', err)
        //     })
        const list = [
            {
                "firstName": "Fernanda",
                "lastName": "Oliveira",
                "participations": 2
            },
            {
                "firstName": "Carlos",
                "lastName": "Moura",
                "participations": 3
            },
            {
                "firstName": "Anderson",
                "lastName": "Santos",
                "participations": 1
            }
        ]
        
        setParticiations(list)
        setNumberParticipation(participations.length)
    }
    const participationsList = participations && participations.map((participation)=>{
        return(
            <tr>
                <td>
                    {participation.firstName}
                </td>
                <td>
                    {participation.lastName}
                </td>
                <td>
                    { Math.trunc((participation.participations / numberParticipation) * 10000) / 100}
                </td>
            </tr>
            
        )
    })
    return (
        <div>
            <BarraSuperior >
                <div class="row align-items-center" style={{textAlign: "center", paddingLeft:"50px"}}>
                    <div class="col-6 col-md-3">
                        <input type="text" class="form-control" placeholder="First Name" 
                        onChange={onChangeFirstName}
                        />
                    </div>
                    <div class="col-6 col-md-3">
                        <input type="text" class="form-control" placeholder="Last Name" 
                        onChange={onChangeLastName}
                        />
                    </div>
                    <div class="col-6 col-md-3">
                        <input type="text" class="form-control" placeholder="Participation" 
                        onChange={onChangeParticipation}
                        />
                    </div>
                    <div class="col-6 col-md-3">
                        <button class="btn btn-outline-primary" 
                            type="submit" 
                            onClick={send}
                            style={{borderColor: "white", color: "white"}}>
                                Send
                        </button>
                    </div>
                </div>
                
            </BarraSuperior>
            <Corpo class="container">
                <div class="row align-items-center">
                    <div class="col-6 col-md-4"></div>
                    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                </div>
                <table>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Participation (%)</th>
                    </tr>
                    {participationsList}
                    
                </table>
            </Corpo>
        </div>
    )
}

export default SendContributor;