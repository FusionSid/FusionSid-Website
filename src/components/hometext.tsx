import { styles } from "../constants"

export default function HomeText() {
    const linkCodeStyle = "text-[1rem] " + styles.homeTextCode;

    return (
        <div className="overflow-x-hidden ml-16">
            <h3 className={linkCodeStyle + " mt-24"}>{"void sayHello() {"}</h3>

            <div className="whitespace-nowrap leading-[6rem] ml-10">
                <h3 className={linkCodeStyle + "  inline-block"}>{'printf("'}</h3>
                <h3 className="text-white text-[3rem] font-poppinsbold inline-block">Hey! i'm</h3>
                <h1 className="text-[#1761B0] text-[10rem] font-poppinsbold inline-block">Siddhesh</h1>
            </div>

            <div className="whitespace-nowrap leading-[8rem] ml-9">
                <h3 className="text-white text-[3rem] font-poppinsbold inline-block">aka</h3>
                <h1 className="text-[#D2292D] text-[10rem] font-poppinsbold inline-block">FusionSid</h1>
                <h3 className={linkCodeStyle + "  inline-block"}>{'")'}</h3>
            </div>

            <h3 className={linkCodeStyle}>{"}"}</h3>
        </div>
    )
}