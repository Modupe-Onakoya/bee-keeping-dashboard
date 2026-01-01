import assets from "../assets/assets"

function Navbar() {
    return (
        <div className="flex px-20 py-5 border-b-[transparent] shadow-sm w-full text-sm">

            <div className="flex justify-between w-full ">
                <div className="flex items-center">
                    <img src={assets.bee_logo} alt="" className="size-8" />
                    <p className="text-sm font-bold ">Apiary Manager <span className="block text-[#607afb]">Command center</span></p>
                </div>
                <ul className="flex gap-10 items-center">
                    <a href="#" className="flex gap-2 items-center px-4 py-2 rounded-sm bg-[#fac638]" > <img src={assets.dashboard} alt="" className="size-4" />  Dashboard</a>
                    <a href="#" className="flex gap-2 items-center"><img src={assets.octagon} alt="" className="size-4 flex" />Hives</a>
                    <a href="#" className="flex gap-2 items-center"><img src={assets.refresh} alt="" className="size-4 flex" />Harvest Logs</a>
                    <a href="#" className="flex gap-2 items-center"><img src={assets.cupboard} alt="" className="size-4 flex" />Inventory</a>
                    <a href="#" className="flex gap-2 items-center"> <img src={assets.bug} alt="" className="size-4 flex" />Pest Control</a>

                </ul>


                <div className="flex gap-5">
                    <div className="flex items-center">    <img src={assets.settings} alt="" className="size-4 flex items-center" /></div>

                    <p className="font-bold">Modupe BeeKeeper <span className="block text-end font-normal">Head Aparist</span></p>
                    <img src={assets.aparist} alt="" className="size-10 rounded-full " />

                </div>
            </div>

        </div>
    )
}

export default Navbar
