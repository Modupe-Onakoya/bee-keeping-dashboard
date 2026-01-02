import HealthMatrixCard from "./HealthMatrixCard"
import MatrixHeader from "./MatrixHeader"
import Threat from "./Threat"

function HealthMatrix() {
    const matrixs = [
        {
            id: "HIVE ID",
            status: "QUEEN STATUS",
            pattern: "BROOD PATTERN",
            inspection: "LAST INSPECTION",
        },
        {
            id: "Hive 001",
            status: "Healthy (Active)",
            pattern: "Solid",
            inspection: "2 days ago",
            img: "green",
            color: "bg-yellow-100"

        },
        {
            id: "Hive 002",
            status: "Superseded",
            pattern: "Spott",
            inspection: "1 day ago",
            img: "yellow",
            color: "bg-gray-100"
        }, {
            id: "Hive 003",
            status: "Healthy (Active)",
            pattern: "Solid",
            inspection: "5 days ago",
            img: "green",
            color: "bg-yellow-100"



        }, {
            id: "Hive 004",
            status: "check required",
            pattern: "irregular",
            inspection: "Today",
            img: "red",
            color: "bg-red-200"

        },
    ]
    const threatMonitor = [
        {
            head: "HIGH PROBABILITY",
            head2: "Varroa Milte Detected",
            color: "text-red-700",
            bg: "oklch(0.98 0.016 73.684)"

        },
        {
            head: "WARNING",
            head2: "High Humidity Spike",
            color: "text-yellow-700",
            bg: "oklch(0.98 0.016 73.684)"


        }, {
            head: "NOTICE",
            head2: "Weather Alert",
            color: "text-gray-500",
            bg: "gray-500"


        },
    ]
    return (
        <div className="px-50  py-10">
            <MatrixHeader />

            <div className="flex justify-between gap-5">

                <div className="w-[95%] over-flow:hidden " >
                    {matrixs.map((matrix, index) => (

                        <HealthMatrixCard key={index} card={matrix} />

                    ))}
                </div>
                <div className="flex flex-col gap-5">
                    {threatMonitor.map((threat, index) => (
                        <>
                            <Threat key={index} threat={threat} />

                        </>
                    ))}
                </div>
            </div>


        </div>
    )
}

export default HealthMatrix