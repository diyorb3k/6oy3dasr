import React from "react";
import "./Header.scss";
import rasim from "./img/logo.png";

const Header = () => {
  return (
    <>
      <div className="container">
        <nav>
          <div>
            {" "}
            <img src={rasim} alt=""  />
          </div>
          <ul>
            <li className="onc">
              <a href="">Продукция</a>
            </li>
            <div className="car"></div>
            <li className="onc">
              <a href="">Сертификаты</a>
            </li>
            <div className="car"></div>
            <li className="onc">
              <a href="">Наша команда</a>
            </li>
            <div className="car"></div>
            <li className="onc">
              <a href="">О нас</a>
            </li>
            <div className="car"></div>
            <li className="onc">
              <a href="">Новости</a>
            </li>
            <div className="car"></div>

            <li className="onc">
              <a href="">Вакансии</a>
            </li>
            <div className="car"></div>
            <li className="onc">
              <a href="">Контакты</a>
            </li>
          </ul>

          <div>
            <span>
              <div className="rus">RU</div>
              <div className="car"></div>
              EN
            </span>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
