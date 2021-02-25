import { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('')

    const handleInputChange = ({ target: { value } }) =>
        setInputValue(value);

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (inputValue.length > 0) {
            setCategories(cats => [inputValue, ...cats])
            setInputValue('')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

export default AddCategory;

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}