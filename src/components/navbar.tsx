import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { NavLogo } from "../assets";
import { styles } from "../constants";

interface NavbarProps {
    navlinks: Array<{ id: string; title: string; link: string }>;
}

export default function Navbar(props: NavbarProps) {
    const [showMobileNav, setShowMobileNav] = useState(
        window.innerWidth <= 768
    );
    const [navbarOpen, setNavbarOpen] = useState(false);

    // if window reaches certain width switch to side navbar
    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth <= 768) {
                setShowMobileNav(true);
                setNavbarOpen(false)
            } else {
                setShowMobileNav(false)
            }
        });
    }, []);

    useEffect(() => {
        // close the navbar when someone hits the esc key
        const keyHandler = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                event.preventDefault();
                if (showMobileNav && navbarOpen) {
                    setNavbarOpen(!navbarOpen);
                }
            }
        };
        document.addEventListener("keydown", keyHandler);
    });

    const linkCodeStyle = "inline-block pr-3 md:text-[1rem] lg:text-[1.25rem] " + styles.homeTextCode;
    const underlineTransition = "hover:before:scale-x-100 hover:before:origin-left relative before:w-full before:h-0.5 before:origin-right before:transition-transform before:duration-300 before:scale-x-0 before:bg-white before:absolute before:left-0 before:bottom-0"

    return (
        <>
            <nav className="w-full h-24 items-center justify-between flex py-6 border-b-[1px] border-white mb-3">
                <img
                    src={NavLogo}
                    className="px-12 pr-5 py-24 md:w-72 lg:w-80 w-80"
                    alt=""
                />
                {!showMobileNav ? (
                    <ul className="flex flex-row mr-12 my-24 mx-auto lg:gap-16 md:gap-5">
                        {props.navlinks.map((navItem) => (
                            <li
                                key={navItem.id}
                                className={"whitespace-nowrap " + underlineTransition}
                            >
                                <h3 className={linkCodeStyle}>//</h3>
                                <Link
                                    className="md:text-[1rem] lg:text-[1.25rem] font-jetbrains inline-block text-white"
                                    to={navItem.link}
                                >
                                    {navItem.title}
                                </Link>
                            </li>
                        ))}
                        <li
                            key={props.navlinks.length + 1}
                            className={"whitespace-nowrap " + underlineTransition}
                        >
                            <h3 className={linkCodeStyle}>def</h3>
                            <Link
                                className="text-pllblue md:text-[1rem] lg:text-[1.25rem] inline-block font-jetbrains"
                                to="/terminal"
                            >
                                Terminal
                            </Link>
                            <h3 className={linkCodeStyle + " pr-0"}>()</h3>
                        </li>
                    </ul>
                ) : (
                    <>
                        {navbarOpen ? (
                            <button
                                className="flex text-white items-center cursor-pointer font-jetbrains fixed right-10 z-50 text-[1.25rem] hover:text-pllblue"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                Close
                            </button>
                        ) : (<>
                            <svg
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                className="fixed z-30 flex items-center cursor-pointer right-10 hover:fill-pllblue"
                                fill="#fff"
                                viewBox="0 0 100 80"
                                width="30"
                                height="30"
                            >
                                <rect y="0" width="100" height="10"></rect>
                                <rect y="30" width="100" height="10"></rect>
                                <rect y="60" width="100" height="10"></rect>
                            </svg>

                        </>
                        )}

                        <div
                            className={`top-0 right-0 w-full bg-pgrey p-5 text-white fixed h-full z-40 ease-in-out duration-300 ${navbarOpen
                                ? "translate-x-0 "
                                : "translate-x-full"
                                }`}
                        >
                            <ul className="flex flex-col m-28 items-center">
                                {props.navlinks.map((navItem) => (
                                    <li
                                        key={navItem.id}
                                        className="whitespace-nowrap"
                                    >
                                        <Link
                                            className={"text-[2rem] py-5 font-jetbrains inline-block text-white " + underlineTransition + " transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"}
                                            to={navItem.link}
                                        >
                                            {`<${navItem.title}/>`}
                                        </Link>
                                    </li>
                                ))}
                                <li
                                    key={props.navlinks.length + 1}
                                    className="whitespace-nowrap"
                                >
                                    <Link
                                        className={"text-white py-3 text-[2rem] inline-block font-jetbrains " + underlineTransition + " transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"}
                                        to="/terminal"
                                    >
                                        {"<Terminal/>"}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </>
                )}
            </nav>
        </>
    );
}
