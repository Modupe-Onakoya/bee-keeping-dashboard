import HealthMatrix from "./HealthMatrix"

function HealthMatrixCard({ card }) {

    return (
        <div className=" pt-1 shadow-lg  ">
            <div className="grid grid-cols-4 p-4">
                <p className="flex items-center gap-2"> {card.id === "HIVE ID" ? null : <div style={{ background: `${card.img}` }} className="size-2 bg-red-300 rounded-full"> </div>}{card.id}</p>
                <p className={`flex p-1 rounded-lg w-fit text-sm ${card.color}`} > {card.status}</p>
                <p>
                    {card.pattern}
                </p>
                <p className="">{card.inspection} </p>
            </div>
        </div>

    )
}

export default HealthMatrixCard;
