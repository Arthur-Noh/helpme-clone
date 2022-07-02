import styled from "@emotion/styled";
import React from "react";

const ButtonBody = styled.div`
border-radius: 60px;
background-color: #ffffff;
box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
cursor: pointer;
:hover {
    background-color: #d9ffff;
}
`;

const ButtonView = styled.div`
flex-direction: column;
padding: 15px 30px;

`;

interface IButton {
    onPress?: () => void;
    children?: React.ReactNode;
}

const Button: React.FC<IButton> = (props) => {
    return (
        <ButtonBody
            onClick={props.onPress}
        >
            <ButtonView>
                {props.children}
            </ButtonView>
        </ButtonBody>
    );
}
export default Button;