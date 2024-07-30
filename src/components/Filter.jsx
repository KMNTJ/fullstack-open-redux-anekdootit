import { useDispatch } from "react-redux";
import { textFilter } from "../reducers/filterReducer"; 


const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = (event) => {
    dispatch(textFilter(event.target.value))
  };

  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input onChange={handleFilterChange} />
    </div>
  );
};

export default Filter;
