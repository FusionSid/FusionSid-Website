function CodeText(props: any) {
    return (<> <h6 className="text-[1rem] leading-[6rem] relative left-16 text-white opacity-10 font-jetbrains">{props.text}</h6> </>)
}

export default function HomeText() {
    return (
        <div className="overflow-x-hidden">
            <h1 className="h-[10vh]"></h1>
            <CodeText text="void sayHello() {" />
            <div className="leading-[6rem]">
                <h6 className="relative left-[7.5rem] lg:text-[1rem] md:text-[0.75rem] sm:text-[0.5rem] inline-block text-white opacity-10 font-jetbrains">{'printf("'}</h6>
                <h3 className="text-white lg:text-[3rem] md:text-[2rem] sm:text-[1rem] relative left-[7.5rem] inline-block font-poppinsbold">Hey! i'm</h3>
                <h1 className="text-[#1761B0] lg:text-[10rem] md:text-[7rem] sm:text-[5rem] relative left-[7.5rem] inline-block font-poppinsbold">Siddhesh</h1>

                <br></br>

                <h3 className="text-white relative left-[7.5rem] inline-block lg:text-[3rem] md:text-[2rem] sm:text-[1rem] font-poppinsbold">aka</h3>
                <h1 className="text-[#D2292D] relative left-[7.5rem] inline-block lg:text-[10rem] md:text-[7rem] sm:text-[5rem] font-poppinsbold">FusionSid</h1>
                <h6 className="text-[1rem] relative left-[7.5rem] inline-block text-white opacity-10 font-jetbrains">{'")'}</h6>
            </div>
            <CodeText text="}" />
        </div>
    )
}