import { configureStore } from '@reduxjs/toolkit'
import {productsSlice} from "./slices/productsSlice.ts";

export const store = configureStore({
    reducer: {
        products: productsSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch