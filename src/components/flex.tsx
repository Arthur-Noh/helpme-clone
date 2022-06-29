import styled from "styled-components";

const Flex = styled.div<{
    column?: boolean,
    justifyContent?: string,
    alignItems?: string,
    gap?: number,
}>`
display: flex;
flex-direction: ${({ column }) => column ? 'column' : 'row' };
justify-content: ${({ justifyContent }) => justifyContent ? justifyContent : 'center'};
align-items: ${({ alignItems }) => alignItems ? alignItems : 'center' };
${props => props.gap && `gap: ${props.gap}px`};
`;

export default Flex;