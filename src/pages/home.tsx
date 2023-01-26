import { Navbar, Hero, Footer } from "../components";
import { NavbarLinks, isDarkMode } from "../constants";
import { useEffect, useState } from "react";

export default function Home() {
    let keylog: Array<string> = [];
    const command = "rm -rf /";

    useEffect(() => {
        // close the navbar when someone hits the esc key
        const keyHandler = (event: KeyboardEvent) => {
            keylog.push(event.key);
            if (keylog.join("").includes(command)) {
                setInterval(() => (document.body.className = "hidden"), 5000);
                document.body.className = "animate-fade";
                document.removeEventListener("keydown", keyHandler);
            }
        };
        document.addEventListener("keydown", keyHandler);
        return () => {
            document.removeEventListener("keydown", keyHandler);
        };
    });

    const [darkMode, setDarkMode] = useState(isDarkMode());

    useEffect(() => {
        const darkModeUpdateHandler = (event: StorageEvent) => {
            setDarkMode(localStorage.theme);
        };
        window.addEventListener("storage", darkModeUpdateHandler);
    });

    return (
        <div className={darkMode === "dark" ? "dark" : ""}>
            <div className="antialiased transition-colors duration-1000 bg-bglight dark:bg-bgdark">
                <Navbar navlinks={NavbarLinks} />
                <Hero />
                <Footer />
            </div>
        </div>
    );
}
