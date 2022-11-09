import { Component } from "react";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GeneralInfo from "./GeneralInfo/Basic";
import { event } from "./Constructors.js"

function withParams(Component) {
  return props => <Component {...props} isMobile={useOutletContext().isMobile} />;
}

class Events extends Component {
  constructor(props) {
    super(props);

    this.state = {
      events: {
        'default': [
          event('Мероприятия, посвященные  Международному Дню Науки', ['Совет НОУ', 'члены НОУ'], new Date('11.09.2022'))
        ],
      }
    }

    this.isMobile = props.isMobile;
  }

  componentDidMount() {
    this.sortEvents()
  }

  sortEvents() {
    let today = new Date()
    let events = {
      'Скорые': [],
      'Будущие': [],
      'Прошедшие': []
    }

    for (let event of this.state.events.default) {
      if (event.date.getDate() > today.getDate() + 3) {
        events['Будущие'].push(event)
      } else if (event.date.getDate() < today.getDate()) {
        events['Прошедшие'].push(event)
      } else {
        events['Скорые'].push(event)
      }
    }
    
    this.setState({
      events: events
    })
  }

  render() {
    return <div>
      <GeneralInfo label="Мероприятия" />
      <div className="d-flex flex-row-reverse justify-content-end mt-5 mx-5">
        {!this.isMobile && <div style={{right: '5%', backgroundColor: 'var(--mango)'}} className="position-fixed d-flex flex-column p-4 rounded mt-5">
          <ul>
            {Object.keys(this.state.events).map((category, index) => {
            return <a key={index} href={'#' + category} className="link transition h4">
              <li>
                {category}
                &nbsp;
                <FontAwesomeIcon icon='arrow-right' />
              </li>
            </a>
            })}
          </ul>
        </div>}
        <div className={"d-flex flex-column " + (this.isMobile ? 'w-100' : 'w-75')}>
          {Object.keys(this.state.events).map((category, index) => {
          if (this.state.events[category].length === 0) {
            return <div key={index} style={{color: 'var(--quartz-pink)'}} className="d-flex flex-column mt-5">
              <span id={category} className="h2">{category} события</span>
              <span className="h4">Пока ничего не {category === 'Прошедшие' ? 'произошло' : 'планируется'}</span>
            </div>
          }
          return <div key={index} className="d-flex flex-column mt-5">
            <span id={category} style={{color: 'var(--quartz-pink)'}} className="h2">{category} события</span>
            {!this.isMobile && <div style={{backgroundColor: 'var(--blue-violet)'}} className="d-flex mt-3 mb-0 rounded h4">
              <div className="py-3 col-7 text-center">
                <span>Название мероприятия:</span>
              </div>
              <div className="py-3 col-3 border-start border-end text-center">
                <span>Ответсвенные:</span>
              </div>
              <div className="py-3 col-2 text-center">
                <span>Дата:</span>
              </div>
            </div>}
            {this.state.events[category].map((e, index) => {
            return <div
              key={index}
              style={{backgroundColor: 'var(--blue-violet)', fontWeight: 400}}
              className={(this.isMobile ? 'flex-column ' : 'align-items-center ') + "d-flex p-2 p-sm-0 mb-0 border-top rounded h5"}
            >
              <div className={"py-2 py-sm-3" + (this.isMobile ? '' : ' col-7 text-center')}>
                <span>{e.name}</span>
              </div>
              <div className={"d-flex py-2 py-sm-3" + (this.isMobile ? ' flex-column' : ' col-3 border-start border-end justify-content-center')}>
                <span>Ответсвенные</span>
                <ul>
                  {e.responsables.map((responsable, index) => {
                  return <li key={index}>{responsable}</li>
                  })}
                </ul>
              </div>
              <div className={"py-2 py-sm-3" + (this.isMobile ? '' : ' col-2 text-center')}>
                <FontAwesomeIcon icon='calendar-alt' />
                &nbsp;
                <span>{e.getDate()}</span>
              </div>
            </div>
            })}
          </div>
          })}
        </div>
      </div>
    </div>
  }
}

export default withParams(Events);