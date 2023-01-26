import { styles } from "../utils";

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
        </div>
    );
}
