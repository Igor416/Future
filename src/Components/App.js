import Menu from "./Static/Menu";
import MobileMenu from "./Static/MobileMenu";
import Footer from "./Static/Footer";
import { Outlet } from "react-router-dom";

function App() {
  let isMobile = window.matchMedia("(max-width: 576px)").matches;

  const links = {
    'groups': 'Рабочие группы',
    'events': 'Мероприятия',
    'gallery': 'Галерея',
    'about': 'О нас'
  }

  return (
    <div className="d-flex flex-column">
      {isMobile ? <MobileMenu links={links} /> : <Menu links={links} />}
      <div id="outlet">
        <Outlet context={{isMobile: isMobile}}/>
      </div>
      <Footer isMobile={isMobile} />

      <div className="modal fade" id="memberModal" tabIndex="-1" aria-labelledby="memberModalLabel" aria-hidden="true">
        <div style={{color: 'var(--blue-violet)'}} className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="memberModalLabel">Вступление</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              Сделаю чтоб тг оставить можно было; СКОРО!
            </div>
            <div className="justify-content-between modal-footer">
              <button type="button" style={{backgroundColor: 'var(--quartz-pink)', color: 'white'}} className="btn" data-bs-dismiss="modal">Закрыть</button>
              <button type="button" style={{backgroundColor: 'var(--mango)', color: 'white'}} className="btn">Отправить</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
