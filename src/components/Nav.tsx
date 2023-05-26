import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import Image from "next/image";


function Nav() {
  const { systemTheme, theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const onClick = () => toast('Coming soon.', { hideProgressBar: true, autoClose: 300, position: 'bottom-right' })


  useEffect(() => {
    setMounted(true);
  }, []);
  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          onClick={() => setTheme("light")}
          className="w-6 h-6 dark:hover:stroke-white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          />
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          onClick={() => setTheme("dark")}
          className="w-6 h-6 hover:stroke-black"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          />
        </svg>
      );
    }
  };
  return (
    <nav className="fixed items-center justify-between w-full pl-24 pr-24 mx-auto blur-nav text-purplish pt-9 pb-9">
      <div className="flex items-center justify-between ">
        <div className="flex contener ">
          <Link href="/" className="flex flex-row text-4xl transition duration-300 hover:text-black dark:hover:text-white font-Pridi filter">
            <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
              width="30pt" height="30pt" viewBox="0 0 196.000000 204.000000" className="dark:fill-white fill-black"
              preserveAspectRatio="xMidYMid meet">

              <g transform="translate(0.000000,204.000000) scale(0.100000,-0.100000)"
                 stroke="none">
                <path d="M876 1639 c-58 -14 -138 -63 -186 -115 -59 -64 -92 -142 -98 -229
          l-4 -71 39 -12 c52 -15 80 -15 86 1 4 10 6 10 6 0 1 -7 13 -13 28 -13 25 0 26
          1 8 20 -10 11 -21 17 -25 15 -4 -3 -11 6 -14 20 -3 13 -16 34 -29 45 l-22 21
          30 -3 c26 -3 32 2 56 46 l27 50 -25 13 c-14 7 -27 13 -30 13 -2 0 -15 -24 -28
          -52 -14 -29 -25 -47 -25 -40 0 7 9 31 21 53 20 40 20 42 2 62 -16 19 -16 20
          -1 8 10 -7 25 -11 33 -7 9 3 13 2 10 -4 -3 -5 6 -15 20 -22 23 -10 28 -10 36
          5 6 9 21 29 35 45 l26 27 -22 -33 c-29 -44 -20 -50 19 -13 38 36 39 44 4 59
          -25 10 -26 11 -3 5 40 -9 42 -9 47 4 2 6 -10 14 -27 18 -47 10 -22 27 42 28
          29 0 70 -4 90 -10 21 -6 36 -7 33 -3 -3 4 5 10 16 13 15 4 23 0 26 -14 6 -22
          23 -26 23 -4 0 8 5 15 11 15 5 0 8 4 5 9 -4 5 6 13 21 18 27 9 27 10 -21 26
          -54 19 -174 21 -240 6z"/>
                <path d="M1192 1589 c19 -18 42 -69 31 -69 -4 0 -21 16 -39 35 -39 43 -66 47
          -29 4 14 -17 23 -34 20 -38 -4 -3 -15 5 -25 19 -19 25 -20 25 -20 3 0 -14 -5
          -21 -12 -18 -7 3 -19 1 -27 -4 -12 -8 -12 -12 -2 -25 17 -20 53 -22 45 -2 -7
          19 14 30 30 17 7 -6 16 -8 19 -4 4 3 9 -2 13 -11 3 -9 13 -16 21 -16 8 0 11
          -5 8 -10 -4 -6 -2 -16 3 -23 6 -7 10 -15 10 -20 0 -4 3 -21 7 -37 5 -23 12
          -30 31 -30 27 0 33 17 9 26 -32 13 -14 26 25 20 29 -4 40 -3 40 7 0 23 -69
          114 -112 148 -50 38 -72 51 -46 28z m83 -99 c-3 -5 -14 -10 -23 -9 -14 0 -13
          2 3 9 27 11 27 11 20 0z"/>
                <path d="M1190 1431 c0 -5 6 -12 13 -14 7 -4 3 -8 -10 -12 -13 -4 -23 -10 -23
          -13 0 -10 35 -31 53 -32 14 0 16 5 11 28 -4 15 -11 33 -17 40 -11 14 -27 16
          -27 3z"/>
                <path d="M776 1385 c-3 -8 -1 -15 4 -15 6 0 10 7 10 15 0 8 -2 15 -4 15 -2 0
          -6 -7 -10 -15z"/>
                <path d="M1305 1360 c-3 -5 -15 -10 -26 -10 -11 0 -19 -7 -19 -16 0 -11 6 -14
          23 -8 21 6 21 6 5 -13 -10 -11 -18 -23 -18 -28 0 -5 -12 -22 -27 -37 l-27 -28
          30 -1 c25 -1 24 -2 -12 -10 -29 -7 -44 -17 -53 -35 -17 -38 -14 -51 19 -74 17
          -12 28 -25 25 -30 -3 -5 0 -12 6 -15 18 -12 -49 -71 -113 -100 -55 -25 -61
          -25 -77 -11 -10 9 -22 16 -27 16 -5 1 -18 20 -30 43 -16 32 -26 42 -45 42 -20
          0 -25 -6 -30 -35 l-6 -35 -2 40 c-1 33 -7 45 -35 68 -19 15 -39 27 -45 27 -5
          0 -12 -19 -14 -42 l-4 -43 -1 47 c-2 44 -4 47 -38 58 -43 15 -40 23 4 11 18
          -5 32 -6 32 -1 0 9 -67 23 -78 16 -4 -2 -33 2 -65 9 -69 16 -71 10 -29 -80
          142 -299 574 -296 716 5 26 55 30 78 32 155 2 49 0 80 -2 68 -7 -32 -21 -29
          -29 6 -4 21 -11 28 -21 24 -10 -4 -12 0 -8 11 7 18 -1 22 -11 6z"/>
                <path d="M487 1021 c-33 -7 -80 -71 -53 -71 9 0 16 4 16 10 0 5 18 20 40 32
          22 13 40 26 40 31 0 8 -2 8 -43 -2z"/>
                <path d="M1410 1028 c14 -15 102 -79 105 -76 9 9 -39 68 -55 68 -10 0 -27 3
          -37 7 -10 3 -16 4 -13 1z"/>
                <path d="M481 970 c-13 -11 -18 -20 -12 -20 7 0 9 -4 6 -10 -3 -5 -2 -10 4
          -10 16 0 23 18 9 22 -8 3 -3 10 12 18 23 12 24 12 11 -3 -7 -10 -9 -17 -3 -17
          5 0 15 6 21 14 9 11 8 15 -5 20 -19 7 -15 9 -43 -14z"/>
                <path d="M1440 975 c14 -17 13 -18 -3 -12 -24 9 -12 -10 16 -25 21 -11 21 -10
          7 7 -14 17 -13 18 3 12 25 -9 21 -2 -10 19 -27 17 -28 17 -13 -1z"/>
                <path d="M513 939 c-28 -18 -31 -23 -22 -47 6 -18 23 -33 49 -44 23 -9 44 -16
          48 -15 13 3 0 92 -16 110 -19 21 -20 21 -59 -4z m47 -53 c0 -8 7 -19 15 -26 8
          -7 15 -17 15 -23 0 -6 -13 4 -29 23 -16 19 -27 38 -24 43 6 11 23 -2 23 -17z"/>
                <path d="M1373 942 c-16 -13 -22 -30 -24 -67 -2 -27 0 -49 4 -48 30 7 97 47
          99 59 0 8 1 19 2 24 1 6 -13 19 -29 30 -28 18 -31 18 -52 2z m15 -71 c-37 -43
          -43 -47 -25 -21 10 14 20 33 24 42 3 10 10 15 15 12 5 -3 -1 -18 -14 -33z"/>
                <path d="M367 695 c-61 -11 -109 -36 -96 -49 3 -3 29 1 59 9 77 21 272 30 345
          16 32 -6 88 -25 124 -41 35 -17 66 -29 68 -27 5 6 -72 55 -105 68 -96 38 -262
          48 -395 24z"/>
                <path d="M1253 694 c-69 -15 -149 -52 -176 -81 -14 -16 -6 -14 40 9 102 49
          172 61 313 54 69 -3 150 -13 179 -22 59 -17 67 -16 48 10 -28 38 -280 58 -404
          30z"/>
                <path d="M435 614 c-11 -3 -60 -12 -108 -21 -56 -10 -91 -21 -94 -30 -11 -28
          13 -31 101 -13 128 27 229 34 320 21 99 -14 162 -45 205 -102 38 -51 65 -68
          104 -69 42 0 80 24 111 70 56 84 199 121 390 101 62 -7 138 -18 169 -25 63
          -15 92 -7 67 18 -47 47 -394 70 -510 34 -75 -23 -134 -64 -159 -109 -38 -66
          -83 -64 -132 7 -55 81 -178 125 -344 123 -55 -1 -109 -3 -120 -5z"/>
              </g>
            </svg>
            KELANDA INTERNATIONAL AGENCY
          </Link>
        </div>
        <div>
          <div className="hidden space-x-16 font-head1kod md:flex">
            {/* <Link
              type="button"
              data-mdb-ripple="true"
              data-mdb-ripple-color="light"
              href="/about"
              className="transition duration-300 ease-in-out hover:text-black dark:hover:text-white "
            >
              About
            </Link>
            <Link
              href="/experience"
              className="transition duration-300 hover:text-black dark:hover:text-white"
            >
              Experience
            </Link>
            <Link
              href="" onClick={onClick}
              className="transition duration-300 hover:text-black dark:hover:text-white "
            >
              Gallery
            </Link> */}

            <div className="p-1 cursor-pointer">
              {renderThemeChanger()}

            </div>
          </div>

          {/* <div className="block px-4 py-3 mx-2 opacity-100 md:hidden dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="justify-center p-2 mt-3 space-y-4 shadow shadow-current menu menu-compact dropdown-content bg-opacity-95 bg-slate-300 dark:bg-base-100 rounded-box w-52"
            >
              <li>
                <Link
                  href="/about"
                  className="transition duration-800"
                >
                  About me
                </Link>
              </li>
              <li>
                <Link
                  href="/experience"
                  className="transition duration-300 "
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  href="" onClick={onClick}
                  className="transition duration-300 "
                >
                  Gallery
                </Link>
              </li>

              <Link href="" className="pl-4">
                {renderThemeChanger()}

              </Link>
            </ul>
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
