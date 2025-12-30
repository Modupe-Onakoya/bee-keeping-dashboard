import HealthMatrix from "./HealthMatrix"

function HealthMatrixCard({ card }) {

    return (
        <div className=" pt-1 shadow-lg  ">
            <div className="flex justify-between text-start gap-1  px-2 py-4">
                <p >{card.id}</p>
                <p> {card.status}</p>
                <p>
                    {card.pattern}
                </p>
                <p className="">{card.inspection} </p>
            </div>
        </div>

    )
}

export default HealthMatrixCard;