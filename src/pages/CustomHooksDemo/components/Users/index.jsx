import classNames from "classnames/bind";
import styles from "./Users.module.scss";

import Button from "@/components/Button/Button";
import useApi from "@/hooks/useApi";

const cx = classNames.bind(styles);

function Users() {
    const { data, loading, error, refetch } = useApi(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div>
            <Button primary className={cx("btn")} onClick={refetch}>
                Refetch User Data
            </Button>
            {data?.map((item) => (
                <div key={item.id}>{item.name}</div>
            ))}
        </div>
    );
}

export default Users;
