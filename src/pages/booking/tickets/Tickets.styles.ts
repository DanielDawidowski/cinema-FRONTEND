import styled from "styled-components";

export const TicketsStyles = styled.div`
  width: 100%;
  height: 100%;
  margin-top: ${(props) => props.theme.size6};
`;

export const TicketItem = styled.div`
  border-radius: 8px;
  padding: 2px;
  background: ${(props) => props.theme.primary};
  margin: ${(props) => props.theme.size1};
`;

export const TicketItemInner = styled.div`
  background: ${(props) => props.theme.black};
  width: 100%;
  height: 100%;
  border-radius: 8px;
  display: grid;
`;

export const TicketHeader = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 2px;
  margin: 4px;
`;

export const TicketTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  h4,
  h3 {
    margin-left: ${(props) => props.theme.size1};
  }
  h3 {
    color: ${(props) => props.theme.orange};
  }
`;

export const TicketContent = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 0 4px;
`;

export const TypeSelect = styled.div<{ $selected: boolean | undefined }>`
  padding: ${(props) => props.theme.size1};
  margin: ${(props) => props.theme.size1} 0;
  cursor: pointer;
  background: ${(props) =>
    props.$selected ? props.theme.gradient : props.theme.black};
  color: ${(props) =>
    props.$selected ? props.theme.black : props.theme.gradient};
  border: 1px solid ${(props) => props.theme.white};
  border-radius: ${(props) => props.theme.size1};
`;

export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: ${(props) => props.theme.size4} ${(props) => props.theme.size1};
  padding: ${(props) => props.theme.size1} 0;
  border-top: 1px solid ${(props) => props.theme.grey};
  h4 {
    text-transform: uppercase;
  }
  h3 {
    color: ${(props) => props.theme.green};
    margin-left: ${(props) => props.theme.size1};
  }
`;
