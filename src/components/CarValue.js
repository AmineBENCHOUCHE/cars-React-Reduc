import { useSelector } from "react-redux";

function CarValue() {
  const totalValue = useSelector(({ cars: { data, searchTerm } }) =>
    //TODO refactor
    data
      .filter((car) =>
        car.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .reduce((acc, car) => acc + car.cost, 0)
  );
  return (
    <div>
      <p className="total car-value">Total Cost: ${totalValue}</p>
    </div>
  );
}

export default CarValue;
