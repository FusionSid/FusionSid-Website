import HomeText from "./hometext"
import { Moyai } from "../assets"


export default function Hero() {
    return (
        <>
            <HomeText />
            <img src={Moyai} className="w-52 absolute right-24 bottom-20"></img>
        </>
    )
}