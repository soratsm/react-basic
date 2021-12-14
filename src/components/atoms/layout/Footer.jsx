import styled from "styled-components";

export const Footer = () => {
  // 『&copy;』で『©』
  return <SFooter>&copy; 2021 test Ink.</SFooter>;
};

const SFooter = styled.footer`
  background-color: #11999e;
  color: white;
  text-align: center;
  padding: 8px 0;
  /* 下記で常に下に表示 */
  position: fixed;
  bottom: 0;
  width: 100%;
`;
