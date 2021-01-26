import styled from 'styled-components';

export const Input = styled.input`
    outline: none;
    background-color: transparent;
    height: 24px;
    border-radius: ${({ theme }) => theme.borderRadius};
    border: 1px solid ${({ theme }) => theme.colors.primary};
    width: 100%;
    padding: 1rem 0 1rem 1rem;
    color: #A0A6CB;
    margin: 1rem 0;

    ::placeholder {
        color: #A0A6CB;
        opacity: 0.6;
    }
`;
