
function Threat({ threat }) {
    return (
        <div className="shadow-sm ">
            <div className="rounded-lg text-sm shadow-lg w-[300px] px-2 py-3 gap-2 border-b-[transparent] " style={{ "boxShadow": `-5px 0px 0px ${threat.bg}` }} >
                <p className={`font-bold text-sm ${threat.color}`} >{threat.head}</p>
                <p className="font-bold text-sm">{threat.head2}</p>
                <p className="text-sm">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea minima quia</p>
            </div>
        </div >
    )

}
export default Threat