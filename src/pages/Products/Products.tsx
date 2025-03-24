import Categories from "../../components/Categories";
import ProductBlock from "../../components/ProductBlock";
import styles from './Products.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {useEffect} from "react";
import {fetchProducts} from "../../redux/slices/productsSlice.ts";


const Products = () => {

    const categoryId = useSelector((state: RootState) => state.products.category)
    const status = useSelector((state: RootState) => state.products.loading)
    const items = useSelector((state: RootState) => state.products.items)
    const searchValue = useSelector((state: RootState) => state.products.searchValue)
    const isFavourite = useSelector((state: RootState) => state.products.isFavourite)
    const dispatch: AppDispatch = useDispatch();

    const getProducts = () => {
        dispatch(fetchProducts());
    }

    const searchProducts = items.filter(item => item.title.toLowerCase().includes(searchValue.toLowerCase()));
    const likedItems = searchProducts.filter(item => item.isLiked);
    const productsToShow = isFavourite
        ? likedItems
        : (categoryId > 0 ? searchProducts.filter(item => item.category === categoryId) : searchProducts);


    useEffect(() => {
        getProducts()
    }, [])



    return (
        <div className={styles.wrapper}>
            <Categories/>
            {status === 'pending' ? (
                <p>Загрузка данных...</p>
            ) : status === 'failed' ? (
                <h2>Продуктов не найдено</h2>
            ) : (
                <div className={styles.productContainer}>
                    {productsToShow.length > 0 ? (
                        productsToShow.map(item => <ProductBlock key={item.id} item={item}/>)
                    ) : isFavourite ? (
                        <h2>Предметов в избранном нет</h2>
                    ) : (
                        <h2>Товаров нет</h2>
                    )}
                </div>
            )}
        </div>
    );
};

export default Products