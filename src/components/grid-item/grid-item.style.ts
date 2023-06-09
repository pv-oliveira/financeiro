import styled from "styled-components";
interface Props {
  alignCenter?: any,
}
export const Tr = styled.tr``;

export const Td = styled.td<Pick<Props, 'alignCenter'>>`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;
  
  svg {
    width: 18px;
    height: 18px;
  }
`;

export const TdImg = styled.td`
  svg:hover {
    cursor: pointer;
  }
`;