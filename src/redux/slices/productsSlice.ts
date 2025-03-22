import type {PayloadAction} from '@reduxjs/toolkit'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get<Product[]>('https://67de9968471aaaa7428500a8.mockapi.io/products')
        return response.data
    },
)

export interface Product {
    id: string;
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    category: number;
    rating: number;
    isLiked?: boolean;
}

export interface ProductsState {
    items: Product[];
    loading: 'idle' | 'pending' | 'succeeded' | 'failed';
    error: string | null;
    isFavourite: boolean;
}


const initialState: ProductsState = {
    items: [],
    loading: 'idle',
    error: null,
    isFavourite: false
}

export const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        setProducts: (state, action: PayloadAction<Product[]>) => {
            state.items = action.payload
        },
        setIsLikedProduct: (state, action: PayloadAction<{ id: string, isLiked: boolean }>) => {
            const product = state.items.find(item => item.id === action.payload.id)
            if (product) {
                product.isLiked = action.payload.isLiked
            }
        },
        setIsFavourite: (state, action: PayloadAction<boolean>) => {
            state.isFavourite = action.payload;
        },
        deleteProduct: (state, action: PayloadAction<string>) =>{
            const productIndex = state.items.findIndex(item => item.id === action.payload)
            if(productIndex > -1) {
                state.items.splice(productIndex, 1)
            }
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.items = []
            state.loading = 'pending'
        })
        builder.addCase(fetchProducts.fulfilled, (state, action) => {
            state.items = action.payload
            state.loading = 'succeeded'
        })
        builder.addCase(fetchProducts.rejected, (state) => {
            state.items = []
            state.loading = 'failed'
        })
    }
})

// Action creators are generated for each case reducer function
export const {setProducts, setIsLikedProduct, setIsFavourite, deleteProduct} = productsSlice.actions

export default productsSlice.reducer