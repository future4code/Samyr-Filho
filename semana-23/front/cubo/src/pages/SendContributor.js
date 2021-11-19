import { BarraSuperior } from "./styleds";

const SendContributor = () => {

    return (
        <div>
            <BarraSuperior >
                <div class="row align-items-center" style={{justifyContent: "space-between"}}>
                    <div class="col-6 col-md-3">
                        <input type="text" class="form-control" placeholder="First Name" 

                        />
                    </div>
                    <div class="col-6 col-md-3">
                        <input type="text" class="form-control" placeholder="Last Name" 
                        
                        />
                    </div>
                    <div class="col-6 col-md-3">
                        <input type="text" class="form-control" placeholder="Participation" 

                        />
                    </div>
                    <div class="col-6 col-md-3">
                    {/* <button type="button" class="btn btn-outline-primary">Send</button> */}
                    <button class="btn btn-outline-primary" type="submit" style={{borderColor: "white"}}>Send</button>
                    </div>
                </div>
                
            </BarraSuperior>
            {/* <BarraSuperior class="container">
                <div class="row align-items-center">
                    <div class="col-6 col-md-4"></div>
                    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
                </div>
                <p>Aqui é o SendContributor</p>
            </BarraSuperior> */}
        </div>
    )
}

export default SendContributor;