import Link from "next/link";
import { FaHome } from "react-icons/fa";
import "./layout.css";

const Layout = ({ children, params }) => {

  return <div className="mx-6 md:mx-20 mt-6">
    <div className="flex items-center gap-3 border rounded-md bg-gray-100 text-red-900 p-0">
      <Link className="p-2" href="/"><FaHome /></Link>
      <span className="relative text-3xl"></span>
      <Link className="p-2" href="">{params.slug}</Link>
    </div>
    {children}
  </div>;
};

export default Layout;
