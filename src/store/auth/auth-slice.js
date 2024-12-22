import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyC4PWNi84qnvNvJqcdJ48A1Z-FRFhDWkRU",
  authDomain: "sk-react-dec-24.firebaseapp.com",
});

const auth = getAuth(firebaseApp);

export const userRegistration = createAsyncThunk(
  "auth/user-registration",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredentials = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      if (userCredentials.user) {
        return "User created successfully.";
      }
    } catch (err) {
      return rejectWithValue("Unable to create the user");
    }
  }
);

const initialState = {
  token: null,
  isLoading: false,
  errorMessage: null,
  message: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(userRegistration.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userRegistration.fulfilled, (state, action) => {
      console.log("FULFILLED : ", action);
      state.isLoading = false;
      state.message = action.payload;
      state.errorMessage = null;
    });
    builder.addCase(userRegistration.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
    });
  },
});

const authReducer = authSlice.reducer;

export default authReducer;
