import './FilterByYearControl.css';

const FilterByYearControl = (props) => {
    return (
        <select
            className="filterbyyear-control"
            value={props.value}
            onChange={props.onChange}
        >
            <option value="2022">2022</option>
            <option value="2021">2021</option>
            <option value="2020">2020</option>
            <option value="2019">2019</option>
        </select>
    );
};

export default FilterByYearControl;
