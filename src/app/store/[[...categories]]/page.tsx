interface CategoryProps {
    params: {
        categories: string[],
        searchParams?: string //Indico que es opcional
    }
}

export default function Category(props: CategoryProps) {
    console.log(props);
    
    const { categories } = props.params;

    return (
            <div>
                {categories && <div>Category: {categories}</div>}
            </div>    
        );
};