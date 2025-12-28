import assets from "../assets/assets"
import Card from "./card"

function Header() {
    const ApiData = [
        {
            head: "Total hives",
            num: 24,
            gain: +2,
            duration: "This Month",
            icon: assets.dashboard,
            color: "green"

        },
        {
            head: "Avg hives Weight",
            num: "45kg",
            gain: "+1.5kg",
            duration: "avg gain",
            icon: assets.dashboard,
            color: "green"
        },
        {
            head: "internal Temp",
            num: "34*c",
            gain: "stable",
            duration: "optimal range",
            icon: assets.thermometer,
            color: ""

        },
        {
            head: "Active alerts",
            num: 2,
            duration: "Action required immediately",
            icon: assets.bell,
            color: ""

        },
    ]
    return (

        <div className="px-64 pt-10 ">
            <div className="flex justify-between ">
                <div>
                    <h1 className="font-bold text-4xl">Apiary Overview </h1>
                    <p>Monitoring Station <span>.</span> 24 Active Hives <span>.</span> Last synced 2m ago </p>
                </div>
                <div className="flex gap-5 ">
                    <button className="flex gap-2 items-center h-fit p-2 inset-shadow-2xs rounded-sm font-bold " style={{ boxShadow: '0 0 3px 0.1px' }}><img src={assets.download} alt="" className="size-5" />Export data</button>
                    <p className="flex  gap-2 items-center h-fit p-2 font-bold bg-[#fac638] font-bold rounded-lg shadow-sm" ><img src={assets.plus} alt="" className="size-5" />log Harvest</p>
                </div>
            </div>
            <div className="flex flex-wrap pt-10 gap-2">
                {ApiData.map((data, index) => (
                    <Card key={index} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Header