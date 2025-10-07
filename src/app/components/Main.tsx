import Discord from "../components/Discord"

export default function Main() {
    return(
        <div className="flex flex-col">
            <div>
                <p className="text-4xl font-bold font-[family-name:var(--font-unbounded)]">haiii 👋</p>
            </div>
            <div className="flex flex-col gap-10 xl:gap-0 xl:flex-row justify-between items-start xl:items-center w-full mt-4">
                <div>
                    <p className="text-xl font-[family-name:var(--font-sour-gummy)]">
                    i'm lionz, hope you are doing well<br/>
                    mostly busy clicking circles, striking the counter or barking at other dogs<br/>
                    I also like to code sometimes, you should totally go check it or smth..<br/>
                    sometimes i also work on
                    <a className="relative underline text-[#f97af8] hover:text-[#ff00ff] transition ml-1 
                    before:content-[''] before:absolute before:left-0 before:bottom-0 before:w-0 before:h-full 
                    before:bg-[#f97af8] before:transition-all before:duration-300 hover:before:w-full hover:before:z-[-1]"
                    href="https://github.com/osukomako" target="_blank">komako</a> or make silly websites like this one<br/>
                    thanks for stopping by &gt;w&lt;
                    </p>
                </div>
                <Discord />
            </div>
        </div>
    )
}