import Logo from "./Logo";
import Navigation from "./Navigation";

function Header() {
    return (
       <header
      className="
        sticky
        top-0
        z-50
        border-b
        border-primary-800
        bg-primary-950/95
        backdrop-blur-md
        shadow-md
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
          h-20
          flex
          items-center
          justify-between
        "
      >
        <Logo />

        <Navigation />
      </div>
    </header>
    );
  }
  
  export default Header;