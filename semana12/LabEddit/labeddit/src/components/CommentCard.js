import React from "react"
import { Button, Card, CardActions, CardContent, TextField } from "@material-ui/core"


const CommentCard = (props) => {
    return (
        
        <Card style={{border:'1px solid', width:'40vh'}}>
                <Card color="secondary">
                    <CardContent >
                        <TextField
                            style={{width:'100%'}}
                            id="outlined-multiline-flexible"
                            label="Escreva seu comentário"
                            multiline
                            maxRows={4}
                            value={props.valuePost}
                            onChange={props.onChangePost}
                            variant="outlined"
                            
                        />
                    </CardContent>
                </Card>
                <CardActions style={{display:'flex', justifyContent:'center'}}>
                    <Button size="small" variant="contained" color="primary" onClick={props.onClick}>
                    Comentar
                    </Button>
                </CardActions>
            </Card>
    )
}
export default CommentCard