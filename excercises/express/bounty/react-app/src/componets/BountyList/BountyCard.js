import React from 'react'
import { Typography, Card, CardContent, CardMedia, CardActions, Button } from '@material-ui/core';


const BountyCard = (props) => {
    return(
        <div>
            { props.allBounties ? (
              <Card>
                 <CardContent>
                     <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                        image={props.allBounties.image}
                        title={props.allBounties.title}
                     />
                     <Typography gutterBottom variant="headline" component="h2">
                         {props.allBounties.first_name} {props.allBounties.last_name} 
                     </Typography>
                     <Typography component="p">
                         Reward: {props.allBounties.reward}
                         <br/>
                         Species: {props.allBounties.species}
                         <br/>
                         Contract Code: {props.allBounties._id} 
                     </Typography>
                 </CardContent>
                 <CardActions>
                     <Button size="small" color="primary" href={props.allBounties._url} target="_blank">
                         Go to Bounty Contract
                     </Button>
                 </CardActions>
              </Card>  
            ): null }
        </div>
    )
}
export default BountyCard
