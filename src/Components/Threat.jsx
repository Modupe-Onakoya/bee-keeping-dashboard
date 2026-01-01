
function Threat({ threat }) {
    return (
        <div className="shadow-sm ">
            <div className="rounded-lg px-4 py-3 shadow-lg  border-b-[transparent] " style={{ "boxShadow": `-5px 0px 0px ${threat.color}` }} >
                <h1 className="font-bold" style={{ "color": threat.color }}>{threat.head}</h1>
                <p className="font-bold">{threat.head2}</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque ea minima quia</p>
            </div>
        </div >
    )

}
export default Threat