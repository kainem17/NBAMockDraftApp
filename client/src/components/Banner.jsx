import React from "react";

const Banner = () => {
    return (
        <div className="bg-gradient-to-r from-blue-700 to-red-600
        w-full h-16 flex flex-row items-center justify-center">
            <h1 className="text-slate-50 text-xl font-semibold cursor-default">
                NBA Mock Draft App
            </h1>
            <button className="rounded border-white border-2 text-slate-50 font-semibold
            pb-1 pt-1 px-2 hover:bg-blue-700 absolute right-10">
                Log In
            </button>
        </div>
    )
}

export default Banner;