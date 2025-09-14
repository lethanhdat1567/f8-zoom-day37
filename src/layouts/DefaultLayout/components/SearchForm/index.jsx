import classNames from "classnames/bind";
import styles from "./SearchForm.module.scss";
import { Search } from "lucide-react";
import Dropdown from "@/components/Dropdown";
import { useState } from "react";
import SearchGroup from "./components/SearchGroup";

const cx = classNames.bind(styles);

const searchResults = [
    {
        title: "KHÓA HỌC",
        items: [
            {
                id: 1,
                title: "JavaScript Cơ Bản",
                description:
                    "Học cú pháp, biến, hàm và vòng lặp trong JavaScript.",
                image: "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
            },
            {
                id: 2,
                title: "JavaScript Nâng Cao",
                description:
                    "Hiểu rõ ES6+, lập trình hướng đối tượng và bất đồng bộ.",
                image: "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
            },
            {
                id: 3,
                title: "JavaScript Thực Hành Dự Án",
                description:
                    "Xây dựng ứng dụng nhỏ để áp dụng kiến thức JavaScript.",
                image: "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
            },
        ],
    },
    {
        title: "BÀI VIẾT",
        items: [
            {
                id: 4,
                title: "10 mẹo JavaScript hay",
                description:
                    "Những thủ thuật JS giúp code gọn gàng và tối ưu hơn.",
                image: "https://files.fullstack.edu.vn/f8-prod/blog_posts/209/613cdf3fd481b.jpg",
            },
            {
                id: 5,
                title: "Hiểu sâu về JS Closure",
                description: "Tìm hiểu khái niệm closure và ứng dụng thực tế.",
                image: "https://files.fullstack.edu.vn/f8-prod/blog_posts/1017/6172259a3e59f.png",
            },
            {
                id: 6,
                title: "Async/Await trong JS",
                description: "Cách viết code bất đồng bộ dễ hiểu và gọn hơn.",
                image: "https://files.fullstack.edu.vn/f8-prod/blog_posts/343/6142b3b4cfa6f.jpg",
            },
        ],
    },
    {
        title: "VIDEO",
        items: [
            {
                id: 7,
                title: "Học JavaScript trong 30 phút",
                description: "Video tổng hợp kiến thức JS cơ bản nhanh chóng.",
                image: "https://i.ytimg.com/vi/YFhyq-CMGtY/maxresdefault.jpg",
            },
            {
                id: 8,
                title: "JavaScript cho người mới bắt đầu",
                description:
                    "Giới thiệu JavaScript và cách viết code đầu tiên.",
                image: "https://i.ytimg.com/vi/utF5vj7Ljuo/maxresdefault.jpg",
            },
        ],
    },
];

function SearchForm() {
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div className={cx("wrapper")}>
            <Search size={16} />
            <input
                className={cx("input")}
                placeholder="Tìm kiếm khóa học, bài viết, video..."
                onFocus={() => setOpenDropdown(true)}
                onBlur={() => setOpenDropdown(false)}
            />
            <Dropdown
                open={openDropdown}
                onClose={() => setOpenDropdown(false)}
            >
                <div className={cx("dropdown")}>
                    {searchResults.map((searchResult, index) => {
                        return <SearchGroup key={index} data={searchResult} />;
                    })}
                </div>
            </Dropdown>
        </div>
    );
}

export default SearchForm;
