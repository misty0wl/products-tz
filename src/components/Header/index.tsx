// src/components/Header.tsx
import React from 'react';
import unlikedHeartSVG from '../../../public/icons/heart_icon_unliked.svg'
import likedHeartSVG from '../../../public/icons/heart_icon_liked.svg'
import styles from './Header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {setIsFavourite} from "../../redux/slices/productsSlice.ts";


const Header: React.FC = () => {

    const isFavourite = useSelector((state: RootState) => state.products.isFavourite)
    const dispatch: AppDispatch = useDispatch();

    const changeFavouriteHandler = () =>{
        dispatch(setIsFavourite(!isFavourite));
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div onClick={changeFavouriteHandler} className={styles.liked}>
                    {!isFavourite ? <img className={styles.likedLogo} src={unlikedHeartSVG} alt='Избранное'/> :
                        <img className={styles.likedLogo} src={likedHeartSVG} alt='Избранное'/>}
                    <span className={styles['liked__title']}>Избранное</span>
                </div>
            </div>
        </header>
    );
};

export default Header;