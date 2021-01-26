import styled, { css } from 'styled-components';

export const Button = styled.button`
    width: 100%;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    background-color:${({ theme, disabled }) => disabled ? theme.colors.wrong : theme.colors.secondary};
    border-radius: ${({ theme }) => theme.borderRadius};
    margin-top: 1rem;
    outline: none;
    color: ${({ theme }) => theme.colors.contrastText};
    padding: 1rem 0;
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1.25px;
    cursor: ${({ disabled }) => (disabled ? css`not-allowed` : css`pointer`)};
`;
