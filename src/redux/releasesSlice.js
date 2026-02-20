import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchReleases = createAsyncThunk("releases/fetchReleases", async () => {
  const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=geolier");
  const data = await response.json();
  return data;
});

const releasesSlice = createSlice({
  name: "releases",
  initialState: {
    releases: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReleases.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchReleases.fulfilled, (state, action) => {
        state.loading = false;
        state.releases = action.payload.data;
      })
      .addCase(fetchReleases.rejected, (state) => {
        state.loading = false;
        state.error = "Errore nel fetch";
      });
  },
});

export default releasesSlice.reducer;
