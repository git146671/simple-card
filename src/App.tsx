import React from 'react';
import './App.css';
import {Box} from "./components/Box.styled";
import {ImageStyled} from "./components/Image.styled";
import {H1} from "./components/H1.styled";
import {PStyled} from "./components/P.styled";
import {ButtonDiv} from "./components/ButtonDiv";
import {StyledBtn} from "./components/Button.styled";

function App() {
    return (
        <div className="App">
            <Box>
                <ImageStyled/>
                <H1>Headline</H1>
                <PStyled>Faucibus. Faucibus. Sit sit sapien sit<br/>tempusrisu ut. Sit molestie ornare in venen.</PStyled>
                <ButtonDiv>
                    <StyledBtn background={"#4E71FE"} textColor={"white"} border={"none"}>See more</StyledBtn>
                    <StyledBtn background={"transparent"} textColor={"#4E71FE"} border={"2px solid #4E71FE"}>Save</StyledBtn>
                </ButtonDiv>
            </Box>
        </div>
    );
}

export default App;
