import React from "react";
import "./Foter.scss"
import rasimlar from "../header/img/logo 2.svg"
import rasimlar2 from "../header/img/social.svg"

const Foter = () => {
  return (
    <div className="sant">
<div className="container">
    <div className="foter_img">
      <img src={rasimlar} alt="" />
      <img src={rasimlar2} alt="" />
      
    </div>
    <hr />
   <div className="fotter">
   <div className="foter_nav_left">
<ul>
  <p>Продукция</p>
  <li><a href="">Ламинатные тубы</a></li>
  <li><a href="">Экструзионные тубы</a></li>
  <li><a href="">Другая упаковка</a></li>
</ul>
<ul>
  <p>Компания</p>
  <li><a href="">О нас</a></li>
  <li><a href="">Наша команда</a></li>
  <li><a href="">Сертификаты</a></li>

</ul>
<ul>
  <p>Разделы</p>
  <li><a href="">Контакты</a></li>
  <li><a href="">Новости</a></li>
  <li><a href="">Вакансии</a></li>

</ul>
    </div>
    <div className="foter_nav_right">
  
    <div className="var">
 <ul>
    <p>Беларусь</p>
    <span>+375 (17) 270 53 77</span> <br />
    <span>+375 (17) 270 53 78</span>
  </ul>
 </div>

 <div>
 <ul className="var">
    <p>Европа</p>
    <span>+375 (17) 270 53 77</span> <br />
  </ul>
 </div>

 <div className="var">
 <ul>
    <p>Москва</p>
    <span>+375 (17) 270 53 77</span> <br />
    <span>+375 (17) 270 53 78</span>
  </ul>
 </div>

 <div className="var ">
 <ul>
    <p>Екатеринбург</p>
    <span>+375 (17) 270 53 77</span> <br />
  </ul>
 </div>

    <br />
    </div>
   </div>
</div>


    </div>
  )
  
};

export default Foter;
