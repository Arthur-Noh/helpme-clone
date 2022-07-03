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
                        {'법인등기 헬프미'}
                    </LeftTabTitle>
                    <LeftTabTitle>
                        {'노동준님'}
                    </LeftTabTitle>
                </LeftTabTitleView>

                <InnerTitle>견적신청</InnerTitle>
                <ButtonView>
                    <Button
                        onPress={() => estimateStore.addNewForm()}
                    >
                        <ButtonTextView>
                            <ButtonText>{`법인설립 `}</ButtonText>
                            <ButtonText isBlue={true}>{`[간단]`}</ButtonText>
                            <ButtonText>{` 견적서 받아보기`}</ButtonText>
                        </ButtonTextView>
                    </Button>
                </ButtonView>
                <ButtonView>
                    <Button
                        onPress={() => console.log('기능 연결하기!!')}
                    >
                        <ButtonTextView>
                            <ButtonText isBlue={true}>{`[변경]`}</ButtonText>
                            <ButtonText>{`등기 견적서 받아보기`}</ButtonText>
                        </ButtonTextView>
                    </Button>
                </ButtonView>

                <InnerTitle>정보입력</InnerTitle>
                <ButtonView>
                    <Button
                        onPress={() => estimateStore.addNewForm()}
                    >
                        <ButtonTextView>
                            <ButtonText>{`새로운 법인설립 시작하기`}</ButtonText>
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
                        onClick={() => alert('서비스 준비중입니다!')}
                    >
                        <LeftTabBottomButtonText>
                            {`로그인 정보 수정하기`}
                        </LeftTabBottomButtonText>
                    </LeftTabBottomButton>
                </LeftTabBottomButtonView>
            </LeftTab>

            <EstablishCorp/>
        </Body>
    );
});

export default EstimateStep1;