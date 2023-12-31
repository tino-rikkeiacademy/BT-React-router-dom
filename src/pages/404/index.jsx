import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <section >
      <div className="row">
        <div className="col-sm-12 ">
          <div className="col-sm-10 col-sm-offset-1  text-center">
            <h1 className="text-center text-5xl font-bold ">404</h1>
            <div className="bg-center w-full h-[400px] bg-[url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)]"></div>
            <div className="mt-[50px]">
              <h3 className="font-bold text-5xl mb-2">
                Look like youre lost
              </h3>
              <p>The page you are looking for not avaible!</p>
              <button
                onClick={handleClick}
                className=" bg-green-400 text-white p-4 items-center inline-block text-base mt-5 rounded-xl font-bold"
              >
                Go back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFoundPage;
