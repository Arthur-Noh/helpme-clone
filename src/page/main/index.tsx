import React from "react";
import { observer } from 'mobx-react';
import styled from "styled-components";
import Dropdown from "../../components/dropdown";

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
    const dummy = [
        { text: '노동준', value: '노동준' },
        { text: '함승주', value: '함승주' },
        { text: '류정원', value: '류정원' },
        { text: '김종관', value: '김종관' },
    ];

    return (
        <>
            {/* <RightHeaderStyle/> */}
            <Dropdown
                options={dummy}
                value={'asd'}
                onSelect={(value) => console.log('value =>', value)}
            />

        </>
    )
});

export default Main;