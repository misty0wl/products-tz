import React, {useState} from "react";
import styles from './ProductBlock.module.scss';
import unlikedHeartSVG from '../../../public/icons/heart_icon_unliked.svg'
import likedHeartSVG from '../../../public/icons/heart_icon_liked.svg'

const ProductBlock: React.FC = (props) => {

    const [isLiked, setIsLiked] = useState<boolean>(false);

    return (
        <div className={styles.card}>
            <img
                className={styles.image}
                src={props.imageUrl}
                alt="Клавиатура"
            />
            <h3 className={styles.title}>{props.title}</h3>
            <p className={styles.description}>
                {props.description}
            </p>
            <div className={styles.actions}>
                <div onClick={() => setIsLiked((prevState) => !prevState)} className={styles.likeIcon}>
                    {!isLiked ? <img
                        src={unlikedHeartSVG}
                        alt="Иконка лайка"
                    /> : <img
                        src={likedHeartSVG}
                        alt="Иконка лайка"
                    />}
                </div>
                <span className={styles.price}>{props.price} ₽</span>
                <img
                    src="/icons/recycle_bin.svg" // Путь относительно public
                    alt="Иконка корзины"
                    className={styles.deleteIcon}
                />
            </div>
        </div>
    );
};

export default ProductBlock;