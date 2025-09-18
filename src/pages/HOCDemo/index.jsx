import classNames from "classnames/bind";
import styles from "./HOCDemo.module.scss";
import { useState } from "react";
import UserProfile from "./components/UserProfile";
import ProductList from "./components/ProductList";
import TriggerBtns from "./components/TriggerBtns/TriggerBtns";

const cx = classNames.bind(styles);

function HOCDemo() {
    const [userLoading, setUserLoading] = useState(false);
    const [productLoading, setProductLoading] = useState(false);

    return (
        <div className={cx("wrap")}>
            <div className={cx("content")}>
                <section className={cx("section")}>
                    <UserProfile isLoading={userLoading} />
                </section>
                <section className={cx("section")}>
                    <ProductList isLoading={productLoading} />
                </section>
            </div>
            <TriggerBtns
                onToggleProduct={() => {
                    setProductLoading(!productLoading);
                }}
                onToggleUser={() => {
                    setUserLoading(!userLoading);
                }}
            />
        </div>
    );
}

export default HOCDemo;
