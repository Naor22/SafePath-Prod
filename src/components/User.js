const User = ({ userName, image }) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl ">
      <figure>
        <img src={image} alt="user-img" />
      </figure>
      <div className="card-body">
        <h2 className="user-name text-center">{userName}</h2>
      </div>
    </div>
  );
};
export default User;
