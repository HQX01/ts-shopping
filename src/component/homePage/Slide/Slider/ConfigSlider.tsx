import React from "react";
import { Paper, Button } from "@material-ui/core";
import Container from "@material-ui/core/Container";

function Project(props:any) {
    return (
        <Container maxWidth={"lg"}>
            <Paper
                className="Project"
                style={{
                    backgroundImage: `url("${props.item.image}")`,
                    backgroundRepeat: "no-repeat",
                    position:'relative',
                    height:'100%',
                    overflow:'hidden',
                    padding:20
                }}
                elevation={10}
            >
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton" style={{marginTop:40, color:'white', fontSize:25, border:3, borderStyle:'solid', borderColor:'white', textTransform:'capitalize', transition:'200ms'}}>Check it out!</Button>
            </Paper>
        </Container>
    );
}

export default Project;
