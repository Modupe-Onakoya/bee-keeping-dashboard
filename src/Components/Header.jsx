import assets from "../assets/assets"
import Card from "./card"

function Header() {
    const ApiData = [
        {
            head: "Total hives",
            num: 24,
            gain: "+2",
            duration: "This Month",
            icon: assets.dashboard,
            color: "green",
            img: assets.trend,
            bg: assets.octagon

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

        <div className="px-50 pt-7">
            <div className="flex justify-between ">
                <div>
                    <h1 className="font-bold text-3xl">Apiary Overview </h1>
                    < p className="text-sm text-gray-600">Monitoring Station <span>.</span> 24 Active Hives <span>.</span> Last synced 2m ago </p>
                </div>
                <div className="flex gap-5 text-sm">
                    <p className="flex gap-2 items-center h-fit px-2 py-1 inset-shadow-2xs rounded-sm shadow-sm" ><img src={assets.download} alt="" className="size-3" />Export data</p>
                    <p className="flex  gap-2 items-center h-fit px-2 py-1 bg-[#fac638] rounded-lg shadow-sm" ><img src={assets.plus} alt="" className="size-3" />log Harvest</p>
                </div>
            </div>
            <div className="flex flex-wrap pt-4 justify-between">
                {ApiData.map((data, index) => (
                    <Card key={index} data={data} />
                ))}
            </div>
        </div>
    )
}

export default Header