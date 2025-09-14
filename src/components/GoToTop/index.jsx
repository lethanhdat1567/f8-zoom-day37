import classNames from "classnames/bind";
import styles from "./GoToTop.module.scss";
import { useEffect, useState } from "react";
import { ArrowUpFromLine } from "lucide-react";

const cx = classNames.bind(styles);

function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            className={cx("btn", { visible: isVisible })}
            onClick={scrollToTop}
        >
            <ArrowUpFromLine size={16} />
        </button>
    );
}

export default GoToTop;
