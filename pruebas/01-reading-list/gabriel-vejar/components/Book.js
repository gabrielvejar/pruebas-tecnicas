import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

function Book(props) {
    return (
        <Card sx={{ width: "15vw" }}>
            <CardMedia
                sx={{ height: 300 }}
                image={props.cover}
                title={props.title}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                {/* <Typography variant="body2" color="text.secondary">
          {props.synopsis}
        </Typography> */}
            </CardContent>
            <CardActions>
                <Button size="small" onClick={props.handleClickActionButton}>{props.available ? "Añadir a " : "Quitar de "}lista de lectura</Button>
            </CardActions>
        </Card>
    )
}

export default Book