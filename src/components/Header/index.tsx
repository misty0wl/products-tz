import React from "react";
import unlikedHeartSVG from '../../../public/icons/heart_icon_unliked.svg'
import likedHeartSVG from '../../../public/icons/heart_icon_liked.svg'
import plusIconSVG from '../../../public/icons/plus_icon.svg'
import styles from './Header.module.scss';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../redux/store.ts";
import {setIsFavourite} from "../../redux/slices/productsSlice.ts";
import {Link} from "react-router";


const Header = () => {

    const isFavourite = useSelector((state: RootState) => state.products.isFavourite)
    const dispatch: AppDispatch = useDispatch();

    const changeFavouriteHandler = (event: React.MouseEvent<HTMLDivElement>) =>{
        event.stopPropagation()
        dispatch(setIsFavourite(!isFavourite));
    }

    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.actionsWrapper}>
                    <div onClick={changeFavouriteHandler} className={styles.actions}>
                        <img
                            className={styles.Logo}
                            src={isFavourite ? likedHeartSVG : unlikedHeartSVG}
                            alt="Избранное"
                        />
                        <span className={styles['liked__title']}>Избранное</span>
                    </div>
                    <Link to='/create-product'>
                    <div className={styles.actions}>
                        <img className={styles.Logo} src={plusIconSVG} alt="Создать продукт"/>
                        <span className={styles['liked__title']}>Создать продукт</span>
                    </div>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;