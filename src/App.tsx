import React from 'react'
import Header from "./components/Header";
import Products from "./pages/Products/Products.tsx";


const App: React.FC = () => {
    return (
        <>
            <Header />
            <Products />
        </>
    )
}

export default App
