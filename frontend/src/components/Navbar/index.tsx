import { useContext, useEffect } from 'react'

import {
  DropDown,
  DropDownItem,
  Item,
  ItemAnimation,
  ItemLink,
  NavButton,
  NavbarContainer,
  NavbarRow
} from './styles'

import AuthContext from '../../context/AuthContext'

type Props = {
  children: JSX.Element
}

const Navbar = ({ children }: Props) => {
  const { logoutUser } = useContext(AuthContext)
  const handleLogout = () => {
    logoutUser()
  }

  // Imoveis DropDown Animation
  useEffect(() => {
    const dropDownEl = document.getElementById('imoveis-menu')
    const imovelIconEl = document.getElementById('imoveis-icon')
    const imovelDropDownEl = document.getElementById('imoveis-dropdown')

    const handleImovelHover = () => {
      imovelIconEl?.classList.add('active')
      imovelDropDownEl?.classList.add('active')
    }
    const handleImovelLeave = () => {
      imovelIconEl?.classList.remove('active')
      imovelDropDownEl?.classList.remove('active')
    }

    dropDownEl?.addEventListener('mouseover', handleImovelHover)
    dropDownEl?.addEventListener('mouseout', handleImovelLeave)

    return () => {
      dropDownEl?.removeEventListener('mouseover', handleImovelHover)
      dropDownEl?.removeEventListener('mouseout', handleImovelLeave)
    }
  }, [])

  // Permutas DropDown Animation
  useEffect(() => {
    const dropDownEl = document.getElementById('permutas-menu')
    const imovelIconEl = document.getElementById('permutas-icon')
    const imovelDropDownEl = document.getElementById('permutas-dropdown')

    const handleImovelHover = () => {
      imovelIconEl?.classList.add('active')
      imovelDropDownEl?.classList.add('active')
    }
    const handleImovelLeave = () => {
      imovelIconEl?.classList.remove('active')
      imovelDropDownEl?.classList.remove('active')
    }

    dropDownEl?.addEventListener('mouseover', handleImovelHover)
    dropDownEl?.addEventListener('mouseout', handleImovelLeave)

    return () => {
      dropDownEl?.removeEventListener('mouseover', handleImovelHover)
      dropDownEl?.removeEventListener('mouseout', handleImovelLeave)
    }
  }, [])

  // Clientes DropDown Animation
  useEffect(() => {
    const dropDownEl = document.getElementById('clientes-menu')
    const imovelIconEl = document.getElementById('clientes-icon')
    const imovelDropDownEl = document.getElementById('clientes-dropdown')

    const handleImovelHover = () => {
      imovelIconEl?.classList.add('active')
      imovelDropDownEl?.classList.add('active')
    }
    const handleImovelLeave = () => {
      imovelIconEl?.classList.remove('active')
      imovelDropDownEl?.classList.remove('active')
    }

    dropDownEl?.addEventListener('mouseover', handleImovelHover)
    dropDownEl?.addEventListener('mouseout', handleImovelLeave)

    return () => {
      dropDownEl?.removeEventListener('mouseover', handleImovelHover)
      dropDownEl?.removeEventListener('mouseout', handleImovelLeave)
    }
  }, [])

  return (
    <>
      <NavbarContainer>
        <NavbarRow>
          <Item>
            <ItemLink to="/home">
              <ItemAnimation>Home</ItemAnimation>
            </ItemLink>
          </Item>
          <Item id="imoveis-menu">
            <NavButton>
              <ItemLink to="/imoveis">
                <span>Imóveis</span>
              </ItemLink>
              <div id="imoveis-icon" className="">
                <i className="fa-solid fa-arrow-down-long fa-xs"></i>
              </div>
              <DropDown id="imoveis-dropdown" className="">
                <DropDownItem>
                  <ItemLink to="/imoveis/meus">Meus</ItemLink>
                </DropDownItem>
                <DropDownItem>
                  <ItemLink to="/imoveis/novo">Novo</ItemLink>
                </DropDownItem>
              </DropDown>
            </NavButton>
          </Item>
          <Item id="permutas-menu">
            <NavButton>
              <ItemLink to="/permutas">
                <span>Permutas</span>
              </ItemLink>
              <div id="permutas-icon" className="">
                <i className="fa-solid fa-arrow-down-long fa-xs"></i>
              </div>
              <DropDown id="permutas-dropdown" className="">
                <DropDownItem>
                  <ItemLink to="/permutas/minhas">Minhas</ItemLink>
                </DropDownItem>
                <DropDownItem>
                  <ItemLink to="/permutas/nova">Nova</ItemLink>
                </DropDownItem>
              </DropDown>
            </NavButton>
          </Item>
          <Item id="clientes-menu">
            <NavButton>
              <ItemLink to="/clientes">
                <span>Clientes</span>
              </ItemLink>
              <div id="clientes-icon" className="">
                <i className="fa-solid fa-arrow-down-long fa-xs"></i>
              </div>
              <DropDown id="clientes-dropdown" className="">
                <DropDownItem>
                  <ItemLink to="/clientes/meus">Meus</ItemLink>
                </DropDownItem>
                <DropDownItem>
                  <ItemLink to="/clientes/novo">Novo</ItemLink>
                </DropDownItem>
              </DropDown>
            </NavButton>
          </Item>
          <Item>
            <NavButton onClick={handleLogout}>
              <ItemAnimation>Logout</ItemAnimation>
            </NavButton>
          </Item>
        </NavbarRow>
      </NavbarContainer>
      {children}
    </>
  )
}

export default Navbar
