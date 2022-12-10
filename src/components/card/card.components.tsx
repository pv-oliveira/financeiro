import React, { memo } from "react";
import CardItem from "../card-itens/card-itens.components";
import * as C from './card.styles'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign
} from 'react-icons/fa'

interface props {
  income: string | number,
  expense: string | number,
  total: string | number
}

const Card = ({ income, expense, total}: props) => {
  return (
    <C.Container >
      <CardItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
      <CardItem title="Saidas" Icon={FaRegArrowAltCircleDown} value={expense} />
      <CardItem title="Total" Icon={FaDollarSign} value={total} />
    </C.Container>
  )
};

export default memo(Card);