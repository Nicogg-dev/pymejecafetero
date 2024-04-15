import Link from "next/link";
import { FaHome } from "react-icons/fa";

const Layout = ({ children, params }) => {
  
  return <div className="mx-6 md:mx-24 mt-6">
    <div className="flex items-center gap-4 border-2 rounded-md bg-gray-100">
      <Link className="p-2" href="/"><FaHome /></Link>
      <a className="p-2" href="">{params.slug}</a>
    </div>
    {children}
  </div>;
};

export default Layout;
