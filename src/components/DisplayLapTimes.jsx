export default function DisplayLapTimes({laps}){
    return(
        <>
            <table>
                <thead>
                    <tr>
                        <th>Lap No.</th>
                        <th>Lap Time</th>
                    </tr>
                </thead>
                <tbody>
                {/* eslint-disable-next-line react/prop-types */}
                    {laps.map((lap, index) => (
                        <tr>
                            <th>{index+1}</th>
                            <td key={index}>{lap}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}