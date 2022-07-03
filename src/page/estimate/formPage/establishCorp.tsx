import { Controller, useForm } from 'react-hook-form';
import React, { useState } from 'react';
import styled from '@emotion/styled';
import Dropdown from 'components/dropdown';
import { City, CorpType, County } from 'helper/establishCropHelper';
import TextInput from 'components/textInput';

const TotalView = styled.div`
display: flex;
flex-direction: column;
`;

const PageTitle = styled.div`
font-size: 20px;
`;

const PageView = styled.div`
display: flex;
flex-direction: column;
box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
padding: 40px 60px;
width: 600px;
`;

const PageDescription = styled.div`
font-size: 18px;
font-weight: 600;
margin-bottom: 20px;
`;

const InnerContent = styled.div`
display: flex;
flex-direction: column;
margin-bottom: 30px;
`;

const InnerContentTitle = styled.div`
font-size: 18px;
font-weight: 500;
margin-bottom: 10px;
`;

const InnerDropdownView = styled.div`
margin-bottom: 10px;
`

const InnerContentDescription = styled.div`
font-size: 15px;
color: #A6A6A6;
margin-bottom: 10px;
`;

const InnerContentLink = styled.a`
font-size: 15px;
`;

const TextInputView = styled.div`
margin-bottom: 10px;
`;

type FormData = {
    value: string;
}

interface IEstablishCorp {
}

const EstablishCorp: React.FC<IEstablishCorp> = (props) => {
    const { control, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
    const [ dropdownCropTypeValue, setDropdownCropTypeValue ] = useState<string>('주식회사');
    const [ dropdownCityValue, setDropdownCityValue ] = useState<string>();
    const [ dropdownCountyValue, setDropdownCountyValue ] = useState<string>();

    const submit = handleSubmit(
        (data) => {

        },
        (errors) => {
            console.log(`[Hook] Fail to submit data\n[Error] ${errors}`);
        }
    );

    return (
        <TotalView>
            <PageTitle>법인설립 간단 견적 계산기</PageTitle>
            <PageView>
                <PageDescription>{`[간단한 정보를 입력하면 1분 안에 간단 견적서를 보내드립니다.]`}</PageDescription>

                <InnerContent>
                    <InnerContentTitle>1. 회사 종류 선택</InnerContentTitle>
                    <InnerDropdownView
                        style={{ zIndex: 3 }}
                    >
                        <Dropdown
                            value={dropdownCropTypeValue}
                            options={CorpType}
                            onSelect={(value) => setDropdownCropTypeValue(value)}
                        />
                    </InnerDropdownView>
                    <InnerContentDescription>* 90%의 고객님은 '주식회사'를 선택합니다.</InnerContentDescription>
                    <InnerContentLink href={'https://blog.help-me.kr/2018/06/%ec%83%81%eb%b2%95%ec%83%81-%ed%9a%8c%ec%82%ac%ec%a2%85%eb%a5%98/'}>회사종류 선택하는 TIP!</InnerContentLink>
                </InnerContent>

                <InnerContent>
                    <InnerContentTitle>2. 회사 주소 시/군/구 선택</InnerContentTitle>
                    <InnerDropdownView
                        style={{ zIndex: 2 }}
                    >
                        <Dropdown
                            value={dropdownCityValue}
                            options={City}
                            onSelect={(value) => setDropdownCityValue(value)}
                            placeholder={'시/도'}
                            dropdownHeight={200}
                        />
                    </InnerDropdownView>
                    { dropdownCityValue !== undefined && (
                        <InnerDropdownView
                            style={{ zIndex: 1 }}
                        >
                            <Dropdown
                                value={dropdownCountyValue}
                                options={County.find((city) => dropdownCityValue === city.city)?.county!}
                                onSelect={(value) => setDropdownCountyValue(value)}
                                placeholder={'시/군/구'}
                                dropdownHeight={200}
                            />
                        </InnerDropdownView>
                    )}
                    <InnerContentDescription>* 설립 지역이 변경되면 세금이 변경될 수 있습니다.</InnerContentDescription>
                    <InnerContentLink href={'https://info.help-me.kr/hc/ko/articles/360028038311'}>세금 절약 TIP!</InnerContentLink>
                </InnerContent>

                <InnerContent>
                    <InnerContentTitle>3. 자본금 입력</InnerContentTitle>
                    <TextInputView>
                        <TextInput 
                            unit={'원'}
                            onTextChange={(text) => console.log('Text :', text)}
                        />
                    </TextInputView>
                    <InnerContentDescription>* 자본금으로는 100만~1000만 원을 추천드립니다(일반업종).</InnerContentDescription>
                    <InnerContentLink href={'https://blog.help-me.kr/2018/11/%eb%b0%9c%ed%96%89%ec%a3%bc%ec%8b%9d%ec%b4%9d%ec%88%98-%eb%93%b1/'}>세금 절약 TIP!</InnerContentLink>
                </InnerContent>

                <InnerContent>
                    <InnerContentTitle>4. 주주, 임원 숫자 입력</InnerContentTitle>
                    <TextInputView>
                        <TextInput
                            unit={'명'}
                            onTextChange={(text) => console.log('Text :', text)}
                        />
                    </TextInputView>
                    <InnerContentDescription>* 설립에 참여하는 인원을 모두 입력해주세요.</InnerContentDescription>
                </InnerContent>

                <InnerContent>
                    <InnerContentTitle>5. 주주, 임원 은행용 개인공인인증서 사용 선택</InnerContentTitle>
                </InnerContent>

                <InnerContent>
                    <InnerContentTitle>6. 무료 도장 종류 선택</InnerContentTitle>
                </InnerContent>

                <InnerContent>
                    <InnerContentTitle>7. 무료도장 외 추가 도장 제작 선택</InnerContentTitle>
                </InnerContent>

                <InnerContent>
                    <InnerContentTitle>8. 특이사항 선택(중복 선택 가능)</InnerContentTitle>
                </InnerContent>



                
            </PageView>
        </TotalView>
    );
};

export default EstablishCorp;