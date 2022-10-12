import React from "react";
// import { promoImg } from './img/.svg'
import { Productos } from '../../pages'

const images = require.context("./img", true);

function Home() {
  return (
    <>
      <section className="home flex flex-col">
        Home
        <div className="promo-image flex w-4/5 h-44 justify-items-center">
          <img src={images(`./promoImg.svg`)} alt="" />
        </div>
        <div className="category flex flex-col items-center">
          <h2 className="text-4xl">Categorias</h2>
          <div className="categories flex gap-4">
            <img src={images(`./categories-img.svg`)} alt="" />
            <img src={images(`./categories-img.svg`)} alt="" />
            <img src={images(`./categories-img.svg`)} alt="" />
            <img src={images(`./categories-img.svg`)} alt="" />
          </div>
        </div>

        <div className="most-sells">
          <h3 className="text-3xl">Lo mas vendido</h3>
          <div>
            <img src={images(`./Movil card 1.svg`)} alt="" />
          </div>
        </div>

        <div className="promo-design flex w-4/5 h-44 justify-items-center">
          <img src={images(`./promo-design.svg`)} alt="" />
        </div>

        <div className="produtcs">
          <Productos />
        </div>
      </section>
      ;
    </>
  );
}

export default Home;
