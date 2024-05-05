import styled from "styled-components";

export const InformationStyles = styled.div`
  display: grid;
  place-items: center;
  margin-top: ${(props) => props.theme.size6};
  margin-bottom: 35%;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin-bottom: 0;
  }
`;
export const InformationInner = styled.div`
  width: 100%;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    width: 70%;
  }
`;

export const InformationCard = styled.div`
  display: grid;
  h3 {
    margin-bottom: ${(props) => props.theme.size2};
  }
`;

export const InformationCardItem = styled.div`
  display: flex;
  h4 {
    margin-right: ${(props) => props.theme.size3};
    &:first-child {
      color: ${(props) => props.theme.grey};
    }
  }
`;
