import styled from "styled-components";

export const BookingStyles = styled.section`
  background: ${(props) => props.theme.black};
`;

export const Header = styled.header`
  height: 120px;
`;

export const HeaderInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  padding: ${(props) => props.theme.size2};
`;

export const StepHeader = styled.div`
  width: 100%;
  border-top: 1px solid ${(props) => props.theme.grey};
  border-bottom: 1px solid ${(props) => props.theme.grey};
`;

export const StepMenu = styled.div`
  display: flex;
`;

export const StepMenuItem = styled.div<{ $step: boolean }>`
  display: grid;
  border-left: 1px solid ${(props) => props.theme.grey};
  border-right: 1px solid ${(props) => props.theme.grey};
  h4 {
    color: ${(props) => (props.$step ? props.theme.white : props.theme.grey)};
    padding: ${(props) => props.theme.size1} ${(props) => props.theme.size2};
  }
`;

export const StepContent = styled.div`
  display: grid;
  grid-template-areas:
    "movie"
    "container";
  @media (min-width: ${(props) => props.theme.breakpoint_small}) {
    grid-template-areas: "container movie";
    grid-template-columns: 75% 15%;
    grid-column-gap: 50px;
    margin-bottom: 20%;
  }
`;

export const StepContainer = styled.div<{
  $currentStep: number;
  $step: number;
}>`
  grid-area: container;
  display: ${(props) =>
    props.$currentStep === props.$step ? "block" : "none"};
`;
