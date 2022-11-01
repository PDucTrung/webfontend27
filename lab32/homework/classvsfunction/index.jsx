function App() {
  return (
    <div className="app">
      <h1>Phân biệt Class Component và Function Component</h1>
      <br />
      <p>Author: Duc Trung</p>
      <br />
      <div className="syntax">
        <h3>Cú pháp</h3>
        <p>
          Khác nhau đầu tiên giữa <strong>Class Component</strong> và{" "}
          <strong>Function Component</strong> thể hiện ngay ở cách khai báo.
        </p>
        <div className="class">
          <li className="font-poppins">Class Component</li>
          <img src="img/img1.png" alt="" />
        </div>
        <br />
        <div className="func">
          <li className="font-poppins">Function Component</li>
          <img src="img/img2.png" alt="" />
        </div>
      </div>
      <br />
      <div className="syntax">
        <h3>Props</h3>
        <div className="class">
          <li className="font-poppins">Class Component</li>
          <p>
            <strong>Props</strong> trong Class Component được xem như giá trị
            truyển vào cho hàm khởi tạo class.
          </p>
          <img src="img/img3.png" alt="" />
        </div>
        <br />
        <div className="func">
          <li className="font-poppins">Function Component</li>
          <p>
            <strong>Props</strong> trong Function Component thì được xem như là
            giá trị truyền vào hàm pure function khi định nghĩa component.
          </p>
          <img src="img/img4.png" alt="" />
        </div>
        <br />
        <div className="class">
          <p>
            Định nghĩa <strong>defaultProps</strong> và{" "}
            <strong>propTypes</strong> thì không có sự khác biệt giữa Class
            Component và Function Component.
          </p>
          <img src="img/img9.png" alt="" />
        </div>
      </div>
      <br />
      <div className="syntax">
        <h3>State</h3>
        <div className="class">
          <li className="font-poppins">Class Component</li>
          <p>
            <strong>State</strong> trong Class Component dược định nghĩa như
            sau:
          </p>
          <img src="img/img5.png" alt="" />
          <br />
          <p>
            Khi muốn thay đổi giá trị <strong>state</strong> bạn gọi phương thức{" "}
            <strong>setState</strong> của component:
          </p>
          <img src="img/img6.png" alt="" />
        </div>
        <br />
        <div className="func">
          <li className="font-poppins">Function Component</li>
          <p>
            <strong>State</strong> trong Class Component dược định nghĩa như
            sau:
          </p>
          <img src="img/img7.png" alt="" />
          <br />
          <p>
            Hàm <strong>useState</strong> trả về giá trị của component{" "}
            <strong>state</strong> trong biến <strong>state</strong> và hàm{" "}
            <strong>setState</strong>. Khi muốn thay đổi giá trị của state thì
            bạn có thể gọi hàm <strong>setState</strong>.
          </p>
          <img src="img/img8.png" alt="" />
        </div>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector(".section-app"));
root.render(<App />);
