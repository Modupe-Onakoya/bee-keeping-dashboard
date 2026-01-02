import assets from "../assets/assets"

function MatrixHeader() {

    return (
        <>
            <div className="flex justify-between">
                <h1>
                    Hive Health Matrix
                </h1>
                <div className="flex gap-20 pr-45">
                    <p className="">
                        View all Hives
                    </p>
                    <p className="flex items-center gap-2">  <img src={assets.danger} alt="" className="size-4" />  Threat Monitor</p>
                </div>
            </div>
        </>
    )
}

export default MatrixHeader
