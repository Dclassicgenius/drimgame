import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-dark-2 py-7 px-14 ">
      <div className="flex flex-col gap-7  md:grid md:grid-cols-4">
        <div className="md:col-span-2">
          <Image src="/assets/logo.png" alt="logo" width={100} height={100} />
          <p className="mt-6 text-base-regular md:text-small-regular text-light-2">
            Drim game is your one stop for everything in the gaming world.
            discover latest and most anticipated games and events and share your
            collections with friends!
          </p>
        </div>

        <div>
          <p className="text-body1-bold md:text-base-semibold uppercase">
            Contact Us
          </p>
          <p className="mt-3 text-base-regular md:text-small-regular text-light-2">
            Email: patamaechi1@gmail.com
          </p>
        </div>

        <div>
          <p className="text-body1-bold md:text-base-semibold uppercase">
            Follow Us
          </p>
          <ul>
            <li>
              <Image
                src="/assets/linkedin.svg"
                alt="linkedin"
                width={30}
                height={30}
              />
            </li>
          </ul>
        </div>
      </div>
      <p className="text-base-regular text-light-2 text-center md:text-small-regular md:mt-3">
        Copyright © {new Date().getFullYear()} Drim Games
      </p>
    </footer>
  );
};

export default Footer;
