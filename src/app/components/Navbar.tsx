import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Homepage from "../page";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/* LEFT */}
      <div className="md:hidden lg:block ">
        <Link href="/" className="font-bold text-xl text-blue-600">
          {" "}
          FRIENDWAVE{" "}
        </Link>
      </div>

      {/* CENTER */}
      <div className="hidden md:flex">
        {/* CENTER LINKS */}

        <div className="flex gap-6 text-gray-700">
          <div className=" ">
            <Link href="/" className="flex gap-2">
              <Image alt="Homepage" src="/home.png" width={16} height={16} />
              <span>Homepage</span>
            </Link>
          </div>

          <div className=" ">
            <Link href="/" className="flex gap-2">
              <Image alt="Friends" src="/friends.png" width={16} height={16} />
              <span>Friends</span>
            </Link>
          </div>

          <div className=" ">
            <Link href="/" className="flex gap-2">
              <Image alt="Stories" src="/stories.png" width={16} height={16} />
              <span>Stories</span>
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT */}
      <div className=" "></div>

      <div className=" ">
        <MobileMenu />
      </div>
    </div>
  );
};

export default Navbar;
