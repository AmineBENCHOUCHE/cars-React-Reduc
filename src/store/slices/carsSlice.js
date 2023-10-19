import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    cars: [],
    searchTerm: "",
  },
  reducers: {
    addCar(state, action) {
      state.cars.push({
        //Assumption
        //action.payload === {name: "ab", cost: 130}
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      //Assumption
      //action.payload === id of the car we want to remove
      // const index = state.cars.indexOf(action.payload.id)
      // state.cars.splice(index, 1)

      const updated = state.cars.filter((car) => {
        return car.id !== action.payload;
      });

      state.cars = updated;
    },
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
      //state.searchTerm=""
    },
  },
});

export const { addCar, removeCar, changeSearchTerm } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;
