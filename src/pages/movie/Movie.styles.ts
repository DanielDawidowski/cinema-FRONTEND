import styled from "styled-components";
import { ButtonStyles } from "../../components/button/Button.styles";

export const MovieStyles = styled.div`
  margin: ${(props) => props.theme.size3};
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 0;

  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-columns: 1fr 2fr;
    grid-column-gap: ${(props) => props.theme.size1};
  }
`;

export const Left = styled.div`
  display: none;
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    display: flex;
    padding: ${(props) => props.theme.size1};
    height: 100%;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  position: fixed;
  max-width: 17%;
`;

export const Right = styled.div``;

export const MovieHeader = styled.div`
  display: flex;
  img {
    width: 130px;
    display: block;
    @media (min-width: ${(props) => props.theme.breakpoint_small}) {
      display: none;
    }
  }
`;

export const MovieHeaderContent = styled.div`
  display: grid;
  margin-left: ${(props) => props.theme.size1};
  height: 130px;
  h3 {
    text-transform: uppercase;
  }
`;

export const Ratings = styled.div`
  display: flex;
  svg {
    width: 20px;
    height: 20px;
    margin-right: ${(props) => props.theme.size1};
  }
`;

export const BuyButton = styled.div`
  margin: ${(props) => props.theme.size2} 0;
  ${ButtonStyles} {
    width: 100%;
    justify-content: center;
  }
`;

export const Description = styled.div`
  margin: ${(props) => props.theme.size1} 0;

  h3 {
    display: grid;
    place-items: center;
    width: 100%;
    background: ${(props) => props.theme.black_opacity_1};
    margin-top: -${(props) => props.theme.size1};
    color: ${(props) => props.theme.orange};
  }
`;

export const Table = styled.table`
  margin: ${(props) => props.theme.size1} 0;
  border-bottom: 1px solid ${(props) => props.theme.grey};
  padding-bottom: ${(props) => props.theme.size3};
  width: 100%;
  tbody {
    tr {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: ${(props) => props.theme.size1} 0;

      td:first-child {
        width: 30%;
        color: ${(props) => props.theme.white_1};
        text-transform: uppercase;
      }
      td:nth-child(2) {
        width: 70%;
        color: ${(props) => props.theme.white};
      }
    }
    tr:first-child {
      td:nth-child(2) {
        text-transform: lowercase;
        span::after {
          content: " / ";
        }
        span:last-child::after {
          content: "";
        }
      }
    }
    tr:nth-child(2) {
      td:nth-child(2) {
        span::after {
          content: ", ";
        }
        span:last-child::after {
          content: "";
        }
      }
    }
  }
`;

export const Shows = styled.div`
  display: grid;
`;

export const ShowsList = styled.ul`
  display: grid;
`;

export const ShowsListElement = styled.li`
  padding-top: ${(props) => props.theme.size2};
`;

export const ShowsHeader = styled.div`
  margin: ${(props) => props.theme.size2} 0;
  display: grid;
`;
