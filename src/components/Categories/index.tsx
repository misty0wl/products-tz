import React from 'react'
import styles from './Categories.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {setCategory} from "../../redux/slices/productsSlice.ts";
import {useCallback} from "react";

const categoriesNames: string[] = ['Все', 'Клавиатуры', 'Наушники', 'Мышки', 'Корпуса', 'Ноутбуки', 'Мониторы'];

const Categories = () => {

    const categoryId: number = useSelector((state: RootState) => (state.products.category))
    const dispatch: AppDispatch = useDispatch();

    const onChangeCategory = useCallback((index: number, event: React.MouseEvent<HTMLLIElement>) => {
        event.stopPropagation()
        dispatch(setCategory(index));
    }, [dispatch])

    return (
        <div className={styles.categories}>
            <ul>
                {categoriesNames.map((category: string, index: number) => (
                    <li key={index} onClick={(event) => onChangeCategory(index, event)}
                        className={categoryId === index ? styles.active : ""}>
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Categories;