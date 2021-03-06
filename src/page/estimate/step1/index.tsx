import { useState } from 'react';
import styled from '@emotion/styled';
import Flex from 'components/flex';
import { observer } from 'mobx-react';
import LogoImage from '../../../assert/main.png';
import Button from 'components/button';
import estimateStore from '../store';
import ListCard from 'components/listCard';
import EstablishCorp from '../formPage/establishCorp';

const Body = styled.div`
display: flex;
width: 100%;
height: 100vh;
`;

const LeftTab = styled.div`
display: flex;
flex-direction: column;
width: 300px;
height: 100%;
background-color: #EFEFEF;
`;

const LeftTabTitleView = styled(Flex)`
display: flex;
flex-direction: column;
margin-top: 30px;
`;

const LeftTabLogo = styled.img`
width: 25px;
height: 25px;
margin-right: 10px;
`;

const LeftTabTitle = styled(Flex)`
font-size: 25px;
margin-bottom: 10px;
`;

const InnerTitle = styled(Flex)`
font-size: 18px;
font-weight: 600;
justify-content: start;
margin: 40px 0px 0px 20px;
`;

const ButtonView = styled.div`
padding: 0 10px;
margin-top: 10px;
`;

const ButtonTextView = styled.div`
display: flex;
flex-direction: row;
`

const ButtonText = styled.div<{ isBlue?: boolean }>`
color: ${({ isBlue }) => isBlue ? '#0000ff' : 'black'};
`;

const LeftTabBottomList = styled.div`
display: flex;
flex-direction: column;
height: 100%;
border-top: 2px solid #DBDBDB;
border-bottom: 2px solid #DBDBDB;
background-color: #EFEFEF;
overflow-y: scroll;
margin-top: 20px;
padding: 10px 0 10px 10px;
`;

const LeftTabBottomButtonView = styled.div`
padding: 5px 10px;
`

const LeftTabBottomButton = styled.div`
padding: 15px;
border-radius: 60px;
background-color: #EFEFEF;
:hover{
    background-color: #ffffff;
    cursor: pointer;
}
`;

const LeftTabBottomButtonText = styled(Flex)`
`;

const EstimateStep1 = observer(() => {
    const [ selectedFormNumber, setSelectedFormNumber ] = useState<number>(1);

    return (
        <Body>
            <LeftTab>
                <LeftTabTitleView>
                    <LeftTabTitle>
                        <LeftTabLogo src={LogoImage}/>
                        {'???????????? ?????????'}
                    </LeftTabTitle>
                    <LeftTabTitle>
                        {'????????????'}
                    </LeftTabTitle>
                </LeftTabTitleView>

                <InnerTitle>????????????</InnerTitle>
                <ButtonView>
                    <Button
                        onPress={() => estimateStore.addNewForm()}
                    >
                        <ButtonTextView>
                            <ButtonText>{`???????????? `}</ButtonText>
                            <ButtonText isBlue={true}>{`[??????]`}</ButtonText>
                            <ButtonText>{` ????????? ????????????`}</ButtonText>
                        </ButtonTextView>
                    </Button>
                </ButtonView>
                <ButtonView>
                    <Button
                        onPress={() => console.log('?????? ????????????!!')}
                    >
                        <ButtonTextView>
                            <ButtonText isBlue={true}>{`[??????]`}</ButtonText>
                            <ButtonText>{`?????? ????????? ????????????`}</ButtonText>
                        </ButtonTextView>
                    </Button>
                </ButtonView>

                <InnerTitle>????????????</InnerTitle>
                <ButtonView>
                    <Button
                        onPress={() => estimateStore.addNewForm()}
                    >
                        <ButtonTextView>
                            <ButtonText>{`????????? ???????????? ????????????`}</ButtonText>
                        </ButtonTextView>
                    </Button>
                </ButtonView>

                <LeftTabBottomList>
                    { estimateStore.estimateForm?.map((form, index) => {
                            return (
                                <ListCard
                                    key={`${form.title}-${form.formNumber}`}
                                    form={form}
                                    isSelected={form.formNumber === selectedFormNumber}
                                    onPress={(data) => setSelectedFormNumber(data.formNumber)}
                                    onClickClose={(data) => estimateStore.removeForm(data)}
                                />
                            );
                        })
                    }
                </LeftTabBottomList>

                <LeftTabBottomButtonView>
                    <LeftTabBottomButton
                        onClick={() => alert('????????? ??????????????????!')}
                    >
                        <LeftTabBottomButtonText>
                            {`????????? ?????? ????????????`}
                        </LeftTabBottomButtonText>
                    </LeftTabBottomButton>
                </LeftTabBottomButtonView>
            </LeftTab>

            <EstablishCorp/>
        </Body>
    );
});

export default EstimateStep1;