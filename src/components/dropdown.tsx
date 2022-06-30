import React, { useState } from "react"
import styled from '@emotion/styled';
import ArrowImage from '../assert/arrow.png';

const DropdownView = styled.div<{ width?: number }>`
margin: 0 auto;
position: relative;
width: 200px;
/* background-color: red; */
/* border: 1px solid red; */
`;

const DropdownButtonView = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
padding: 10px 15px;
background-color: #EFEFEF;
cursor: pointer;
`;

const DropdownButtonText = styled.div`
color: '#333';
`;

const RightArrow = styled.img<{ isRotate?: boolean }>`
width: 20px;
height: 20px;
transform: ${({ isRotate }) => isRotate ? 'rotate(180deg)' : 'rotate(0deg)'};
`;

const DropdownContent = styled.div`
position: absolute;
top: 100%;
width: 100%;
background-color: '#ffffff';
box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06);
`;

const DropdownItem = styled.div`
padding: 15px;
cursor: pointer;
`;



export type DropdownOption = {
    text: string;
    value: string;
}

interface IDropdown {
    options: Array<DropdownOption>;
    value: string;
    onSelect: (value: string) => void;
    placeholder?: string;
    width?: number;
    disable?: boolean;
}

const Dropdown: React.FC<IDropdown> = (props: IDropdown) => {
    const [ isActive, setIsActive ] = useState(false);

    return (
        <DropdownView
        >
            <DropdownButtonView onClick={() => {
                setIsActive((prev) => !prev);
                console.log('눌렸음');
            }}>
                <DropdownButtonText>주식회사</DropdownButtonText>
                <RightArrow src={ArrowImage} isRotate={isActive}/>
            </DropdownButtonView>
            { isActive && (
                <DropdownContent>
                    { props.options.map((option, index) => {
                        return (
                            <DropdownItem
                                key={`${option.value}-${option.text}`}
                                onClick={() => props.onSelect(option.value)}
                            >{option.text}</DropdownItem>
                        );
                    })}
                </DropdownContent>
            )}
        </DropdownView>
    );
}

export default Dropdown;