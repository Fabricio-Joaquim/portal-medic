
export const Loading = () => {

    const cirle = "w-12 h-12 bg-black rounded-full absolute"
    return (
        <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full bg-slate-400 bg-opacity-50 z-50">
            <div className="loader w-36 h-36 relative animate-spinPerson">
                <div className={`top-0 left-0 ${cirle}`}></div>
                <div className={`top-0 right-0 ${cirle}`}></div>
                <div className={`bottom-0 left-0 ${cirle}`}></div>
                <div className={`bottom-0 right-0 ${cirle}`}></div>
            </div>
        </div>
    )
}
