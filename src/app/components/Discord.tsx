"use client";
import { useEffect } from "react";
import { useLanyard } from "react-use-lanyard";

function myDateAndTime() {
    return new Date().toLocaleString("en-EN", {
        timeZone: "Europe/Amsterdam",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
    });
}

export default function Discord() {
    const placeholderTime = myDateAndTime(); // Placeholder time before effect updates

    useEffect(() => {
        function updateDateTime() {
            const dateTimeElement = document.getElementById("dateTime");
            if (dateTimeElement) {
                dateTimeElement.textContent = myDateAndTime();
            }
        }

        updateDateTime();
        const interval = setInterval(updateDateTime, 1000);
        return () => clearInterval(interval);
    }, []);

    const { loading, status } = useLanyard({
        userId: "673304389875925003",
        socket: true,
    });

    // Discord Presence placeholders while loading/fetching (scuffed asf)
    const placeholderUsername = "lionz";
    const placeholderStatus = "offline";
    const placeholderActivity = "";
    const placeholderPfpUrl = "https://avatars.githubusercontent.com/u/96448965";

    return (
        <>
            <div className="flex items-center gap-6 hidden xl:flex">
                <div className="flex flex-col text-end font-[family-name:var(--font-unbounded)] gap-1">
                    <p className="text-xl">@{loading ? placeholderUsername : status?.discord_user.username}</p>
                    <p className="text-sm">{loading ? placeholderStatus : status?.discord_status}</p>
                    <p className="text-sm">
                        <span id="dateTime">{placeholderTime}</span>
                    </p>
                </div>
                <div>
                    {loading ? (
                        <img
                            className="rounded-2xl"
                            alt="Placeholder"
                            src={placeholderPfpUrl}
                            width={128}
                            height={128}
                        />
                    ) : status?.activities.some(activity => activity.name === "Spotify") ? (
                        <a href={`https://open.spotify.com/track/${status?.spotify?.track_id}`} target="_blank">
                            <img
                                className="rounded-2xl"
                                alt="spotify"
                                src={status?.spotify?.album_art_url || placeholderPfpUrl}
                                width={128}
                                height={128}
                            />
                        </a>
                    ) : status?.activities.some(activity => activity.name === "Visual Studio Code") ? (
                        <img
                            className="rounded-2xl"
                            alt="vscode"
                            src={`https://cdn.discordapp.com/app-assets/${status?.activities.find(activity => activity.name === "Visual Studio Code")?.application_id}/${status?.activities.find(activity => activity.name === "Visual Studio Code")?.assets?.large_image}.png`}
                            width={128}
                            height={128}
                        />
                    ) : (
                        <img
                            className="rounded-2xl"
                            alt="profile"
                            src={`https://cdn.discordapp.com/avatars/${status?.discord_user.id}/${status?.discord_user.avatar}` || placeholderPfpUrl}
                            width={128}
                            height={128}
                        />
                    )}
                </div>
            </div>

            <div className="flex justify-end mt-2 font-[family-name:var(--font-sour-gummy)]">
                {loading ? (
                    <p>{placeholderActivity}</p>
                ) : status?.activities.some(activity => activity.name !== "Spotify" && activity.name !== "Custom Status" && activity.name !== "Visual Studio Code") ? (
                    <p>
                        {`playing ${status?.activities.find(activity => activity.name !== "Spotify" && activity.name !== "Custom Status")?.name}`.length > 25
                            ? `${`playing ${status?.activities.find(activity => activity.name !== "Spotify" && activity.name !== "Custom Status")?.name}`.substring(0, 25)}..`
                            : `playing ${status?.activities.find(activity => activity.name !== "Spotify" && activity.name !== "Custom Status")?.name}`}
                        <span className="ml-1">⌨️🖱️</span>
                    </p>
                ) : status?.activities.some(activity => activity.name === "Spotify") ? (
                    <p>
                        {status?.spotify && `${status.spotify.song} by ${status.spotify.artist}`.length > 25
                            ? `${`${status.spotify.song} by ${status.spotify.artist}`.substring(0, 25)}..`
                            : `${status?.spotify?.song} by ${status?.spotify?.artist}`}
                        <span className="ml-1">🎵</span>
                    </p>
                ) : status?.activities.some(activity => activity.name === "Visual Studio Code") ? (
                    <p>
                        {`${status?.activities.find(activity => activity.name === "Visual Studio Code")?.assets?.large_text}, ${status?.activities.find(activity => activity.name === "Visual Studio Code")?.name}`.length > 30
                            ? `${`${status?.activities.find(activity => activity.name === "Visual Studio Code")?.assets?.large_text}, ${status?.activities.find(activity => activity.name === "Visual Studio Code")?.name}`.substring(0, 30)}..`
                            : `${status?.activities.find(activity => activity.name === "Visual Studio Code")?.assets?.large_text}, ${status?.activities.find(activity => activity.name === "Visual Studio Code")?.name}`}
                    </p>
                ) : (
                    <div className="hidden" />
                )}
            </div>
        </>
    );
}