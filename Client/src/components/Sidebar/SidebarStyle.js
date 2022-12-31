import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'
import { NavHashLink } from 'react-router-hash-link';

export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    /* background: #0d0d0d; */
    background: #101522;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: .3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0%')};
    top: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`

export const CloseIcon = styled(AiOutlineClose)`
    color: #fff;
`

export const SidebarWrapper = styled.div`
    color: #fff;
`

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4,80px);
    text-align: center;
    padding-bottom: 50px;

    @media screen and (max-width: 480px) {
        grid-template-rows: repeat(4,60px);
    }
`

//ver link scroll
export const SidebarLink = styled(NavHashLink)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: .2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: red;
        transition: .2s ease-in-out;
    }
`

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(Link)`
    font-size: 1rem;
    border-radius: 50px;
    border: none;
    padding: 16px 64px;
    transition: all 0.4s ease;
    background: #f6f6f6;
    text-decoration: none;
    color: black;
    cursor: pointer;

    &:hover {
        transition: all .2s ease-in-out;
        scale: 1.2;
        background: red;
        color: white;
    }
`

export const UserInfo = styled.div`
    display: flex;
    flex-flow: column-reverse;
    align-items: center;
    gap: 0.5rem;
`

export const UserInfoName = styled.p``

export const UserInfoImg = styled.img`
    width: 40px;
    border-radius: 50%;
    background: aliceblue;
`