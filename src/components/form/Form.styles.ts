import styled from "styled-components";

export const FormStyles = styled.form`
  display: grid;
  margin: ${(props) => props.theme.size1};
  padding: ${(props) => props.theme.size4} ${(props) => props.theme.size1};
  border: 1px solid ${(props) => props.theme.dark};
  border-radius: 8px;
  outline: none;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: ${(props) => props.theme.size6} 0;
    padding: ${(props) => props.theme.size6};
  }
`;

export const FormItemStyles = styled.div`
  margin-bottom: ${(props) => props.theme.size1};
  justify-content: center;
  align-items: center;
`;

export const FormImage = styled.div`
  position: relative;
  height: 200px;
  margin: ${(props) => props.theme.size1} 0;
  background-color: ${(props) => props.theme.secondary_light};
  border: 1px solid ${(props) => props.theme.dark};
  border-radius: 24px;
  outline: none;
  overflow: hidden;

  @media (max-width: ${(props) => props.theme.breakpoint_small}) {
    height: 150px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
