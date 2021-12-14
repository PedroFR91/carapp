import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapMarkedAlt,
  faCalendarAlt,
  faCarSide,
} from '@fortawesome/free-solid-svg-icons';

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-3
    pb-3
    lg:pt-6
    lg:pb-6
`}
`;

const Title = styled.h2`
  ${tw`
    text-xl
    lg:text-5xl
    text-black
    font-extrabold
`}
`;

const StepsContainer = styled.div`
  ${tw`
    flex
    justify-evenly
    flex-wrap
    mt-7
    lg:mt-16
`}
`;

const StepContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-16
    md:w-96
    items-center
    transition-colors
    hover:text-red-500
`}
`;
const Step = styled.div`
  ${tw`
        flex
        rounded-lg
        items-center
        justify-center
        p-6
    `}
`;

const StepTitle = styled.h4`
  ${tw`
        text-black
        text-lg
        font-semibold
        mt-4
    `}
`;

const StepDescription = styled.p`
  ${tw`
    w-10/12
    text-xs
    md:text-sm
    text-center
    text-gray-600
`}
`;

const StepIcon = styled.span`
  ${tw`
        text-red-500
        text-3xl
    `}
`;
export function BookingSteps() {
  return (
    <Container>
      <Title>Reserve paso a paso</Title>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Elija localización</StepTitle>
          <StepDescription>
            Encuentre su concesionario más cercano.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Fecha de recogida</StepTitle>
          <StepDescription>
            Elija la fecha que más se ajuste a sus necesidades.
          </StepDescription>
        </StepContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Elija coche</StepTitle>
          <StepDescription>Escoja el coche que más le guste</StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
