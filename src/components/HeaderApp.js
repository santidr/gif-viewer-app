import AddCategory from './AddCategory'

const HeaderApp = ({ setCategories }) => {
    return (
        <header>
            <h1>GifViwerApp</h1>
            <AddCategory 
                setCategories={setCategories}
            />
        </header>
    );
}
 
export default HeaderApp;