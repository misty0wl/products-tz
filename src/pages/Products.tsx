import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { fetchProducts } from "../redux/slices/productsSlice.ts";
import {Product} from "../redux/slices/productsSlice.ts";
import {RootState, AppDispatch} from "../redux/store.ts";

const Products: React.FC = () =>{

    const products: Product[] = useSelector((state: RootState) => state.products.items);
    const dispatch: AppDispatch = useDispatch()

    const getProducts = async () => {
        dispatch(fetchProducts())
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div>
        </div>
    )
}

export default Products;