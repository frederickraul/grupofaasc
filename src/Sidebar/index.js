import React from 'react'
import {
    SidebarContainer,
    Icon,
    CloseIcon,
    SidebarWrapper,
    SidebarMenu,
    SidebarLink,
    SideBtnWrap,
    SidebarRoute
} from './sidebarElements'

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink to='home' onClick={toggle}>Principal</SidebarLink>
                    <SidebarLink to='about' onClick={toggle}>Sobre nosotros</SidebarLink>
                    <SidebarLink to='services' onClick={toggle}>Servicios</SidebarLink>
                    <SidebarLink to='pages' onClick={toggle}>Páginas</SidebarLink>
                    <SidebarLink to='blog' onClick={toggle}>Blog</SidebarLink>
                    <SidebarLink to='contact' onClick={toggle}>Contáctanos</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar