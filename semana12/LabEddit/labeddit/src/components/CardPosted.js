import React from "react"
import { Box, Card, CardContent, TextField, Typography } from "@material-ui/core"
import GetAppTwoToneIcon from '@material-ui/icons/GetAppTwoTone'
import PublishTwoToneIcon from '@material-ui/icons/PublishTwoTone'

const CardPosted = (props) => {
    return (
        
        // <Box>
            <Card style={{border:'1px solid', width:'40vh', marginTop:'10px'}} 

            >
                <Card color="secondary" >
                    <CardContent >
                    <Typography variant="h6">
                        {props.userName}
                    </Typography>
                    </CardContent>
                </Card>
                <TextField
                        id="outlined-multiline-flexible"
                        label=""
                        multiline
                        maxRows={4}
                        disabled
                        style={{width:'100%', height:'100%'}}
                        value={props.title}
                        variant="outlined"
                />
                <Card color="secondary" >
                    <CardContent style={{display:'flex', justifyContent:'space-between'}}>
                        <Box style={{display:'flex', alignItems:'center'}}>
                        <PublishTwoToneIcon  />
                        <Typography variant="h6" style={{margin:'0 3px 0 3px'}}>
                        {props.voteSum ? `${props.voteSum}` : '0'}
                        </Typography>
                        <GetAppTwoToneIcon  />
                        </Box>
                        <Typography variant="h6">
                            {props.commentCount ? `${props.commentCount}` : '0'} Comentários
                        </Typography>
                    </CardContent>
                </Card>
            </Card>
        // </Box>
    )
}
export default CardPosted