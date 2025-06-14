import React from 'react';
import styleText from '../styles/Body.module.css';
import Image from 'next/image';
import licor from '../imgs/licor.png';

function Body() {
    return (
        <div className={styleText.body}>
            <div className={styleText.tituloContainer}>
                <h1 className={styleText.titulo}>Bem-vindo à Wlicores</h1>
            </div>

            <div className={styleText.subtituloContainer}>
                <p className={styleText.texto}>
                    A Wlicores é uma loja especializada em tintas e materiais de pintura, oferecendo uma ampla gama de produtos para atender às suas necessidades de decoração e renovação.
                    Navegue por nossa seleção de tintas, pincéis, rolos e muito mais!
                </p>

                <div className={styleText.imagemContainer}>
                    <Image src={licor} alt="Logo da Wlicores" width={350} height={250} />
                </div>
            </div>
        </div>
    );
}

export default Body;