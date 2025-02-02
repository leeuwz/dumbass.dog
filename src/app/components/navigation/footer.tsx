'use client';
import Image from "next/image"

export default function Footer() {
    return(
        <div className="flex justify-center text-center text-sm font-[family-name:var(--font-sour-gummy)]">2025 © dumbass.dog 
            <div className='ml-1 flex gap-1 cursor-pointer' onContextMenu={(e) => e.preventDefault()}
                onClick={()=> window.open("https://youtu.be/D8sgmuthzlM", "_blank")}>
                <Image 
                    alt="paws"
                    src="/emojis/paws.svg"
                    width={16}
                    height={16}
                    draggable={false}
                    className='noselect'
                />
                <Image 
                    alt="bone"
                    src="/emojis/bone.svg"
                    width={16}
                    height={16}
                    draggable={false}
                    className='noselect'
                    style={{ transform: 'scaleX(-1)', filter: 'hue-rotate(-10deg)' }}
                />
            </div>
        </div>
    )
}