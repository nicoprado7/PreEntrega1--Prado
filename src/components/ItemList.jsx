import { Item } from "./Item";

export const ItemList = ({products}) => {
    return (
        <div className="row">
            {products.map((product) => (
                <div className="col-md-3 mb-4" key={product.id}>
                    <div className="card w-100 align-items-center">
                        <Item product={product} />
                    </div>
                </div>
            ))}
        </div>
    );
};
