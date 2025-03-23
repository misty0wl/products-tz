import Categories from "../../components/Categories";
import ProductBlock from "../../components/ProductBlock";
import styles from './Products.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useEffect} from "react";
import {fetchProducts} from "../../redux/slices/productsSlice.ts";


const Products = () => {

    const status = useSelector((state: RootState) => state.products.loading)
    const items = useSelector((state: RootState) => state.products.items)
    const isFavourite = useSelector((state : RootState) => state.products.isFavourite)
    const dispatch: AppDispatch = useDispatch();

    const getProducts = () =>{
        dispatch(fetchProducts());
    }

    const likedItems = items.filter((item) => item.isLiked)

    useEffect(() =>{
        getProducts()
    }, [])

    if(status==='pending'){
        return <p>Загрузка данных...</p>
    }

    return (
        <div className={styles.wrapper}>
            <Categories />
            <div className={styles.productContainer}>
                {!isFavourite ?
                    items.map((item) => {
                        return <ProductBlock key={item.id} item={item}/>
                    })
                : likedItems.length>0 ? likedItems.map((item) => {return <ProductBlock key={item.id} item={item}/>}) : <h2>Предметов в избранном нет</h2>}
            </div>
        </div>
    );
};

export default Products;