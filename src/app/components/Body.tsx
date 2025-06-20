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
                    Na W Licores, cada garrafa é uma experiência. Trabalhamos com os melhores fornecedores e selecionamos cuidadosamente nossos produtos para oferecer a você licores de altíssima qualidade, com sabor refinado e apresentação impecável.

                    Seja para uma celebração especial ou para curtir bons momentos com quem você ama, nossos rótulos unem tradição, sofisticação e excelência em cada detalhe.
                    <br/>
                    <br/>
                    Descubra uma variedade de sabores únicos e sinta o prazer de degustar um bom licor como ele deve ser: autêntico e inesquecível.
                </p>

                <div className={styleText.imagemContainer}>
                    <Image src={licor} alt="Logo da Wlicores" width={350} height={250} />
                </div>
            </div>
        </div>
    );
}

export default Body;