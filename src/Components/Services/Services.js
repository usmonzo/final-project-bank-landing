import React from "react";
import {
  ServicesCard,
  ServicesContainer,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
} from "./ServicesElements";

import Icon1 from "../images/svg-1.svg";
import Icon2 from "../images/svg-3.svg";
import Icon3 from "../images/svg-4.svg";

function Services() {
  return (
    <ServicesContainer id="services">
      <ServicesH1> Преимущества карт USM.</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Бесплатное обслуживание</ServicesH2>
          <ServicesP>
            Если хранить от 50 000 ₽ на карте, вкладах, накопительных счетах.
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Бесплатное пополнение и переводы</ServicesH2>
          <ServicesP>Переводите без комиссии на карты других банков.</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Снятие без комиссии</ServicesH2>
          <ServicesP>
            До 500 000 ₽ в банкоматах USM, от 3000 ₽ до 100 000 ₽ в других
            банкоматах
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
}

export default Services;
