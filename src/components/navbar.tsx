import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { NavLogo } from "../assets"
import { styles } from "../constants"

interface NavbarProps {
    navlinks: Array<{ id: string, title: string, link: string }>
}

export default function Navbar(props: NavbarProps) {
    let navigate = useNavigate();

    const [showMobileNav, setShowMobileNav] = useState(false);
    const [navbarOpen, setNavbarOpen] = useState(false);

    useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth <= 768 ? setShowMobileNav(true) : setShowMobileNav(false)
        );
    }, []);
    console.log(showMobileNav)
    const linkCodeStyle = "inline-block pr-1 md:text-[1rem] lg:text-[1.25rem] " + styles.homeTextCode
    const linkCodeStyle2 = "inline-block pr-3 py-3 text-[1.5rem] " + styles.homeTextCode

    return (
        <>
            <nav className="w-full h-24 items-center justify-between flex py-6 border-b-[1px] border-white mb-3">
                <img src={NavLogo} className="px-12 pr-5 py-24 md:w-72 lg:w-80 w-80" alt="" />
                {!showMobileNav ?
                    <ul className="flex flex-row pr-12 py-24 lg:gap-16 md:gap-5">
                        {
                            props.navlinks.map(
                                (navItem) => (
                                    <li key={navItem.id} className="whitespace-nowrap">
                                        <h3 className={linkCodeStyle}>//</h3>
                                        <Link className="md:text-[1rem] lg:text-[1.25rem] font-jetbrains inline-block text-white" to={navItem.link}>{navItem.title}</Link>
                                    </li>
                                )
                            )
                        }
                        <li key={props.navlinks.length + 1} className="whitespace-nowrap">
                            <h3 className={linkCodeStyle}>def</h3>
                            <Link className="text-pllblue underline md:text-[1rem] lg:text-[1.25rem] inline-block font-jetbrains" to="/terminal">Terminal</Link>
                            <h3 className={linkCodeStyle}>()</h3>
                        </li>
                    </ul>
                    : <>
                        {navbarOpen ? (
                            <button
                                className="flex text-white items-center cursor-pointer fixed right-10 z-50 text-[1.25rem]"
                                onClick={() => setNavbarOpen(!navbarOpen)}
                            >
                                Close
                            </button>
                        ) : (
                            <svg
                                onClick={() => setNavbarOpen(!navbarOpen)}
                                className="fixed z-30 flex items-center cursor-pointer right-10"
                                fill="#fff"
                                viewBox="0 0 100 80"
                                width="30"
                                height="30"
                            >
                                <rect width="100" height="10"></rect>
                                <rect y="30" width="100" height="10"></rect>
                                <rect y="60" width="100" height="10"></rect>
                            </svg>
                        )}

                        <div
                            className={`top-0 right-0 w-full bg-pgrey p-5 text-white fixed h-full z-40  ease-in-out duration-300 ${navbarOpen ? "translate-x-0 " : "translate-x-full"
                                }`}
                        >
                            <ul className="flex flex-col p-24 px-[10vw]">
                            <h3 className={"whitespace-nowrap "+linkCodeStyle2}>{"void goToPage() {"}</h3>
                        {
                            props.navlinks.map(
                                (navItem) => (
                                    <li key={navItem.id} className="whitespace-nowrap">
                                        <h3 className={"pl-20 "+linkCodeStyle2}>char* </h3>
                                        <Link className="text-[1.5rem] py-3 font-jetbrains inline-block text-white" to={navItem.link}>{navItem.title};</Link>
                                    </li>
                                )
                            )
                        }
                        <li key={props.navlinks.length + 1} className="whitespace-nowrap">
                            <Link className="text-white pl-20 py-3 text-[1.5rem] inline-block font-jetbrains" to="/terminal">Terminal</Link>
                            <h3 className={linkCodeStyle2}>();</h3>
                        </li>
                        <h3 className={" "+linkCodeStyle2}>{"}"}</h3>
                        </ul>
                        </div>
                    </>
                }
            </nav>
        </>
    );
}