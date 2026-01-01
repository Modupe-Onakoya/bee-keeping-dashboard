import HealthMatrixCard from "./HealthMatrixCard"
import MatrixHeader from "./MatrixHeader"
import Threat from "./Threat"

function HealthMatrix() {
    const matrixs = [
        {
            id: "HIVE ID",
            status: "QUEEN STATUS",
            pattern: "BROOD PATTERN",
            inspection: "LAST INSPECTION"
        }, {
            id: "Hive 001",
            status: "Healthy (Active)",
            pattern: "Solid",
            inspection: "2 days ago"

        },
        {
            id: "Hive 002",
            status: "Superseded",
            pattern: "Spottu",
            inspection: "1 day ago"
        }, {
            id: "Hive 003",
            status: "Healthy (Active)",
            pattern: "Solid",
            inspection: "5 days ago"
        }, {
            id: "Hive 004",
            status: "check required",
            pattern: "irregular",
            inspection: "Today"
        },
    ]
    const threatMonitor = [
        {
            head: "HIGH PROBABILITY",
            head2: "Varroa Milte Detected",
            color: "red"
        },
        {
            head: "WARNING",
            head2: "High Humidity Spike",
            color: "yellow"

        }, {
            head: "NOTICE",
            head2: "Weather Alert",
            color: "blue"

        },
    ]
    return (
        <div className="px-50  py-10">
            <MatrixHeader />

            <div className="flex justify-between gap-12">
                <div className="w-[80%] over-flow:hidden " >
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