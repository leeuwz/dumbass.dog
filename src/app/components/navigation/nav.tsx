import Image from 'next/image'

export default function Nav() {
    return (
        <div className="flex justify-between p-4">
            <div>
                <Image 
                    alt="pfp"
                    src="https://avatars.githubusercontent.com/u/96448965"
                    width={50}
                    height={50}
                    className='rounded-xl opacity-90'
                />
            </div>
            <div className="flex justify-center items-center gap-6">
                <p className="text-xl">🐾🦴</p>
                <div className="flex gap-4 text-base">
                    <a href="#/">idk</a>
                    <a href="#/">idk</a>
                    <a href="#/">idk</a>
                </div>
            </div>
            <div>end</div>
        </div>
    )
}