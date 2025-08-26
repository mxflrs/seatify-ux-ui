import { useContactDialogStore } from "../../../core/store/contactDialogStore";
import { sanityImageUrl } from "../../../core/utils/sanity-image";
import "./index.css";

interface Props {
    brand?: any;
}

const Navbar: React.FC<Props> = ({ brand }) => {
  const open = useContactDialogStore((state) => state.open);

  return (
    <nav className="fixed lg:top-16 top-12 left-0 flex flex-col items-center justify-center w-full z-50">
      <ul className="flex gap-2 items-center rounded-full nav-content justify-center">
        <li className="border-r-1 divider pr-4 mr-2 h-3/5 flex items-center">
          <a href="/">
            {brand && (
              <img
                src={sanityImageUrl(brand.lightLogo.asset._ref, 200, 200)}
                alt="logo"
                className="w-20"
              />
            )}
          </a>
        </li>
        <li className="hover:scale-110 duration-300 scroll-smooth active:scale-100">
          <button
            onClick={open}
            className="green-gradient-bg drop-shadow-2xl px-5 py-2 rounded-4xl text-sf-dark font-thin cursor-pointer"
          >
            Get Started
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar