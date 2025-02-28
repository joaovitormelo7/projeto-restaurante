import styled from "styled-components";

const SidebarContainer = styled.aside`
  width: 250px;
  background: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

const SidebarTitle = styled.h3`
  font-size: 20px;
  margin-bottom: 16px;
  color: #333;
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SidebarItem = styled.li`
  padding: 10px 0;
  font-size: 18px;
  cursor: pointer;
  color: #ff5722;
  &:hover {
    text-decoration: underline;
  }
`;

const SideBar = () => {
  return (
    <SidebarContainer>
      <SidebarTitle>Categorias</SidebarTitle>
      <SidebarList>
        <SidebarItem>Outros</SidebarItem>
        <SidebarItem>Porções</SidebarItem>
        <SidebarItem>Bebidas</SidebarItem>
      </SidebarList>
    </SidebarContainer>
  );
};

export default SideBar;
