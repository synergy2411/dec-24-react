import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

export const userLogin = createAsyncThunk(
  "auth/userLogin",
  async ({ email, password }, { rejectWithValue }) => {
    try {
      const userCredentails = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const token = await userCredentails.user.getIdToken();
      return token;
    } catch (err) {
      return rejectWithValue(err.message);
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
    builder.addCase(userLogin.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(userLogin.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.message = "User logged-in successfully.";
      state.errorMessage = null;
    });
    builder.addCase(userLogin.rejected, (state, action) => {
      state.isLoading = false;
      state.errorMessage = action.payload;
      state.token = null;
      state.message = null;
    });

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
