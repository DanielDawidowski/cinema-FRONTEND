import styled from "styled-components";

export const PaymentStyles = styled.div`
  display: grid;
  place-items: center;
  margin-top: ${(props) => props.theme.size6};
  margin-bottom: 35%;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin-bottom: 0;
  }
`;
export const PaymentInner = styled.div`
  width: 100%;
`;

export const Title = styled.h3`
  text-transform: uppercase;
  margin: 0 ${(props) => props.theme.size1};
`;

export const PaymentList = styled.ul`
  display: grid;
  margin: ${(props) => props.theme.size1};
`;

export const PaymentItem = styled.li`
  display: flex;
  justify-content: space-between;
  margin: ${(props) => props.theme.size1};

  h5 {
    margin-right: ${(props) => props.theme.size1};
  }
`;

export const Transaction = styled.div`
  display: flex;
  justify-content: space-between;
  margin: ${(props) => props.theme.size1};

  h5 {
    margin-right: ${(props) => props.theme.size1};
  }
`;
