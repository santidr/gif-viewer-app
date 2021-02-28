import AddCategory from './AddCategory'

const HeaderApp = ({ setCategories }) => {
    return (
        <header>
            <h1>GifViewerApp</h1>
            <AddCategory 
                setCategories={setCategories}
            />
        </header>
    );
}
 
export default HeaderApp;