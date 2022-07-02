import styled from '@emotion/styled';
import { EstimateForm } from 'page/estimate/store';
import React, { useState } from 'react';
import XImage from '../assert/x.png'

const CardView = styled.div<{ isSelected?: boolean }>`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 15px 30px;
background-color: ${({ isSelected }) => isSelected ? '#d9ffff' : '#EFEFEF'};
border-radius: 30px 0 0 30px;
:hover {
    background-color: ${({ isSelected }) => isSelected ? '#d9ffff' : '#A6A6A6'};
    cursor: pointer;
};
`;

const CardContent = styled.div`
`;

const XButton = styled.img`
width: 20px;
height: 20px;
background-color: red;
border-radius: 100%;
`;

const Wrapper = styled.div`
`;

interface IListCard {
    form: EstimateForm;
    onPress: (data: EstimateForm) => void;
    isSelected: boolean;
    onClickClose: (data: EstimateForm) => void;
};

const ListCard: React.FC<IListCard> = (props) => {
    const [ isHovering, setIsHovering ] = useState<boolean>(false);

    return (
        <Wrapper
            onMouseOver={() => setIsHovering(true)}
            onMouseOut={() => setIsHovering(false)}
        >
            <CardView
                onClick={() => props.onPress(props.form)}
                isSelected={props.isSelected}
            >
                <CardContent>
                    {`${props.form.title} ${props.form.formNumber}`}
                </CardContent>
                { isHovering && !props.isSelected && (
                    <XButton
                        src={XImage}
                        onClick={() => props.onClickClose(props.form)}
                    />
                )}
            </CardView>
        </Wrapper>
    );
}

export default ListCard;