const User = ({ user }) => {
  return (
    <div className="user">
      <img src={user.avatar} alt={user.fullname} />
      <p>{user.fullname}</p>
      <button className="view-profile">View Profile</button>
    </div>
  );
};

const UserType = PropTypes.exact({
  id: PropTypes.string,
  fullname: PropTypes.string,
  avatar: PropTypes.string,
  job: PropTypes.string,
});

User.propTypes = {
  pokemon: UserType,
};
