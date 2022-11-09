import MemberButton from "../Reusables/MemberButton";

export default function Home({isMobile}) {
  const span_height = '4.5vh';
  const qualities = ['тяга к знанием', 'интерес к наукам', 'новые идеи', 'желание учиться', 'большие амбиции', 'тяга к знанием']

  return <div style={{backgroundColor: 'var(--mango)'}} className={(isMobile ? "flex-column" : "") + " d-flex justify-content-around align-items-center"}>
    <div className={(isMobile ? "" : "w-50 ") + "d-flex flex-column px-5 mt-5 align-items-start"}>
      {isMobile
      ?
      <div className="d-flex flex-column h2">
        <div className="d-flex flex-column">
          <span style={{height: span_height}}>Если у тебя есть</span>
          <div style={{height: span_height}} className="ms-sm-2 words-rotator">
          {qualities.map((quality, index) => {
          return (
            <span style={{height: span_height}} key={index}>{quality}</span>
          )})}
          </div>
        </div>
        <span className="col-12">то ждем тебя в нашем научном сообществе Future</span>
      </div>
      :
      <div className="d-flex flex-wrap h2">
        <div style={{height: span_height}} className="d-flex justify-content-start col-12">
          <span>Если у тебя есть</span>
          <div className="ms-sm-2 words-rotator">
          {qualities.map((quality, index) => {
          return (
            <span style={{height: span_height}} key={index}>{quality}</span>
          )})}
          </div>
        </div>
        <span className="col-12">то ждем тебя в нашем научном сообществе Future</span>
      </div>
      }
      <div className="mt-3">
        <MemberButton />
      </div>
    </div>
    <img id="science_art" src="/static/images/science_art.png"  alt="science art"/>
  </div>
}