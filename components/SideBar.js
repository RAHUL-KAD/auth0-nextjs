import { forwardRef } from "react";
import Link from "next/link";
import { HomeIcon, CreditCardIcon, LifebuoyIcon, CommandLineIcon, DocumentTextIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-6 mb-14">
        <picture>
          <img
            className="w-20 h-20"
            src="/ferox-transparent.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-blue-100 text-gray-700"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Home</p>
            </div>
          </div>
        </Link>
        <Link href="/billing">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/billing"
                ? "bg-blue-100 text-gray-700"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            }`}
          >
            <div className="mr-2">
              <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Billing</p>
            </div>
          </div>
        </Link>
        <Link href="/apiToken">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/apiToken"
                ? "bg-blue-100 text-gray-700"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            }`}
          >
            <div className="mr-2">
              <CommandLineIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Api Token</p>
            </div>
          </div>
        </Link>

        <Link href="">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-blue-100 text-gray-700"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            }`}
          >
            <div className="mr-2">
              <DocumentTextIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Documentation</p>
            </div>
          </div>
        </Link>


        <Link href="">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/account"
                ? "bg-blue-100 text-gray-700"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-600"
            }`}
          >
            <div className="mr-2">
              <LifebuoyIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Help</p>
            </div>
          </div>
        </Link>

      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
