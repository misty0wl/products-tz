import React from "react";
import {Link, useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import styles from './FullProduct.module.scss'


const FullProduct = () => {

    const {id} = useParams()
    const navigate = useNavigate();
    const [productObj, setProductObj] = useState<{
        title: string;
        price: number;
        imageUrl: string;
        description: string;
    }>()

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await axios.get(`https://67de9968471aaaa7428500a8.mockapi.io/products/${id}`)
                setProductObj(res.data)
            } catch {
                alert('Ошибка при получении продукта')
                navigate('/')
            }
        }
        fetchProduct()
    }, [id])


    const nextChangeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (id) {
            navigate(`/products/${+id + 1}`)
        }
    }

    const prevChangeHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (id) {
            navigate(`/products/${+id - 1}`)
        }
    }

    if (!productObj) {
        return <p>Загрузка продукта...</p>
    }

    return (
        <div className={styles.wrapper}>
            <img
                className={styles.image}
                src={productObj.imageUrl}
                alt={`Картинка для продукта ${productObj.title}`}
            />
            <div className={styles.info}>
                <h2 className={styles.title}>{productObj.title}</h2>
                <p className={styles.description}>{productObj.description}</p>
                <h3 className={styles.price}>{productObj.price} ₽</h3>
                <div className={styles.actions}>
                    <div className={styles.navButtons}>
                        <button onClick={prevChangeHandler} className={styles.changepage}>{`< Назад`}</button>
                        <button onClick={nextChangeHandler} className={styles.changepage}>{`Вперед >`}</button>
                    </div>
                    <Link to="/" className={styles.escapeLink}>
                        <button className={styles.escape}>{`На главную`}</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FullProduct