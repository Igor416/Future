import { Component } from "react";
import { useOutletContext } from "react-router-dom";

import GeneralInfo from "./GeneralInfo/Basic";

function withParams(Component) {
  return props => <Component {...props} isMobile={useOutletContext().isMobile} />;
}

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.isMobile = props.isMobile;
  }

  render() {
    return <div className="text-center w-100">
      <GeneralInfo label="Галерея" />
      <span style={{color: 'var(--blue-violet)'}} className="h1">Пустовато тут...</span>
      <div style={{height: '50vh'}}></div>
    </div>
  }
}

export default withParams(Gallery);