import { Component } from "react";
import { useOutletContext } from "react-router-dom";

import GeneralInfo from "./GeneralInfo/Basic";
import { circle, section, subject } from "./Constructors.js"

function withParams(Component) {
  return props => <Component {...props} isMobile={useOutletContext().isMobile} />;
}

class Groups extends Component {
  constructor(props) {
    super(props);

    this.isMobile = props.isMobile;
  }

  render() {
    const circles = [
      circle('7', 'членов входят в исполнительный департамент'),
      circle('6', 'секций образованно НОУ Future'),
      circle('3-5', 'подразделений в каждой секции'),
      circle(Infinity, 'возможностей для каждого участника'),
    ]

    const sections = [
      section('Лингвистическая', [
        subject('Русский язык и литература', 'Михаил Гутюм'),
        subject('Румынский язык и литература', 'Михаил Гутюм'),
        subject('Французский язык', 'Михаил Гутюм'),
        subject('Английский язык', 'Михаил Гутюм'),
      ], 'Михаил Гутюм'),
      section('Естественнонаучная', [
        subject('Химия', 'Михаил Гутюм'),
        subject('Математика', 'Михаил Гутюм'),
        subject('Биология', 'Михаил Гутюм'),
      ], 'Михаил Гутюм'),
      section('Историко-географическая', [
        subject('История', 'Михаил Гутюм'),
        subject('География', 'Михаил Гутюм'),
        subject('Гражданское воспитание', 'Михаил Гутюм'),
      ], 'Михаил Гутюм'),
      section('Музыкально-художественная', [
        subject('Музыка', 'Михаил Гутюм'),
        subject('Изобразительное искусство', 'Михаил Гутюм'),
        subject('Ритмика', 'Михаил Гутюм'),
      ], 'Михаил Гутюм'),
      section('Физико-техническая', [
        subject('Физика', 'Михаил Гутюм'),
        subject('Информатика', 'Михаил Гутюм'),
        subject('Робототехника', 'Михаил Гутюм'),
      ], 'Михаил Гутюм'),
      section('Спортивная', [
        subject('Футбол', 'Михаил Гутюм'),
        subject('Волейбол', 'Михаил Гутюм'),
        subject('Настольный теннис', 'Михаил Гутюм'),
        subject('Шахматы', 'Михаил Гутюм'),
        subject('Баскетбол', 'Михаил Гутюм'),
      ], 'Михаил Гутюм'),
    ]

    return <div className="w-100">
      <GeneralInfo label="Рабочие группы" />
      <div className={(this.isMobile ? "flex-wrap justify-content-around " : "justify-content-center ") + "d-flex p-2 p-sm-5 mt-sm-5 align-items-center"}>
        {circles.map((c, index) => {
        return <div
          key={index}
          style={{height: this.isMobile ? '40vw' : '10vw', width: this.isMobile ? '40vw' : '10vw', backgroundColor: 'var(--quartz-pink)'}}
          className={(this.isMobile ? "col-5 " : "") + "d-flex flex-column align-items-center justify-content-center rounded-circle my-3 my-sm-0 mx-sm-5"}
        >
          <div className={(this.isMobile ? "" : "") + " h3 text-center"}>
          {c.number === Infinity
          ?
            <span className="h2">&#8734;</span>
          :
            <span>{c.number}</span>
          }
          </div>
          <div className={(this.isMobile ? "" : "") + " h6 text-center"}>
            <span>{c.content}</span>
          </div>
        </div>
        })}
      </div>
      <div className="d-flex flex-column py-5 my-sm-5 justify-content-start align-items-center">
        {!this.isMobile && [1, 2, 3, 4].map(index => {
          return <img
            key={index}
            src={`/images/science_piece_${index}.png`}
            alt={`science piece №${index}`}
            className="position-absolute"
            style={
              Object.assign({
                width: '10vw',
                height: 'auto',
                top: 150 + Math.random() * 10 + (index - 1) * 60 + '%',
                transform: `rotate(${Math.random()*45 * Math.sign(Math.random() - 0.5)}deg)`
              }, index % 2 === 1 ? {left: 10 + Math.random() * 30 + '%'} : {right: 10 + Math.random() * 30 + '%'})
            }
          />
        })}
        {sections.map((s, index) => {
        return <div key={index} style={{width: '80vw', zIndex: 1020}} className={"align-items-" + (index % 2 === 0 ? "start" : "end") + " my-3 my-sm-5 d-flex flex-column section"}>
          <div
            style={{backgroundColor: 'var(--blue-violet)', width: this.isMobile ? '80vw' : '30vw'}}
            className={"d-flex flex-column p-3 p-sm-5 shadow rounded"}
          >
            <span className="h4">{s.name} секция</span>
            <ul>
            {s.subjects.map((sub, index) => {
              return <li key={index} style={{fontWeight: '400'}} className="h5">
                <span>{sub.name}</span><br />
                <span className="ms-sm-2">Куратор: {sub.chief}</span>
              </li>
            })}
            </ul>
            <span className="h4">Куратор секции: {s.chief}</span>
          </div>
        </div>
        })}
      </div>
    </div>
  }
}

export default withParams(Groups);