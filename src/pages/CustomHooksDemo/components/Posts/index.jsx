import classNames from "classnames/bind";
import styles from "./Posts.module.scss";

import Button from "@/components/Button/Button";
import useApi from "@/hooks/useApi";

const cx = classNames.bind(styles);

function Posts() {
    const { data, loading, error, refetch } = useApi(
        "https://jsonplaceholder.typicode.com/posts"
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <Button onClick={refetch} className={cx("btn")} primary>
                Refetch Posts Data
            </Button>
            {data?.map((item) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
}

export default Posts;
