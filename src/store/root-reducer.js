import { combineReducers } from "redux";
import { themeReducer } from "./theme/theme-reducer";
import { countryReducer } from "./countries/countries-reducer";


export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countryReducer
});