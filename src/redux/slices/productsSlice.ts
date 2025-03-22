import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import type { PayloadAction } from '@reduxjs/toolkit'

export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get('https://67de9968471aaaa7428500a8.mockapi.io/products')
        return response.data
    },
)

export interface Product {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    category: number;
    rating: number;
}

export interface ProductsState {
    items: Product[];
}


const initialState: ProductsState = {
    items: [],
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload
        },
    },
        extraReducers: (builder) =>{
            builder.addCase(fetchProducts.fulfilled, (state, action) => {
                state.items = action.payload
            })
        }
})

// Action creators are generated for each case reducer function
export const { setProducts } = productsSlice.actions

export default productsSlice.reducer