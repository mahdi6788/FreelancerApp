import { Link, useNavigate } from "react-router-dom";
import HeaderMenu from "../ui/HeaderMenu";
import useUser from "../feature/authentication/useUser";
import { SiPanasonic } from "react-icons/si";

function Home() {
  const navigate = useNavigate();
  const { user } = useUser();

  return (
    <div
      className="h-screen bg-secondary-0"
      style={{
        backgroundImage: `url(https://assets.turbologo.com/blog/en/2021/08/31093852/freelancer.png)`,
        backgroundSize: "cover",
        height: "100vh",
        backgroundPosition: "center",
      }}
    >
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-between items-center">
          <p className="p-4 text-sm text-secondary-500 font-extrabold">
          Bringing freelancers and projects together
          </p>
          <div className="flex justify-between gap-x-3 ">
            <HeaderMenu />
            <div
              onClick={() => navigate("/auth")}
              className="text-primary-600 font-bold hover:text-primary-900"
            >
              ادمین
            </div>
          </div>
        </div>
        <div className="">
          <ul className="flex justify-around gap-x-[8.5rem] mt-[7rem] tracking-wider">
            <li className="flex justify-center px-10 py-5 text-primary-900 font-bold text-3xl shadow-lg hover:shadow-blue-100">
              <button onClick={() => navigate("/")}>فریلنسر</button>
            </li>

            <li className="flex justify-center px-10 py-5 text-primary-900 font-bold text-3xl shadow-lg hover:shadow-blue-100">
              <button onClick={() => navigate("/")}>کارفرما</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
