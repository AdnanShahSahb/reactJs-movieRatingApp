import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const fetchingTheMovies = createAsyncThunk('movieAsdf/movieJkl', async (name) => {
    // axios <=> movieApi
    const response = await axios.get('moviesDB.json').catch((err) => {
        console.log(err, 'err');
    });
    const cleanResponse = [response.data, response.status]

    const arr = []


    if (name === undefined || name == '')
        return cleanResponse

    if (name !== undefined) {
        cleanResponse[0].map((m) => {
            if (m.Title.toLowerCase().includes(name)) arr.push([m], 200)
        })
        return arr;

    }
}
)

export const fetchingTheSeries = createAsyncThunk('seriesAsdf/seriesJkl', async (name) => {
    const responseSeries = await axios.get('seriesDB.json')
    const cleanResponseSeries = [responseSeries.data, responseSeries.status]
    const arr = []

    if (name === undefined || name == '') {
        return cleanResponseSeries
    }
    if (name !== undefined) {
        cleanResponseSeries[0].map((m) => {
            if (m.Title.toLowerCase().includes(name)) arr.push([m], 200)
        })
        return arr;
    }

})


export const fetchSpecificDetails = createAsyncThunk('specificAsdf/specificJKL', async (id) => {
    // console.log(id);
    const responseSpecific = await axios.get('/moviesDB.json').catch((e) => { console.log(e); })
    // const responseSpecificSeries = await axios.get('/seriesDB.json').catch((e) => { console.log(e); })
    const cleanResponseSpecific = [responseSpecific.data, responseSpecific.status]
    // const cleanResponseSpecific = [responseSpecific.data, responseSpecific.status]
    console.log('theOneInFetching');
    return cleanResponseSpecific[0].map((m) => {
        if (m.imdbID === id) return m
    })

})

export const fetchSpecificSeriesDetails = createAsyncThunk('specificSeriesAsdf/specificJKL', async (id) => {
    const responseSpecificSeries = await axios.get('/seriesDB.json')
    const cleanResponseSpecificSeries = [responseSpecificSeries.data, responseSpecificSeries.status]

    return cleanResponseSpecificSeries[0].map((m) => {
        if (m.imdbID === id) return m
    })
})

const movieSlice = createSlice({
    name: "movies",
    initialState: {
        movies: {},
        series: {},
        specific: {},
        specificSeries: {}
    },
    reducers: {
        removeSelectedMovieOrSeries: (state) => {
            state.specific = {};
            state.specificSeries = {};
        }
    },
    extraReducers: {
        [fetchingTheMovies.pending]: () => {
            console.log('pending');
        },
        [fetchingTheMovies.fulfilled]: (state, payload) => {
            console.log('fetched success');
            return { ...state, movies: payload }
        },
        [fetchingTheMovies.rejected]: () => {
            console.log('rejected');
        },
        [fetchingTheSeries.fulfilled]: (state, payload) => {
            return { ...state, series: payload }
        },
        [fetchSpecificDetails.fulfilled]: (state, payload) => {
            console.log('theOneInExtraReducering');

            return { ...state, specific: payload }
        },
        [fetchSpecificSeriesDetails.fulfilled]: (state, payload) => {
            return { ...state, specificSeries: payload }
        }
    }
})

export const getAllMovies = (state) => {
    return state.movies.movies
}
export const getAllSeries = (state) => {
    return state.movies.series
}
export const getSpecific = (state) => {
    console.log('theOneInExporting');
    return state.movies.specific
}

export const getSpecificSeries = (state) => {
    return state.movies.specificSeries
}
export const { removeSelectedMovieOrSeries } = movieSlice.actions;

export default movieSlice.reducer;