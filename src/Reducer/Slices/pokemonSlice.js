import { createSlice } from "@reduxjs/toolkit";
import { getAllPokemons } from "../../Services/getAllPokemons";

export const pokemonSlice = createSlice({
    name: "pokemons",
    initialState: {
        Pokemons: [{}],
        curPokemon: 0
    },
    reducers: {
        setPokemonList: (state, action) => {
            state.Pokemons = action.payload;
        },  // reducers are defined as functions
        setCurPokemon: (state, action) => {
            state.curPokemon = action.payload;
        }
    }
})

export const { setPokemonList, setCurPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;

export const fetchAllPokemons = () => (dispatch) => {
    const data = {
        url: "https://pokeapi.co/api/v2/pokemon",
        method: 'GET',
        params: {
            offset: 0,
            limit: 1126
        }
    }
    getAllPokemons(data)
        .then(res => {
            console.log(res);
            dispatch(setPokemonList(res));
        })
        .catch(err => {
            console.log(err);
        })
}
