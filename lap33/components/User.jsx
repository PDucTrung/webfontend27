const User = ({ user }) => {
  if (user) {
    return (
      <div>
        <Hello name={user.name} />
        <button>Logout</button>
        {user.isAdmin && <button>Admin page</button>}
      </div>
    );
  } else return (<div>
      <button>Signin</button>
      <button>Signup</button>
  </div>);
};

// user: {name:string,isAdmin: boolean}

User.propType = {
  user: PropTypes.exact({
    name: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
};

// neu co user thi hien thi ten user va nut logout
// neu user co isAdmin la true thi hien nut truy cap trang admin
// neu khong co user thi hien thi nut dang nhap va dang ky
