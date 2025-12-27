
function Card({ data }) {

    return (
        <div className="flex gap-20 border ">

            <div className="flex flex-col">
                <h1>{data.head}</h1>
                <p>{data.num}</p>
                <div className="flex">
                    <p>{data.gain}</p>
                    <p>{data.duration}</p>
                </div>


            </div>
            <div> <img src={data.icon} alt="" className="size-5" /></div>
        </div>
    )
}

export default Card
