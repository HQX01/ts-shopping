import React from "react";
import Carousel from "react-material-ui-carousel";
import Container from "@material-ui/core/Container";

import ConfigSlider from "./Slider/ConfigSlider";

const items = [
    {
        name: "Lear Music Reader",
        description: "A PDF Reader specially designed for musicians.",
        color: "#64ACC8",
        image: "https://source.unsplash.com/1600x900/?space"
    },
    {
        name: "Hash Code 2019",
        description:
            "My Solution on the 2019 Hash Code and revolution.",
        color: "#7D85B1",
        image: "https://source.unsplash.com/1600x900/?portrait"
    },
    {
        name: "Terrio",
        description: "A exciting mobile game game made in the Unity Engine.",
        color: "#CE7E78",
        image: "https://source.unsplash.com/1600x900/?water"
    },
    {
        name: "React Carousel",
        description: "A Generic carousel UI component for React using material ui.",
        color: "#C9A27E",
        image: "https://source.unsplash.com/1600x900/?nature"
    }
];

function Slide(props:any) {
    return (
        <div style={{ marginTop: "5px", color: "#494949", width:'70%', height:'100%'}}>
            <Container>
                <Carousel className="ProjectCarousel" animation="slide" sx={{width:'70%', color:'white'}}>
                    {items.map((item, index) => {
                        return <ConfigSlider item={item} key={index} />;
                    })}
                </Carousel>
            </Container>
        </div>
    );
}

export default Slide;
