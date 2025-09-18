import classNames from "classnames/bind";
import styles from "./CustomHooksDemo.module.scss";
import Users from "@/pages/CustomHooksDemo/components/Users";
import Posts from "@/pages/CustomHooksDemo/components/Posts";
import useToggle from "@/hooks/useToggle";
import Button from "@/components/Button/Button";

const cx = classNames.bind(styles);

function CustomHooksDemo() {
    const [isVisibleUser, toggleVisibleUser, setVisibleUser] = useToggle(true);
    const [isVisiblePosts, toggleVisiblePosts, setVisiblePosts] =
        useToggle(true);

    return (
        <div className={cx("wrapper")}>
            <div className={cx("wrap")}>
                {isVisibleUser && (
                    <section className={cx("section")}>
                        <Users />
                    </section>
                )}
                {isVisiblePosts && (
                    <section className={cx("section")}>
                        <Posts />
                    </section>
                )}
            </div>
            <div className={cx("btns")}>
                <Button onClick={toggleVisibleUser} primary={isVisibleUser}>
                    Toggle User
                </Button>
                <Button onClick={toggleVisiblePosts} primary={isVisiblePosts}>
                    Toggle Posts
                </Button>
            </div>
        </div>
    );
}

export default CustomHooksDemo;
