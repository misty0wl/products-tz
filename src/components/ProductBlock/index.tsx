import React from 'react'
import styles from './ProductBlock.module.scss';
import unlikedHeartSVG from '../../../public/icons/heart_icon_unliked.svg'
import likedHeartSVG from '../../../public/icons/heart_icon_liked.svg'
import recycleBinSVG from '../../../public/icons/recycle_bin.svg'
import {deleteProduct, Product, setIsLikedProduct} from "../../redux/slices/productsSlice.ts";
import {useDispatch} from "react-redux";
import {AppDispatch} from "../../redux/store.ts";
import { Link } from "react-router";


interface ProductBlockProps {
    item: Product;
}

const ProductBlock = ({item}: ProductBlockProps) => {

    const dispatch: AppDispatch  = useDispatch()

    const likeChangeHandler = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        dispatch(setIsLikedProduct({
                id: item.id,
                isLiked: !item.isLiked,
            }));
    };

    const onRemoveProductHandler = (event: React.MouseEvent<HTMLImageElement>) =>{
        event.stopPropagation();
        if (confirm(`Вы уверены что хотите удалить ${item.title}?`)) {
            dispatch(deleteProduct(item.id));
        }
    }

    return (

        <div className={styles.card}>
            <Link to={`/products/${item.id}`} className={styles.productLink}>
            <img
                className={styles.image}
                src={item.imageUrl}
                alt={`Фото ${item.title}`}
            />
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>
                {item.description}
            </p>
            </Link>
            <div className={styles.actions}>
                <div onClick={likeChangeHandler} className={styles.likeIcon}>
                    <img
                        src={!item.isLiked ? unlikedHeartSVG : likedHeartSVG}
                        alt={`Лайк для товара ${item.title}`} />
                </div>
                <span className={styles.price}>{item.price} ₽</span>
                <img onClick={onRemoveProductHandler}
                    src={recycleBinSVG}
                    alt={`Иконка удаления для товара ${item.title}`}
                    className={styles.deleteIcon}
                />
            </div>
        </div>
    );
};

export default ProductBlock;