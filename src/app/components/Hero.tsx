'use client';
import Image from "next/image";

export default function Hero() {
    return(
        <div className="flex flex-col">
            <p className="text-7xl font-bold font-[family-name:var(--font-unbounded)]"><span className="text-[#f97af8]">Li</span>onz</p>
            <div className="flex">
                <p className="text-zinc-400 text-base font-[family-name:var(--font-sour-gummy)]">also known as @femd0g</p>
                <div className='ml-1 flex gap-1 cursor-pointer' onContextMenu={(e) => e.preventDefault()}>
                    <Image 
                        alt="paws"
                        src="/emojis/paws.svg"
                        width={20}
                        height={20}
                        draggable={false}
                        className='noselect'
                    />
                    <Image 
                        alt="bone"
                        src="/emojis/bone.svg"
                        width={20}
                        height={20}
                        draggable={false}
                        className='noselect'
                        style={{ transform: 'scaleX(-1)', filter: 'hue-rotate(-10deg)' }}
                    />
                </div>
            </div>
        </div>
    )
}