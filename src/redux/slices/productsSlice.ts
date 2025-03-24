import type {PayloadAction} from '@reduxjs/toolkit'
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'



export const putProduct = createAsyncThunk<Product, Product>(
    'products/putProducts',
    async (product: Product) => {
        const response = await axios.post<Product>(`https://67de9968471aaaa7428500a8.mockapi.io/products`, product)
        return response.data
    },
)

export const fetchProducts = createAsyncThunk<Product[]>(
    'products/fetchProducts',
    async () => {
        const response = await axios.get<Product[]>(`https://67de9968471aaaa7428500a8.mockapi.io/products?`)
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
    category: number;
    searchValue: string;
}


const initialState: ProductsState = {
    items: [],
    loading: 'idle',
    error: null,
    isFavourite: false,
    category: 0,
    searchValue: '',
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
        deleteProduct: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        setCategory: (state, action: PayloadAction<number>) => {
            state.category = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
            console.log(state.searchValue)
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
        builder.addCase(putProduct.fulfilled, (state, action) => {
            state.items.push(action.payload);
        });
    }
})

// Action creators are generated for each case reducer function
export const {
    setProducts,
    setIsLikedProduct,
    setIsFavourite,
    setCategory,
    deleteProduct,
    setSearchValue
} = productsSlice.actions

export default productsSlice.reducer