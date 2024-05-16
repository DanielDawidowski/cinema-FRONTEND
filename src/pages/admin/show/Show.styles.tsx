import styled from "styled-components";

export const ShowStyles = styled.section`
  margin: ${(props) => props.theme.size1};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    margin: ${(props) => props.theme.size1} 0;
  }
`;

export const Filters = styled.div`
  display: grid;
  margin: ${(props) => props.theme.size1};
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: ${(props) => props.theme.size1} 0;
  }
`;

export const FiltersContainer = styled.div`
  display: grid;
`;

export const FilterItem = styled.div<{ $reset?: boolean }>`
  margin-right: ${(props) => props.theme.size4};
  width: 100%;
  &:last-child {
    margin-right: 0;
  }

  ${(props) =>
    props.$reset
      ? `
          border: 1px solid ${props.theme.orange};
          border-radius:  ${props.theme.size1};
          padding:  ${props.theme.size1};
          width: 15%;
          display: grid;
          place-items: center;
          svg {
              width: 25px;
              height: 25px;
              color: ${props.theme.orange};
          }
          margin-bottom: ${props.theme.size2};
          @media (min-width: ${props.theme.breakpoint_small}) {
            order: 2;
            margin: 8px 0 0 16px;
          }
        `
      : null};
`;

export const DisplayError = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: ${(props) => props.theme.size4};
`;
