import assets from "../assets/assets"

function Card({ data }) {


    return (
        <div className="flex justify-between p-4  w-[260px] pl-2 rounded-lg shadow-lg ">

            <div className={`flex flex-col gap-1 ${data.icon === assets.bell ? "text-[#e2a9a9]" : null}`}>
                <h1>{data.head}</h1>
                <p className="text-2xl font-bold text-black " >{data.num}</p>
                <div className="flex gap-2">
                    {data.gain ? <p className={` py-0.5 px-1 text-[9px] rounded-sm ${data.color !== "" ? "  bg-[#9ae2b6]  " : null} ${data.head === "internal Temp" ? "bg-[#efe5e5]" : null}`}>{data.gain}</p> : null}
                    <p className="text-sm">{data.duration}</p>
                </div>
            </div>
            <div className={`flex flex-end h-fit  p-1 ${data.icon === assets.bell ? "bg-[#e2a9a9]" : "bg-[#efecc8]"}`}> <img src={data.icon} alt="" className="size-5" /></div>
        </div>
    )
}

export default Card
