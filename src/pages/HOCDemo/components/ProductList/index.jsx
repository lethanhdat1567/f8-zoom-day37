import classNames from "classnames/bind";
import styles from "./ProductList.module.scss";
import withLoading from "@/hoc/withLoading";

const cx = classNames.bind(styles);

const ProductList = withLoading(() => {
    const products = ["iPhone", "Samsung", "Xiaomi"];

    return (
        <div className={cx("wrap")}>
            <h3 className={cx("title")}>Products</h3>
            {products.map((product) => (
                <div className={cx("item")} key={product}>
                    {product}
                </div>
            ))}
        </div>
    );
});

export default ProductList;
