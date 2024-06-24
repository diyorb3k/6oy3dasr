import React from "react";
import "./Main.scss";
import econ from "../header/img/controls.svg"
import vidio from "../header/img/video.png"
import rasim1 from "../header/img/image_rasim1.png"
import rasim2 from "../header/img/image_rasim2.png"
import rasim3 from "../header/img/image_rasim3.png"
import rasim4 from "../header/img/image_rasim4.png"
import rasim5 from "../header/img/image_rasim5.png"
import dori1 from "../header/img/dori1.png"
import dori2 from "../header/img/dori2.png"
import dori3 from "../header/img/dori3.png"
import dori4 from "../header/img/dori4.png"
import dori5 from "../header/img/dori5.png"
import contact from "../header/img/contact.svg"









const Main = () => {
  const options = [
    {
      id: 1,
      name: 'Leanne Graham'
    },
    {
      id: 2,
      name: 'Ervin Howell'
    }
  ];
  return (
    <>
    <div className="hero">
      <div className="container">
        <div className="hero_content">

        <p className="langue">LEANGROUP - тубы и этикетки</p>
        <h3>Ламинатные тубы</h3>
        <span><p>Используются для производства зубных паст. Широко применяются в сегменте косметики, пищевой индустрии, парафармацевтике, бытовой химии и DIY (Do-it-Yourself).</p></span>
        <button>Каталог</button>
         
        </div>
          <img src={econ} alt="" />
        </div>
    </div>
    <div className="container">
    <div className="compania">О компании<span> LEANGROUP</span>
    </div>
    <div className="cart_tex">
    <img src={vidio} alt="" />
    <div>
      <p className="companiya">Компания ООО «ЛеанГрупп» начала свою деятельность в 1999 году и на сегодняшний день является ведущей компанией по производству ламинатных и экструзионных туб.</p>
      <p className="imiya">Имея две технологии – для производства ламинатных и экструзионных туб, мы предлагаем вам широкий спектр возможностей. Большим преимуществом является собственный печатный цех в ламинате и in-line печать в экструзии с возможностью различных дополнительных опций декора. Особое внимание уделяется работе с поставщиками для контроля и поддержания качества производимой нами продукции.</p>
      <p className="yanvar">С января 2018 года компания стала членом Европейской Ассоциации производителей туб (ETMA), что подтверждает сильную позицию бренда и на рынке Европы. </p>
    </div>
    </div>
    <div className="cachestva">
    Качество продукции подтверждают <span>сертификаты</span>
    </div>
    <div className="img_guruh">
      <img src={rasim1} alt="" />
      <img src={rasim2} alt="" />
      <img src={rasim3} alt="" />
      <img src={rasim4} alt="" />
      <img src={rasim5} alt="" />
    </div>
    <img className="togli" src={econ} alt="" />
  <div className="product">
<div className="poroduct_tex" >Наша <span>продукция</span></div>
<div className="btn_grup">
  <button className="bt1">Ламинатные тубы</button>
  <button className="bt2">Экструзионные тубы</button>
  <button className="bt3">Другая упаковка</button>

</div>
  </div>
  <div className="dori_img">
    <img src={dori1} alt="" />
    <img src={dori2} alt="" />
    <img src={dori3} alt="" />
    <img src={dori4} alt="" />
    <img src={dori5} alt="" />

  </div>
  <button className="catolog">Перейти в каталог</button>
  <div className="catologi">
<div className="cart_left">
  <h3>Получить подробную информацию</h3>
  <p>Просто заполните форму, наш менеджер свяжется с вами в ближайшее время</p>
  <div className="contact_input">
  <img src={contact} alt="" />
  <input type="url" id="url" name="url"placeholder="Ваше имя" ></input>

  </div>
</div>
<div className="cartright"></div>
  </div>
    </div>

    </>
  );
};

export default Main;
