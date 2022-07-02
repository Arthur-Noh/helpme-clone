import React, { useState } from "react"
import styled from '@emotion/styled';
import ArrowImage from '../assert/arrow.png';

const DropdownView = styled.div<{ width?: number }>`
position: relative;
width: ${({ width }) => width ? width : 200}px;
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
transform: ${({ isRotate }) => isRotate ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

const DropdownContent = styled.div<{ dropdownHeight?: number }>`
position: absolute;
top: 100%;
width: 100%;
background-color: '#ffffff';
/* box-shadow: 3px 3px 10px 6px rgba(0, 0, 0, 0.06); */
border: 1px solid #DBDBDB;
${ props => props.dropdownHeight && `
    height: ${props.dropdownHeight}px;
    overflow-y: scroll;
`};
`;

const DropdownItem = styled.div<{ isSelectedItem: boolean }>`
padding: 15px;
background-color: ${({ isSelectedItem }) => isSelectedItem ? '#d9ffff' : '#ffffff'};
cursor: pointer;
`;

export type DropdownOption = {
    text: string;
    value: string;
}

interface IDropdown {
    options: Array<DropdownOption>;
    value?: string;
    onSelect: (value: string) => void;
    placeholder?: string;
    width?: number;
    disable?: boolean;
    dropdownHeight?: number;
}

const Dropdown: React.FC<IDropdown> = (props: IDropdown) => {
    const [ isActive, setIsActive ] = useState(false);

    const buttonText = props.options.find((option) => option.value === props.value)?.text;

    return (
        <DropdownView
            width={props.width}
        >
            <DropdownButtonView onClick={() => setIsActive((prev) => !prev)}>
                <DropdownButtonText>
                    { buttonText ? buttonText
                        : props.placeholder ?? '직접 선택'
                    }
                </DropdownButtonText>
                <RightArrow src={ArrowImage} isRotate={isActive}/>
            </DropdownButtonView>
            { isActive && (
                <DropdownContent
                    dropdownHeight={props.dropdownHeight}
                >
                    { props.options.map((option, index) => {
                        return (
                            <DropdownItem
                                key={`${option.value}-${option.text}`}
                                onClick={() => {
                                    props.onSelect(option.value);
                                    setIsActive((prev) => !prev);
                                }}
                                isSelectedItem={option.value === props.value}
                            >{option.text}</DropdownItem>
                        );
                    })}
                </DropdownContent>
            )}
        </DropdownView>
    );
}

export default Dropdown;