import { Component } from "react";
import { useOutletContext } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import GeneralInfo from "./GeneralInfo/Home";
import { fact } from "./Constructors.js"

function withParams(Component) {
  return props => <Component {...props} isMobile={useOutletContext().isMobile} />;
}

class Home extends Component {
  constructor(props) {
    super(props);

    this.facts = [
      fact('Дружный коллектив', ''),
      fact('Совместная работа', ''),
      fact('Интересные проекты', ''),
      fact('Частые мероприятия', ''),
      fact('Уникальный документ', ''),
    ]
    this.state = {
      currentFact: this.facts[0]
    }
    this.isMobile = props.isMobile;
  }

  componentDidMount() {
    this.setCircles()
  }

  setCircles() {
    let facts = document.getElementById('facts');
    let angle = 270
    let dangle = 360 / (facts.children.length - 1)

    let start = 0;
    for (let i = 0; i < facts.children.length; ++i) {
      let circle = facts.children[i]
      if (circle.id === 'centerCircle') {
        circle.style.transform = `scale(1.${this.isMobile ? '0' : '4'})`
        start++;
        continue
      }

      angle += dangle
      if (i === start) {
        circle.style.transform = `rotate(${angle}deg) translate(${facts.clientHeight / (this.isMobile ? 3 : 2)}px) rotate(-${angle}deg) scale(1.${this.isMobile ? '3' : '5'})`
      } else {
        circle.style.transform = `rotate(${angle}deg) translate(${facts.clientHeight / (this.isMobile ? 3 : 2)}px) rotate(-${angle}deg)${this.isMobile ? ' scale(0.9)' : ''}`
      }
    }
  }

  setCurrentFacts(i) {
    let old = this.facts.indexOf(this.state.currentFact);
    if (old === i) {
      return
    }
    let currentFact = this.facts[i]

    let arr = document.getElementById('facts');
    let new_arr = [];
    for (let el of arr.children) {
      new_arr.push(el)
    }
    i = new_arr.indexOf(document.getElementById(i));

    let end = new_arr.slice(0, i);
    new_arr = new_arr.slice(i, new_arr.length);
    new_arr.push(...end);

    arr.replaceChildren(...new_arr);

    this.setState({
      currentFact: currentFact
    }, this.setCircles)
  }

  getFact(k) { //k = 1 or k = -1
    let i = this.facts.indexOf(this.state.currentFact);

    if (i === 0 && k < 0) {
      return this.facts.length - 1
    } else if (i === this.facts.length - 1 && k > 0) {
      return 0
    } else {
      return i + k;
    }
  }

  render() {
    return <div className="w-100">
      <GeneralInfo isMobile={this.isMobile} />
      <div className={(this.isMobile ? "flex-column" : "flex-wrap") + " d-flex align-items-center justify-content-around mt-sm-5"} style={{height: this.isMobile ? '60vh' : '80vh'}}>
        <div id="facts" style={this.isMobile ? {height: '95vw', width: '95vw'} : {height: '50vh', width: '50vh'}}>
          <div
            id="centerCircle"
            style={{
              top: this.isMobile ? '135%' : '125%',
              left: this.isMobile ? '35%' : '20%',
              width: '12vh',
              height: '12vh',
              backgroundColor: 'var(--mango)',
            }}
            className="position-absolute transition p-3 rounded-circle d-flex flex-column align-items-center justify-content-center text-center"
          >
            <span>Future - это</span>
          </div>
        {this.facts.map((fact, index) => {
        return (
          <div
            id={index}
            onClick={() => this.setCurrentFacts(index)}
            style={{
              top: this.isMobile ? '135%' : '125%',
              left: this.isMobile ? '35%' : '20%',
              width: '12vh',
              height: '12vh',
              backgroundColor: 'var(--mango)',
            }}
            data-bs-target="#carouselFacts"
            data-bs-slide-to={index}
            className="position-absolute transition p-3 rounded-circle d-flex flex-column align-items-center justify-content-center text-center"
            key={index}
          >
            <span>{fact.title}</span>
          </div>
        )})}
        </div>
        <div id="carouselFacts" className="p-3 shadow carousel slide mt-5 mt-sm-0" data-bs-interval="false">
          <div style={{width: this.isMobile ? 'auto' : '30vw'}} className="carousel-inner">
          {this.facts.map((facts, index) => {
          return (
            <div key={index} className={(index === 0 ? "active " : "") + "p-3 carousel-item"}>
              
            </div>
          )})}
          </div>
          <button 
            className="carousel-control-prev ms-2 h2"
            style={{width: '5%', color: 'var(--mango)'}} 
            data-bs-target="#carouselFacts" 
            data-bs-slide="prev"
            onClick={() => this.setCurrentFacts(this.getFact(-1))}
          >
            <FontAwesomeIcon icon='angle-left' />
          </button>
          <button 
            className="carousel-control-next me-2 h2"
            style={{width: '5%', color: 'var(--mango)'}} 
            data-bs-target="#carouselFacts" 
            data-bs-slide="next"
            onClick={() => this.setCurrentFacts(this.getFact(1))}
          >
            <FontAwesomeIcon icon='angle-right' />
          </button>
        </div>
      </div>
    </div>
  }
}

export default withParams(Home);