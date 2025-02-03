'use client';

import Image from 'next/image';

export default function Nav() {
    return (
        <div className="flex justify-between items-center">
            <div className="flex md:flex-1" onContextMenu={(e) => e.preventDefault()}>
                <Image 
                    alt="pfp"
                    src="https://avatars.githubusercontent.com/u/96448965"
                    width={50}
                    height={50}
                    draggable={false}
                    className='rounded-2xl'
                />
            </div>
            <div className='hidden md:flex gap-1 cursor-pointer' onContextMenu={(e) => e.preventDefault()}
                onClick={()=> window.open("https://youtu.be/D8sgmuthzlM", "_blank")}>
                <Image 
                    alt="paws"
                    src="/emojis/paws.svg"
                    width={24}
                    height={24}
                    draggable={false}
                    className='select-none'
                />
                <Image 
                    alt="bone"
                    src="/emojis/bone.svg"
                    width={24}
                    height={24}
                    draggable={false}
                    className='select-none'
                    style={{ transform: 'scaleX(-1)', filter: 'hue-rotate(-10deg)' }}
                />
            </div>
            <div className="flex-1 flex justify-end gap-2"> {/* socials */}
                <a className='flex items-center cursor-pointer rounded-xl border-[1.8px] border-zinc-800 p-2 hover:bg-zinc-800 hover:scale-[1.1] transition-all duration-50 ease-out'
                href="https://x.com/femd0g" target='_blank'>
                    <Image 
                        alt="twitter"
                        src="/icons/twitter.svg"
                        width={24}
                        height={24}
                        draggable={false}
                        className='rounded-2xl invert-[100%]'
                    />
                </a>
                <a className='flex items-center cursor-pointer rounded-xl border-[1.8px] border-zinc-800 p-2 hover:bg-zinc-800 hover:scale-[1.1] transition-all duration-50 ease-in-out'
                href="https://youtube.com/@dvmbassdog" target='_blank'>
                    <Image 
                        alt="youtube"
                        src="/icons/youtube.svg"
                        width={24}
                        height={24}
                        draggable={false}
                        className='rounded-2xl invert-[100%]'
                    />
                </a>
                <a className='flex items-center cursor-pointer rounded-xl border-[1.8px] border-zinc-800 p-2 hover:bg-zinc-800 hover:scale-[1.1] transition-all duration-50 ease-in-out'
                href="mailto:lion@dumbass.dog">
                    <Image 
                        alt="mail"
                        src="/icons/mail.svg"
                        width={24}
                        height={24}
                        draggable={false}
                        className='rounded-2xl invert-[100%]'
                    />
                </a>
                <a className='flex items-center cursor-pointer rounded-xl border-[1.8px] border-zinc-800 p-2 hover:bg-zinc-800 hover:scale-[1.1] transition-all duration-50 ease-in-out'
                href="https://github.com/leeuwz" target='_blank'>
                    <Image 
                        alt="github"
                        src="/icons/github.svg"
                        width={24}
                        height={24}
                        draggable={false}
                        className='rounded-2xl invert-[100%]'
                    />
                </a>
            </div>
        </div>
    )
}