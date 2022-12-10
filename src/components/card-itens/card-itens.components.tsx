import React from "react";

import * as C from "./cart-itens.style"

interface props {
    title: string,
    Icon: any,
    value: string | number
}

const CardItem = ({ title, Icon, value }: props) => {
    return(
        <C.Container>
            <C.Header>
                <C.HeaderTitle>{title}</C.HeaderTitle>
                <Icon/>
            </C.Header>
            <C.Total>{value}</C.Total>
        </C.Container>
    )
}

export default CardItem;