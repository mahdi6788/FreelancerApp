import { HiHome } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import HeaderMenu from "../ui/HeaderMenu";

function Home() {
  const navigate = useNavigate()

  return (
    <div className="h-screen bg-secondary-0">
      <div className="container xl:max-w-screen-xl">
        <div className="flex justify-between">
        <h1 className="p-4 text-xl text-primary-700 font-extrabold"> Wellcome </h1>
        <HeaderMenu disabled={false}/>
        </div>
        <div className="mt-16">
          <ul className="flex flex-col items-center gap-y-5 md:flex-row md:justify-around md:gap-x-20 ">
            <li className="flex justify-center w-full p-5 border border-secondary-0 bg-secondary-200 text-primary-900 font-bold text-lg shadow-lg hover:shadow-blue-100" onClick={() => navigate("/admin")}>
              ادمین
            </li>
            <li className="flex justify-center w-full p-5 border border-secondary-0 bg-secondary-200 text-primary-900 font-bold text-lg shadow-lg hover:shadow-blue-100" onClick={() => navigate("/freelancer")}>
              فریلنسر
            </li>
            <li className="flex justify-center w-full p-5 border border-secondary-0 bg-secondary-200 text-primary-900 font-bold text-lg shadow-lg hover:shadow-blue-100" onClick={() => navigate("/owner")}>
              کارفرما
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
