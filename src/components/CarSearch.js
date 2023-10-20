import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm } from "../store";

function CarSearch() {
  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => {
    return state.cars.searchTerm;
  });
  function handleSearchTerm(e) {
    dispatch(changeSearchTerm(e.target.value));
  }
  return (
    <div className="list-header">
      <h3 className="title is-3">My Cars</h3>
      <div className="search field is-horyzontal">
        <label htmlFor="search" className="label">
          Search
        </label>
        <input
          className="input"
          onChange={handleSearchTerm}
          value={searchTerm}
          type="text"
        />
      </div>
    </div>
  );
}

export default CarSearch;
