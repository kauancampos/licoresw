import React from "react";
import Image from 'next/image';
import style from '../styles/Navbar.module.css'; 
import logo from '../imgs/logo.png'



function Navbar() {
    return (
        <div>
            <nav className={style.navbar}>
                <Image className={style.logo} src={logo} alt="Logo da Wlicores" width={400} height={350} />
                <ul className={style.opcoes}>
                    <li className={style.opcao}><a href="/page">Home</a></li>
                    <li className={style.opcao}><a href="/produtos">Produtos</a></li>
                    <li className={style.opcao}><a href="/sobre">Sobre</a></li>
                    <li className={style.opcao}><a href="/contato">Contato</a></li>
                    <button className={style.cadastro}><a href="/cadastro">Cadastro</a></button>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;