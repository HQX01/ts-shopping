import React from "react";
import "./index.css";

import Box from "@material-ui/core/Box";
import Fade from "@material-ui/core/Fade";
import Paper from "@material-ui/core/Paper";

const data = [
    "商品1",
    "商品2",
    "商品3",
    "商品4",
    "商品5",
    "商品6",
];
const dataPerPage = 6;

const durationEnter = 1500;
const durationExit = 500;

class Slide extends React.Component {
    constructor() {
        // @ts-ignore
        super();

        this.state = {
            currentSlide: 0,
            currentPage: 1,
            totalPages: Math.ceil(data.length / dataPerPage),
            cycles: 0,
            timerId: null
        };

        this.handleClick = this.handleClick.bind(this);
        this.handleCarouselTurn = this.handleCarouselTurn.bind(this);
        this.getChangeOfPage = this.getChangeOfPage.bind(this);
        this.getPointIndexes = this.getPointIndexes.bind(this);
    }

    componentDidMount() {
        // @ts-ignore
        const timerId = setInterval(() => this.handleCarouselTurn(timerId), 5000);
        this.setState({ timerId });
    }

    componentWillUnmount() {
        // @ts-ignore
        const { timerId } = this.state;
        clearInterval(timerId);
    }

    handleCarouselTurn(timerId: any) {
        const newState = { ...this.state };
// @ts-ignore
        if (newState.cycles === 10) {
            clearInterval(timerId);
            return;
        }
// @ts-ignore
        if (newState.currentSlide + 1 >= data.length) {
            // @ts-ignore
            newState.cycles += 1;
            // @ts-ignore
            newState.currentSlide = 0;
        } else {
            // @ts-ignore
            newState.currentSlide += 1;
        }
// @ts-ignore
        newState.currentPage = this.getChangeOfPage(
            // @ts-ignore
            newState.currentSlide,
            // @ts-ignore
            newState.currentPage
        );

        this.setState({ ...newState });
    }

    handleClick(to: any) {
        this.setState((prevState) => ({
            currentSlide: to,
            // @ts-ignore
            currentPage: this.getChangeOfPage(to, prevState.currentPage)
        }));
    }
// @ts-ignore
    getChangeOfPage(currentSlide, currentPage) {
        // @ts-ignore
        const { totalPages } = this.state;
        // Base case to return to the first page
        if (currentSlide === 0) return 1;

        // If the change comes from the right side, move on to the next page
        if (currentSlide === (dataPerPage - 1) * currentPage) {
            // But if we are already at the last page, then return to the first page
            if (currentPage === totalPages) return 1;
            return currentPage + 1;
        }

        // If the change comes from the left side, go back to the previous page
        if (
            currentSlide === (dataPerPage - 1) * (currentPage - 1) &&
            currentSlide !== 0
        )
            return currentPage - 1;

        return currentPage;
    }

    getPointIndexes() {// @ts-ignore
        const { currentPage } = this.state;
// @ts-ignore
        return [...Array(dataPerPage).keys()].map(
            (x) => x + (dataPerPage - 1) * (currentPage - 1)
        );
    }

    render() {// @ts-ignore
        const { currentSlide, currentPage, totalPages } = this.state;

        const indexArray = this.getPointIndexes();

        return (
            <div className="slide">
                <Box className="principal">

                    <Box className="carousel">
                        {data.map((d, index) => (
                            <Fade
                                key={`${d}${index}`}
                                // @ts-ignore
                                className="content"
                                in={index === currentSlide}
                                timeout={{ enter: durationEnter, exit: durationExit }}
                            >
                                <Paper elevation={2} className="paper">
                                    {d}
                                </Paper>
                            </Fade>
                        ))}
                    </Box>

                    <Box className="dot">
                        {indexArray.map((index) => {
                            if (currentPage > totalPages || index >= data.length) {
                                return null;
                            }
                            return (
                                <span
                                    key={`dot-${index}`}
                                    onClick={() => this.handleClick(index)}
                                    style={{
                                        marginLeft: "5px",
                                        cursor: "pointer",
                                        fontSize:
                                        // Right
                                            (index === (dataPerPage - 1) * currentPage &&
                                                currentPage < totalPages) ||
                                            // Left
                                            (index === (dataPerPage - 1) * (currentPage - 1) &&
                                                index !== 0)
                                                ? "15px"
                                                : "20px",
                                        color: currentSlide === index ? "salmon" : "pink",
                                        textShadow: "0 3px 3px mistyrose"
                                    }}
                                >
                  &#9679;
                </span>
                            );
                        })}
                    </Box>
                </Box>
            </div>
        );
    }
}

export default Slide;
