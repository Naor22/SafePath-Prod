const User = ({ userName, image }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="user-img" />
      </figure>
      <div className="card-body">
        <h2 className="user-name text-center text-xl">{userName}</h2>
        <p className="role text-center font-normal">Computer Science Student</p>
      </div>
    </div>
  );
};
export default User;
