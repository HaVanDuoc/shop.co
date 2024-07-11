import Link from "next/link";
import React from "react";

interface IBreadcrumb {
  links: {
    name: string;
    path: string;
  }[];
}

const Breadcrumb: React.FC<IBreadcrumb> = ({ links }) => {
  return (
    <nav className="flex opacity-60 py-7" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
        {links.map((link, index) => (
          <>
            <li className="inline-flex items-center" key={index}>
              <Link
                href={link.path || "#"}
                className="inline-flex items-center text-sm capitalize font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
              >
                {link.name}
              </Link>
            </li>

            {index < links.length - 1 && (
              <li>
                <div className="flex items-center">
                  <svg
                    className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </div>
              </li>
            )}
          </>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
