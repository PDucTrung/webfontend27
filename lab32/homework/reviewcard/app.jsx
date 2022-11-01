function Header() {
  return (
    <header>
      <h1 className="text-center">Our Reviews</h1>
      <div className="line"></div>
    </header>
  );
}

function ReviewCard() {
  const author = {
    img: "https://dauduavietcoco.com/wp-content/uploads/2022/01/hinh-nen-gai-xinh-1-1-edited-400x400.jpg",
    name: "Susan Smith",
    job: "WEB DEVELOPER",
  };

  return (
    <div className="review-card">
      <div className="review">
        <div className="author">
          <div className="avatar position-relative">
            <img src={author.img} alt="" />
            <div className="quote position-absolute">
              <i className="icon bi bi-quote"></i>
            </div>
          </div>
          <div className="infor text-center">
            <div className="name-info">
              <b>{author.name}</b>
            </div>
            <div className="job-info">{author.job}</div>
          </div>
        </div>
        <div className="content text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus
          aliquam exercitationem dolores nisi consequuntur facere error.
          Voluptatum aut odio placeat explicabo exercitationem! Molestias quos
          perspiciatis accusamus maiores commodi quasi aliquid!
        </div>
      </div>

      <div className="control d-flex align-items-center gap-2">
        <i className="fa-solid fa-chevron-left"></i>
        <i className="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <ReviewCard />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector(".section-app"));
root.render(<App />);
