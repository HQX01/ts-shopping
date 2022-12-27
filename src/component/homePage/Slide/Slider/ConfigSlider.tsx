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
                    backgroundRepeat: "no-repeat"
                }}
                elevation={10}
            >
                <h2>{props.item.name}</h2>
                <p>{props.item.description}</p>

                <Button className="CheckButton">Check it out!</Button>
            </Paper>
        </Container>
    );
}

export default Project;
