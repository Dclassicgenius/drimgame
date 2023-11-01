import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-black">
      <Link href={"/"}>
        <Image src={"/assets/logo.png"} alt="logo" width={100} height={100} />
      </Link>
    </nav>
  );
};

export default Navbar;
