import React, { useState } from "react";
import { observer } from 'mobx-react';
import styled from "styled-components";
import Dropdown from "../../components/dropdown";
import Button from "components/button";
import { Link } from "react-router-dom";

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

    const [ dropdownValue, setDropdownValue ] = useState<string>();

    return (
        <>
            <Dropdown
                options={dummy}
                value={dropdownValue}
                onSelect={(value) => setDropdownValue(value)}
                width={200}
                dropdownHeight={150}
            />
            <Button
                onPress={() => console.log('눌렸음')}
            >
                안녕하세요
            </Button>

            <Link to='/estimateStep1'>extimate Page</Link>
        </>
    )
});

export default Main;