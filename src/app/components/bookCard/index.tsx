import React from 'react';
import tw from 'twin.macro';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import { Marginer } from '../marginer';
import { Button } from '../button';

const CardContainer = styled.div`
  min-height: 4.3em;
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.7);
  ${tw`
  flex
justify-center
items-center
rounded-md
bg-white
pt-1
pb-1
pr-2
pl-2
md:pt-2
md:pb-2
md:pl-6
md:pr-6
`}
`;
const ItemContainer = styled.div`
  ${tw`
    flex
`}
`;
const Icon = styled.span`
  ${tw`
    text-red-500
    fill-current
    text-xs
    md:text-base
    mr-1
    md:mr-3
`}
`;
const Name = styled.span`
  ${tw`
    text-gray-600
    text-xs
    md:text-sm
`}
`;

const LineSeparator = styled.span`
  width: 2px;
  height: 45%;
  ${tw`
    bg-gray-400
    mr-2
    ml-2
    md:mr-5
    md:ml-5
`};
`;
export function BookCard() {
  return (
    <CardContainer>
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Fecha de recogida</Name>
      </ItemContainer>
      <LineSeparator />
      <ItemContainer>
        <Icon>
          <FontAwesomeIcon icon={faCalendarAlt} />
        </Icon>
        <Name>Fecha de entrega</Name>
      </ItemContainer>
      <Marginer direction='horizontal' margin='2em' />
      <Button text='Reserva tu viaje' />
    </CardContainer>
  );
}
