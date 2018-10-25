import React from 'react'
import { Typography, Card, CardContent, CardMedia, CardActions, Button } from '@material-ui/core';



const BookCard = (props) => {
    
    return(
        <div >
            { props.allBooks ? (
                <Card >
                    <CardContent  >
                        <CardMedia style={{height: 0, paddingTop: '56.25%'}}
                            image={props.allBooks.name}
                            title={props.allBooks.author}
                            />
                        <Typography gutterBottom variant='headline' component='h2'>
                            {props.allBooks.name}
                        </Typography>
                        <Typography component='p'>
                            propthing: {props.allBooks.name}<br/>
                            propthing: {props.allBooks.author}<br/>
                            propthing: {props.allBooks.name}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" color='secondary' href={props.allBooks._url} target="_blank">
                            Remove Book
                        </Button>
                    </CardActions>
                </Card>
            ): null}
        </div>
    )
}
export default BookCard;

