'use client';

const projects = [
    {
        title: "komako::next ⏭️",
        description: "Demo website of our plans for komako. If you plan to visit; press the info button to learn more.",
        imageUrl: "/assets/crop-next-komako.png",
        faviconUrl: "https://next.komako.pw/favicon.ico",
        link: "https://next.komako.pw",
    },
    {
        title: "komako",
        description: "Github organisation hosting all komako's repositories and links to our old and current websites/projects.",
        imageUrl: "/assets/komako-github.png",
        faviconUrl: "https://avatars.githubusercontent.com/u/130175090",
        link: "https://github.com/osukomako",
    },
];

export default function Projects() {
    return (
        <div>
            <p className="text-3xl font-bold font-[family-name:var(--font-unbounded)]">Projects</p>
            <div className="flex flex-col py-4 gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className="flex flex-col gap-8 rounded-xl border-[2px] border-zinc-800 p-6 hover:scale-[1.02] transition-all duration-300 ease-in-out cursor-pointer"
                        style={{
                            backgroundImage: `linear-gradient(to bottom left, transparent, rgba(12, 12, 12, 0.90) 40%, rgba(12, 12, 12, 1) 80%), url("${project.imageUrl}")`,
                            backgroundSize: 'cover',
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: 'calc(100%) 40%'
                        }}
                        onClick={() => window.open(project.link, "_blank")}
                    >
                        {/* project favicon & title */}
                        <div className="flex items-center gap-4">
                            <img className="rounded-xl"
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