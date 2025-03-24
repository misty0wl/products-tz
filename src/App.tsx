import React from 'react'
import Products from "./pages/Products/Products.tsx";
import {Route, Routes} from "react-router";
import MainLayout from "./layouts/mainLayout.tsx";
import FullProduct from "./pages/FullProduct/FullProduct.tsx";
import CreateProduct from "./pages/CreateProduct/CreateProduct.tsx";




const App: React.FC = () => {
    return (
        <>
            <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route path='' element={<Products/>}></Route>
                <Route path='products/:id' element={<FullProduct />}></Route>
                <Route path='/create-product' element={<CreateProduct/>}></Route>
                <Route path="*" element={<h2>404 - Страница не найдена</h2>} />
            </Route>
            </Routes>
        </>
    )
}

export default App
