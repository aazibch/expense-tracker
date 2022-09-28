import ChartBar from './ChartBar/ChartBar';
import './Chart.css';

const Chart = (props) => {
    // Get the largest value for the year and pass it as maxValue prop.
    const dataPointValues = props.dataPoints.map(
        (dataPoint) => dataPoint.value
    );
    const totalMaximum = Math.max(...dataPointValues);

    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />
            ))}
        </div>
    );
};

export default Chart;
