import MobileMenu from "./MobileMenu";
import DesktopMenu from "./DesktopMenu";
import { fetchUser } from "@/lib/actions/user.actions";
import { currentUser } from "@clerk/nextjs";

const Navbar = async () => {
  const user = await currentUser();

  const userData = user ? await fetchUser(user?.id) : null;
  return (
    <nav className=" py-7 pl-14 pr-20 bg-dark-2 transition-all text-light-1">
      <MobileMenu
        imageUrl={userData?.image as string}
        username={userData?.username as string}
      />
      <DesktopMenu />
    </nav>
  );
};

export default Navbar;
