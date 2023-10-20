import { useDispatch, useSelector } from "react-redux";
import { addCar, changeCost, changeName } from "../store";

function CarForm() {
  const dispatch = useDispatch();
  const { name, cost } = useSelector((state) => {
    return { name: state.form.name, cost: state.form.cost };
  });

  const handleNameChange = (e) => {
    dispatch(changeName(e.target.value));
    console.log(name);
  };
  const handleCostChange = (e) => {
    const carCost = parseInt(e.target.value) || 0;
    dispatch(changeCost(carCost));
  };
  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addCar({ name, cost }));
    // dispatch(changeCost(0));
    // dispatch(changeName(""));
  }

  return (
    <div className="car-form panel">
      <h4 className="subtitle is-3">Add Car</h4>
      <form onSubmit={handleSubmit} action="">
        <div className="field-group">
          <div className="field">
            <label htmlFor="" className="label">
              Name
            </label>
            <input
              value={name}
              onChange={handleNameChange}
              type="text"
              className="input is-expanded"
            />
            <label htmlFor="" className="label">
              Cost
            </label>
            <input
              value={cost || ""}
              onChange={handleCostChange}
              type="text"
              className="input is-expanded"
            />
          </div>
        </div>
        <div className="field">
          <button className="button is-link bg-blue-600">Add car</button>
        </div>
      </form>
    </div>
  );
}

export default CarForm;
