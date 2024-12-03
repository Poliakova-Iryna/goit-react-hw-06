import s from './SearchBox.module.css';

const SearchBox = ({ searchValue, onSearchChange }) => {
    return (
        <div>
            <label className={s.label}>
                <span className={s.span}>Find contacts by name</span>
                <input className={s.input}
                 type='text'
                 value={searchValue}
                 onChange={onSearchChange} 
                />
            </label>
        </div>
    )
}

export default SearchBox