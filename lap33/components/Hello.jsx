const Hello = ({ name }) => {
  return (
    <h1 className={name === "trung" ? "vip" : "pro"}>
      Hello {name === "trung" ? name + "vip" : name + "pro"}
      {name === "trung" && <button>Like</button>}
    </h1>
  );
};

Hello.propTypes = {
  name: PropTypes.string,
};

Hello.defaultProps = {
  name: "User",
};

// conditinal Rendering
// ? thường được sử dụng để trả về 1 trong 2 đoạn jsx khác nhau, thường sử dụng với các thuộc tính hoặc 2 đoạn jsx khác nhau
// && thường sử dụng để hiển thị 1 đoạn jsx tùy thuộc vào dieu kien
// if else
// Render multi-component
