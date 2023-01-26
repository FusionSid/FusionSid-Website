import HomeText from "./hometext";
import { PersonCodingImage } from "../assets";

export default function Hero() {
    return (
        <>
            <HomeText />
            <img
                src={PersonCodingImage}
                className="w-80 relative bottom-20 left-[72%]"
                alt="moyai"
            ></img>
            <div className="border-b-[0.1px] border-opacity-10 border-white w-full"></div>
        </>
    );
}
