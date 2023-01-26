import HomeText from "./hometext"
import { Moyai } from "../assets"


export default function Hero() {
    return (
        <>
            <HomeText />
            <img src={Moyai} className="w-52 relative bottom-20 left-[75%]" alt="moyai"></img> 
            <div className="border-b-[0.1px] border-opacity-10 border-white w-full"></div>
        </>
    )
}