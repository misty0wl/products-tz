import React, {useRef, useState, useCallback} from "react";
import styles from './Search.module.scss'
import {useDispatch} from "react-redux";
import debounce from 'lodash.debounce'
import {setSearchValue} from "../../redux/slices/productsSlice.ts";

const Search = () => {

    const [value, setValue] = useState<string>('')
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useDispatch();

    const updateSearchValue = useCallback(debounce((str:string) => {
        dispatch(setSearchValue(str));
    }, 300), [])

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
        updateSearchValue(event.target.value);
    }

    return (<div className={styles.root}>
        <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg"
             enableBackground="new 0 0 32 32" id="Glyph" version="1.1" viewBox="0 0 32 32">
            <path
                d="M27.414,24.586l-5.077-5.077C23.386,17.928,24,16.035,24,14c0-5.514-4.486-10-10-10S4,8.486,4,14  s4.486,10,10,10c2.035,0,3.928-0.614,5.509-1.663l5.077,5.077c0.78,0.781,2.048,0.781,2.828,0  C28.195,26.633,28.195,25.367,27.414,24.586z M7,14c0-3.86,3.14-7,7-7s7,3.14,7,7s-3.14,7-7,7S7,17.86,7,14z"
                id="XMLID_223_"/>
        </svg>
        <input name='search' ref={inputRef} value={value} onChange={(event) => onChangeInput(event)}
               className={styles.input} placeholder='Поиск продукта...'/>
        {value && <svg onClick={() => {
            setValue('');
            dispatch(setSearchValue(''));
            inputRef.current?.focus();
        }
        } className={styles.close} xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 0 48 48" width="48">
            <path
                d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z"/>
            <path d="M0 0h48v48h-48z" fill="none"/>
        </svg>}
    </div>);
}

export default Search