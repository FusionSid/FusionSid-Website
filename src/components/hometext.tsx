import { styles } from "../constants";

export default function HomeText() {
    const linkCodeStyle = "text-[0.9rem] " + styles.homeTextCode;

    return (
        <div className="flex h-full">
            <div className="overflow-x-hidden ml-16 mt-12">
                <h3 className={linkCodeStyle + " mt-24"}>
                    {"void sayHello() {"}
                </h3>

                <div className="whitespace-nowrap leading-[6rem] ml-10">
                    <h3 className={linkCodeStyle + "  inline-block"}>
                        {'printf("'}
                    </h3>
                    <h3 className="text-black dark:text-white text-[3rem] font-poppinsbold inline-block">
                        Hey! i'm
                    </h3>
                    <h1 className="text-[#1761B0] text-[9.5rem] font-poppinsbold inline-block">
                        Siddhesh
                    </h1>
                </div>

                <div className="whitespace-nowrap leading-[5rem] ml-9">
                    <h3 className="text-black dark:text-white text-[3rem] font-poppinsbold inline-block">
                        aka
                    </h3>
                    <h1 className="text-[#D2292D] text-[9.5rem] font-poppinsbold inline-block">
                        FusionSid
                    </h1>
                    <h3 className={linkCodeStyle + "  inline-block"}>{'")'}</h3>
                </div>

                <h3 className={linkCodeStyle}>{"}"}</h3>
            </div>

            <div>
                <button
                    onClick={() => {
                        let newTheme =
                            localStorage.getItem("theme") === "dark"
                                ? "light"
                                : "dark";
                        localStorage.setItem("theme", newTheme);
                        window.dispatchEvent(new StorageEvent("storage"));
                        if (newTheme === "light") {
                            alert(
                                "rip your eyes\nbtw light mode is pretty shit on this site"
                            );
                        }
                    }}
                    className="hover:animate-bounce fixed z-90 bottom-6 left-8 whitespace-nowrap group 
                    bg-black bg-opacity-25 rounded-xl shadow-2xl p-2 dark:text-white md:text-[1rem] lg:text-[1.125rem] 
                    inline-block font-jetbrains hover:text-plblue dark:hover:text-pllblue"
                >
                    attractBugs()
                </button>
            </div>
        </div>
    );
}
