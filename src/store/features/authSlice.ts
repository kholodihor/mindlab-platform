import { createSlice } from "@reduxjs/toolkit"
import { persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"
import { RootState } from "@/store/store.tsx"

const initialState: { token: string | null } = {
  token: null
}

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveToken(state, { payload }) {
      state.token = payload
    },
    clearToken(state) {
      state.token = null
    }
  }
})

export const persistedAuthReducer = persistReducer(
  {
    key: "token",
    storage
  },
  authSlice.reducer
)

export const { saveToken, clearToken } = authSlice.actions

export const selectToken = (state: RootState) => state.auth.token
