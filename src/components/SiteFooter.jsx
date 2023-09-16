import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { Icons } from "./Icons";

export function SiteFooter() {
  return (
    <footer className="w-full flex flex-col justify-center gap-y-20 pt-20 pb-8 px-6 2xl:px-0 max-w-screen-xl mx-auto">
      <div className="h-px">
        <div className="absolute left-0 border-neutral-800 w-full h-px border-t"></div>
      </div>
      <div className="flex flex-row items-center">
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-y-20">
          <div className="text-center md:text-left">
            <Link
              to="/"
              className="font-semibold text-[26px] tracking-wide leading-none inher"
            >
              Rides
            </Link>
            <ul className="mt-10 flex flex-row items-center gap-x-10">
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <Link to="/vehicles">Fleet</Link>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <HashLink smooth to="/#features">
                  Features
                </HashLink>
              </li>
              <li className="text-neutral-300 hover:text-neutral-50 transition-colors">
                <HashLink smooth to="/#faqs">
                  FAQs
                </HashLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
