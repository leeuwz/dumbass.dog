'use client';

import Image from 'next/image';
import { useLanyard } from 'react-use-lanyard';

//backup pfp if lanyard api is unavailble
const placeholderPfpUrl = "https://avatars.githubusercontent.com/u/96448965";

export default function Nav() {
    const { loading, status } = useLanyard({
        userId: "673304389875925003",
        socket: true,
    });

    return (
        <div className="flex justify-between items-center">
            <div className="flex md:flex-1" onContextMenu={(e) => e.preventDefault()}>
                <Image 
                    alt="pfp"
                    src={loading ? placeholderPfpUrl : `https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}` || placeholderPfpUrl}
                    width={50}
                    height={50}
                    draggable={false}
                    className='rounded-2xl'
                />
            </div>
            <div className='hidden md:flex gap-1 cursor-pointer' onContextMenu={(e) => e.preventDefault()}
                onClick={()=> window.open("https://youtu.be/FO9PaaLAhBQ", "_blank")}>
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
                        width={18}
                        height={18}
                        draggable={false}
                        className='rounded-2xl invert-[100%] md:w-[24px] md:h-[24px]'
                    />
                </a>
                <a className='flex items-center cursor-pointer rounded-xl border-[1.8px] border-zinc-800 p-2 hover:bg-zinc-800 hover:scale-[1.1] transition-all duration-50 ease-in-out'
                href="https://komako.pw/u/3" target='_blank'>
                    <Image 
                        alt="osu"
                        src="/icons/osu.svg"
                        width={18}
                        height={18}
                        draggable={false}
                        className='rounded-2xl invert-[100%] md:w-[24px] md:h-[24px]'
                    />
                </a>
                <a className='flex items-center cursor-pointer rounded-xl border-[1.8px] border-zinc-800 p-2 hover:bg-zinc-800 hover:scale-[1.1] transition-all duration-50 ease-in-out'
                href="https://youtube.com/@dvmbassdog" target='_blank'>
                    <Image 
                        alt="youtube"
                        src="/icons/youtube.svg"
                        width={18}
                        height={18}
                        draggable={false}
                        className='rounded-2xl invert-[100%] md:w-[24px] md:h-[24px]'
                    />
                </a>
                <a className='flex items-center cursor-pointer rounded-xl border-[1.8px] border-zinc-800 p-2 hover:bg-zinc-800 hover:scale-[1.1] transition-all duration-50 ease-in-out'
                href="https://github.com/leeuwz" target='_blank'>
                    <Image 
                        alt="github"
                        src="/icons/github.svg"
                        width={18}
                        height={18}
                        draggable={false}
                        className='rounded-2xl invert-[100%] md:w-[24px] md:h-[24px]'
                    />
                </a>
                {/* <a className='flex items-center cursor-pointer rounded-xl border-[1.8px] border-zinc-800 p-2 hover:bg-zinc-800 hover:scale-[1.1] transition-all duration-50 ease-in-out'
                href="mailto:lion@dumbass.dog">
                    <Image 
                        alt="mail"
                        src="/icons/mail.svg"
                        width={18}
                        height={18}
                        draggable={false}
                        className='rounded-2xl invert-[100%] md:w-[24px] md:h-[24px]'
                    />
                </a> */}
            </div>
        </div>
    )
}