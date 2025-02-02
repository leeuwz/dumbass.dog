'use client';
import { useEffect } from "react";
import { useLanyard } from "react-use-lanyard"

function myDateAndTime() {
    const date = new Date().toLocaleString('en-EN', {
        timeZone: 'Europe/Amsterdam',
        hour12: true,
        hour: '2-digit',
        minute: '2-digit',
    });

    return date;
}

export default function Discord() {

    useEffect(() => {
        function updateDateTime() {
            const dateTimeElement = document.getElementById('dateTime');
            if (dateTimeElement) {
                dateTimeElement.textContent = myDateAndTime();
            }
        }

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const lanyard = useLanyard({
        // userId: "673304389875925003",
        userId: "673304389875925003",
        socket: true,
    });

    const { loading, status } = lanyard;

    return(
        <>
        {/* Lanyard API Returns Debugger */}
        {/* <div className="absolute top-[100%] left-[100] bg-[#161616] rounded-xl p-4 select-none">
            <p className="mb-4">Lanyard API return for <code className="bg-[#090909] rounded-xl p-1">{status?.discord_user.id}</code>:</p>
            <pre>{!loading && JSON.stringify(status, null, 4)}</pre>
        </div> */}
        <div className="">
            {/* Discord User */}
            <div className="flex items-center gap-6">
                {/* Discord User Info && Profile Picture */}
                <div className="flex flex-col text-end font-[family-name:var(--font-unbounded)] gap-1">
                    <p className="text-xl">@{status?.discord_user.username}</p>
                    <p className="text-sm">{status?.discord_status}</p>
                    <p className="text-sm"><span id="dateTime"/></p>
                </div>
                <div> {/* if activity.spotify show album cover image, else show discord pfp */}
                    {status?.activities.some(activity => activity.name === "Spotify") ? (
                        <a href={`https://open.spotify.com/track/${status?.spotify?.track_id}`} target="_blank">
                            <img className="rounded-2xl"
                            alt="spotify"
                            src={`${status?.spotify?.album_art_url}`}
                            width={128}
                            height={128}
                            />
                        </a>
                    ) : status?.activities.some(activity => activity.name === "Visual Studio Code") ? (
                        <img className="rounded-2xl"
                            alt="vscode"
                            src={`https://cdn.discordapp.com/app-assets/${status?.activities.find(activity => activity.name === "Visual Studio Code")?.application_id}/${status?.activities.find(activity => activity.name === "Visual Studio Code")?.assets?.large_image}.png`}
                            width={128}
                            height={128}
                        />
                    ) : status?.activities.some(activity => activity.name !== "Spotify") ? (
                        // if there is an activity and its not spotify display its asset image
                        <img className="rounded-2xl"
                            alt="activity"
                            src={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}`}
                            width={128}
                            height={128}
                        />
                    ) : (
                        <img className="rounded-2xl"
                            alt="pfp"
                            src={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}`}
                            width={128}
                            height={128}
                        />
                    )}
                </div>
            </div>
            {/* spotify/acitivty display text ^w^ */}
            {status?.activities.some(activity => activity.name !== "Spotify" && activity.name !== "Custom Status" && activity.name !== "Visual Studio Code") ? (
                <div className="flex justify-end mt-2 font-[family-name:var(--font-sour-gummy)]">
                    <p>
                        {`playing ${status?.activities.find(activity => activity.name !== "Spotify" && activity.name !== "Custom Status")?.name}`.length > 25 
                            ? `${`playing ${status?.activities.find(activity => activity.name !== "Spotify" && activity.name !== "Custom Status")?.name}`.substring(0, 25)}..` 
                            : `playing ${status?.activities.find(activity => activity.name !== "Spotify" && activity.name !== "Custom Status")?.name}`}
                        <span className="ml-1">⌨️🖱️</span>
                    </p>
                </div>
            ) : status?.activities.some(activity => activity.name === "Spotify") ? (
                <div className="flex justify-end mt-2 font-[family-name:var(--font-sour-gummy)]">
                    <p>
                        {status?.spotify && `${status.spotify.song} by ${status.spotify.artist}`.length > 25 
                            ? `${`${status.spotify.song} by ${status.spotify.artist}`.substring(0, 25)}..` 
                            : `${status?.spotify?.song} by ${status?.spotify?.artist}`}
                        <span className="ml-1">🎵</span>
                    </p>
                </div>
            ) : status?.activities.some(activity => activity.name === "Visual Studio Code") ? (
                <div className="flex justify-end mt-2 font-[family-name:var(--font-sour-gummy)]">
                    <p>
                        {`${status?.activities.find(activity => activity.name === "Visual Studio Code")?.assets?.large_text}, ${status?.activities.find(activity => activity.name === "Visual Studio Code")?.name}`.length > 30 
                            ? `${`${status?.activities.find(activity => activity.name === "Visual Studio Code")?.assets?.large_text}, ${status?.activities.find(activity => activity.name === "Visual Studio Code")?.name}`.substring(0, 30)}..` 
                            : `${status?.activities.find(activity => activity.name === "Visual Studio Code")?.assets?.large_text}, ${status?.activities.find(activity => activity.name === "Visual Studio Code")?.name}`}
                    </p>
                </div>
            ) : (
                <div className="hidden"/>
            )}
        </div>
        </>
    )
}