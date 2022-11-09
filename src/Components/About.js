import { Component } from "react";
import { useOutletContext } from "react-router-dom";

import MemberButton from "./Reusables/MemberButton";
import GeneralInfo from "./GeneralInfo/Home";

function withParams(Component) {
  return props => <Component {...props} isMobile={useOutletContext().isMobile} />;
}

class About extends Component {
  constructor(props) {
    super(props);

    this.isMobile = props.isMobile;
  }

  render() {
    const doings = ['Сделали это', 'Сделали это', 'Сделали это']

    return <div className="d-flex flex-column">
    <GeneralInfo isMobile={this.isMobile} />
      <div className={(this.isMobile ? 'flex-column ': '') + "d-flex justify-content-between m-5 rounded"}>
        <div
          style={{color: 'var(--blue-violet)'}}
          className={"d-flex flex-column align-items-start p-sm-5 h5" + (this.isMobile ? '' : 'w-75')}
        >
          <span className="h2">Мы - научное сообщество FUTURE</span>
          <p>Мы заниемся популярязацией науки и искусств в нашем любибом лицее Алексанра Сергеевича Пушкина каждый день. Каждый день наша команда работает над новыми проектами и идеями для проведения мероприятий для всех классов.</p>
          <p>Мы - объединение всех классов нашей школы, начиная с 8 и заканчивая 12, представляем разнообразные конкурсы, выставки, лекции и тд. для каждого ученика нашего учебного заведения.</p>
          <p>Хочешь стать одним из нас? Ура, скорее жми на кнопку и добро пожаловать!</p>
          <MemberButton label="Стать участником" />
        </div>
        <div className="d-flex flex-column me-sm-5">
        <span style={{color: 'var(--quartz-pink)'}} className="h4 mt-5 mt-sm-0">Мы уже:</span>
        {doings.map((doing, index) => {
          return <div style={{backgroundColor: 'var(--quartz-pink)'}} key={index} className="d-flex p-3 my-3">
            <span className="h5">{doing}</span>
          </div>
        })}
        </div>
      </div>
      <div style={{color: 'var(--mango)'}} className="d-flex flex-column align-items-center mx-5 h4">
        <span className="h3">Организаторы</span>
        <div className={(this.isMobile ? 'flex-column ': '') + "d-flex justify-content-between mx-sm-5"}>
          <div className="shadow p-5">
            <span>Завуч всего и вся: Докина С. А.</span>
            <img src="/static/images/science_art.png" alt="С. А. Докина" />
          </div>
          <div className="shadow p-5 mx-sm-5 my-5 my-sm-0">
            <span>Директор совета НОУ Future: Гутюм М. А.</span>
            <img src="/static/images/science_art.png" alt="С. А. Докина" />
          </div>
          <div className="shadow p-5">
            <span>Директор IPLT A. Puskin: Абрамова О. В.</span>
            <img src="/static/images/science_art.png" alt="С. А. Докина" />
          </div>
        </div>
      </div>
    </div>
  }
}

export default withParams(About);