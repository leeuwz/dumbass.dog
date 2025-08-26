'use client';
import Image from "next/image"
import { useState } from "react" 

const projects = [
    {
        title: "komako::next ⏭️",
        description: "Demo website of our plans for komako. If you plan to visit; press the info button to learn more.",
        imageUrl: "/assets/crop-next-komako.png",
        faviconUrl: "https://next.komako.pw/favicon.ico",
        link: "https://next.komako.pw",
        date: "24.01.2025"
    },
    {
        title: "komako",
        description: "Github organisation containing all the komako repositories and links to our current websites.",
        imageUrl: "/assets/komako-github.png",
        faviconUrl: "https://avatars.githubusercontent.com/u/130175090",
        link: "https://github.com/osukomako",
        date: "12.05.2024"
    },
    {
        tite: "nyuh.xyz",
        description: "rebuilt oomf's site to be nextjs && not built using a site builder.",
        imageUrl: "/assets/nyuh-github.png",
        faviconUrl: "/assets/nyuhfavicon.png",
        link: "https://nyuh.xyz",
        date: "25.08.2025"
    }
];

export default function Projects() {
    const [sortOrder, setSortOrder] = useState<'newest' | 'oldest'>('newest');
    
    const sortedProjects = [...projects].sort((a, b) => {
        const dateA = new Date(a.date.split('.').reverse().join('-'));
        const dateB = new Date(b.date.split('.').reverse().join('-'));
        
        if (sortOrder === 'newest') {
            return dateB.getTime() - dateA.getTime();
        } else {
            return dateA.getTime() - dateB.getTime();
        }
    });

    const toggleSort = () => {
        setSortOrder(sortOrder === 'newest' ? 'oldest' : 'newest');
    };

    return (
        <div>
            <div className="flex justify-between items-center">
                <p className="text-3xl font-bold font-[family-name:var(--font-unbounded)]">Projects</p>
                <button
                    onClick={toggleSort}
                    className="px-4 py-2 rounded-lg border border-zinc-600 text-zinc-300 hover:bg-zinc-800 hover:text-white transition-all duration-200 text-sm font-medium"
                >
                    {sortOrder === 'newest' ? 'Newest' : 'Oldest'}
                </button>
            </div>
            <div className="flex flex-col py-4 gap-4">
                {sortedProjects.map((project, index) => (
                    <div
                        key={index}
                        className="relative flex flex-col gap-8 rounded-xl border-[2px] border-zinc-800 p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
                        style={{
                            backgroundImage: `linear-gradient(to bottom left, transparent, rgba(12, 12, 12, 0.8) 40%, rgba(12, 12, 12, 1) 100%), url("${project.imageUrl}")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: 'calc(100%)40%'
                        }}
                        onClick={() => window.open(project.link, "_blank")}
                    >
                        {/* project finish date */}
                        <div className="absolute bottom-[6px] right-[10px] text-zinc-400 md:text-md sm:text-sm text-xs">{project.date}</div>
                        {/* project favicon & title */}
                        <div className="flex items-center gap-4">
                            <Image
                                className="rounded-xl"
                                alt="project favicon"
                                src={project.faviconUrl}
                                width={64}
                                height={64}
                            />
                            <p className="text-xl font-medium font-[family-name:var(--font-unbounded)]">{project.title}</p>
                        </div>
                        {/* project title & desc */}
                        <div className="flex flex-col gap-2">
                            <p className="text-lg font-medium font-[family-name:var(--font-unbounded)]">{project.title}</p>
                            <p className="text-base font-[family-name:var(--font-sour-gummy)] max-w-[100%] lg:max-w-[38%]">
                                {project.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}