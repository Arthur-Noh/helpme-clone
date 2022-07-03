import styled from '@emotion/styled';
import React, { useState } from 'react';

const Box = styled.div`
width: 200px;
background-color: #EFEFEF;
`;

const InnerView = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
padding: 10px 20px;
`;

const TextInputBox = styled.input`
width: 120px;
font-size: 16px;
background-color: rgba(0, 0, 0, 0);
border: 0px;
`;

const Unit = styled.div`
`;

interface ITextInput {
    value?: string;
    unit?: string;
    onTextChange?: (text: string) => void;
}

const TextInput: React.FC<ITextInput> = (props) => {
    const onChange = (event: any) => {
        if (props.onTextChange) {
            props.onTextChange(event.target.value);
        }
    }

    return (
        <Box>
            <InnerView>
                <TextInputBox 
                    value={props.value}
                    type='text'
                    onChange={onChange}
                />
                <Unit>{props.unit}</Unit>
            </InnerView>
        </Box>
    );
};

export default TextInput;