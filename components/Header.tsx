import siteMetadata from "@/data/siteMetadata";
import headerNavLinks from "@/data/headerNavLinks";
import Link from "./Link";
import MobileNav from "./MobileNav";
import FormularioAlerta from "./ui/FormularioAlerta";
import ContactHeader from "./ContactHeader";
const Header = () => {
  let headerClass =
    "flex flex-col items-center w-full justify-between p-2    sticky top-0 z-50";
  if (siteMetadata.stickyNav) {
    headerClass += " sticky top-0 z-50";
  }

  return (
    <header className={headerClass}>
      <div className=" w-full px2 sm:px-6  bg-slate-950/80  xl:max-w-7xl xl:px-0">
        <ContactHeader />
     
        <div className="flex items-center w-full    justify-between  space-x-4 leading-5 sm:space-x-6 ">

          <div className="no-scrollbar  hidden max-w-50 items-center md:pl-2 p-0 space-x-4 overflow-x-auto sm:flex sm:space-x-6 md:max-w-72 lg:max-w-96">
            {headerNavLinks.map((link) => (
              <Link
              key={link.title}
              href={link.href}
              className="block font-medium text-white hover:text-yellow-500"
              >
                {link.title}
              </Link>
            ))}
              </div>
          <MobileNav />

          <FormularioAlerta text="presupuesto" className="" />
        </div>
      </div>
    </header>
  );
};

export default Header;
