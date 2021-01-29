import styled from 'styled-components';

export const Widget = styled.div`
    margin-top: 24px;
  margin-bottom: 24px;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme }) => theme.colors.mainBg};
  border-radius: 4px;
  overflow: hidden;
  h1, h2, h3 {
    font-size: 16px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;

Widget.Header = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};
  
  * {
    margin: 0;
  }
`;

Widget.Content = styled.div`
  padding: 24px 32px 32px 32px;
  & > *:first-child {
    margin-top: 0;
  }
  & > *:last-child {
    margin-bottom: 0;
  }
  ul {
    list-style: none;
    padding: 0;
  }
`;

Widget.Link = styled.div`
  color: ${({ theme }) => theme.colors.contrastText};
  text-decoration: none;
  background-color: ${({ theme, clicked }) => (!clicked ? theme.colors.linkBackground : theme.colors.primary)};
  padding: 0.5rem 1rem ;
  width: 100%;
  border-radius:  ${({ theme }) => theme.borderRadius};
  font-size: 14px;
  line-height: 16.8px;
  cursor: pointer;
  margin-top: 0.8rem;
`;

Widget.Image = styled.div`
  width: 100%;
  background-size: cover;
  background-image: url(${({ backgroundImage }) => backgroundImage});
  background-color: ${({ theme }) => theme.colors.mainBg};
  flex: 1;
  height: 200px;
  background-position: center;
`;

Widget.Result = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 2.5rem;
  background-color:  ${({ theme }) => theme.colors.linkBackground};
  margin: 0.5rem;
  background-size: cover;
    background-image: url(${({ backgroundImage }) => backgroundImage});
`;

export const WrapperResult = styled(Widget)`
  position: relative;
  width: 90%;

  @media (min-width: 870px) {
    max-width: 20rem; 
    position: absolute; 
    top: 110px; 
    right: 100px; 

  }
`;

WrapperResult.Content = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: center;
`;
