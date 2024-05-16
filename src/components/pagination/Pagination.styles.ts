import styled from "styled-components";

export const PaginationStyles = styled.div`
  margin: ${(props) => props.theme.size1};
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: ${(props) => props.theme.size1} 0;
  }
`;

export const Btn = styled.div`
  margin: ${(props) => props.theme.size1} 0;
`;

export const Pages = styled.div`
  margin: ${(props) => props.theme.size1};
  display: flex;
  justify-content: center;
  button {
    margin-right: ${(props) => props.theme.size1};
    &:last-child {
      margin-right: 0;
    }
  }
`;
