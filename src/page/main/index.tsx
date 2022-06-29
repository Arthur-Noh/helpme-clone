import React from "react";
import { observer } from 'mobx-react';
import styled from "styled-components";

const RightHeaderStyle = styled.div`
position: fixed;
width: 300px;
height: 100%;
background-color: blue;
`;

const RightHeader = () => {
    return (
        <div style={{
            flexDirection: 'row',
            flex: 1,
            backgroundColor: 'red',
            width: 300,
            height: 300,
        }}/>
    );
};

const Main = observer(() => {

    return (
            // <div>MainPage</div>
        <>
            {/* <RightHeader /> */}
            <RightHeaderStyle/>
        </>
    )
});

export default Main;