import classNames from "classnames/bind";
import styles from "./Home.module.scss";
import CourseBlock from "./components/CourseBlock/CourseBlock";

const cx = classNames.bind(styles);

const coursesData = {
    free_courses: {
        data: [
            {
                id: 7,
                title: "Ki\u1ebfn Th\u1ee9c Nh\u1eadp M\u00f4n IT",
                slug: "lessons-for-newbie",
                description:
                    "\u0110\u1ec3 c\u00f3 c\u00e1i nh\u00ecn t\u1ed5ng quan v\u1ec1 ng\u00e0nh IT - L\u1eadp tr\u00ecnh web c\u00e1c b\u1ea1n n\u00ean xem c\u00e1c videos t\u1ea1i kh\u00f3a n\u00e0y tr\u01b0\u1edbc nh\u00e9.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/7.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/7/6200b81f52d83.png",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 136546,
                videos_count: 9,
                duration: 11570,
                duration_text: "3h12p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2020-02-10T14:23:13.000000Z",
            },
            {
                id: 21,
                title: "L\u1eadp tr\u00ecnh C++ c\u01a1 b\u1ea3n, n\u00e2ng cao",
                slug: "lap-trinh-c-co-ban-toi-nang-cao",
                description:
                    "Kh\u00f3a h\u1ecdc l\u1eadp tr\u00ecnh C++ t\u1eeb c\u01a1 b\u1ea3n t\u1edbi n\u00e2ng cao d\u00e0nh cho ng\u01b0\u1eddi m\u1edbi b\u1eaft \u0111\u1ea7u. M\u1ee5c ti\u00eau c\u1ee7a kh\u00f3a h\u1ecdc n\u00e0y nh\u1eb1m gi\u00fap c\u00e1c b\u1ea1n n\u1eafm \u0111\u01b0\u1ee3c c\u00e1c kh\u00e1i ni\u1ec7m c\u0103n c\u01a1 c\u1ee7a l\u1eadp tr\u00ecnh, gi\u00fap c\u00e1c b\u1ea1n c\u00f3 n\u1ec1n t\u1ea3ng v\u1eefng ch\u1eafc \u0111\u1ec3 chinh ph\u1ee5c con \u0111\u01b0\u1eddng tr\u1edf th\u00e0nh m\u1ed9t l\u1eadp tr\u00ecnh vi\u00ean.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbaed1dd.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/21/63e1bcbb2dec5.png",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 36660,
                videos_count: 55,
                duration: 37086,
                duration_text: "10h18p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2023-02-07T02:51:00.000000Z",
            },
            {
                id: 2,
                title: "HTML CSS t\u1eeb Zero \u0111\u1ebfn Hero",
                slug: "html-css",
                description:
                    "Trong kh\u00f3a n\u00e0y ch\u00fang ta s\u1ebd c\u00f9ng nhau x\u00e2y d\u1ef1ng giao di\u1ec7n 2 trang web l\u00e0 The Band & Shopee.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/2.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/2/6200aecea81de.png",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 214394,
                videos_count: 117,
                duration: 104755,
                duration_text: "29h5p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2020-02-10T14:23:13.000000Z",
            },
            {
                id: 3,
                title: "Responsive V\u1edbi Grid System",
                slug: "responsive-web-design",
                description:
                    "Trong kh\u00f3a n\u00e0y ch\u00fang ta s\u1ebd h\u1ecdc v\u1ec1 c\u00e1ch x\u00e2y d\u1ef1ng giao di\u1ec7n web responsive v\u1edbi Grid System, t\u01b0\u01a1ng t\u1ef1 Bootstrap 4.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/3.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/3/6200afe1240bb.png",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 47826,
                videos_count: 34,
                duration: 23467,
                duration_text: "6h31p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2020-02-10T14:23:13.000000Z",
            },
            {
                id: 1,
                title: "L\u1eadp Tr\u00ecnh JavaScript C\u01a1 B\u1ea3n",
                slug: "javascript-co-ban",
                description:
                    "H\u1ecdc Javascript c\u01a1 b\u1ea3n ph\u00f9 h\u1ee3p cho ng\u01b0\u1eddi ch\u01b0a t\u1eebng h\u1ecdc l\u1eadp tr\u00ecnh. V\u1edbi h\u01a1n 100 b\u00e0i h\u1ecdc v\u00e0 c\u00f3 b\u00e0i t\u1eadp th\u1ef1c h\u00e0nh sau m\u1ed7i b\u00e0i h\u1ecdc.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/1.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/1/6200ad9d8a2d8.png",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 150945,
                videos_count: 112,
                duration: 87324,
                duration_text: "24h15p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2020-02-10T14:23:13.000000Z",
            },
            {
                id: 12,
                title: "L\u1eadp Tr\u00ecnh JavaScript N\u00e2ng Cao",
                slug: "javascript-nang-cao",
                description:
                    "Hi\u1ec3u s\u00e2u h\u01a1n v\u1ec1 c\u00e1ch Javascript ho\u1ea1t \u0111\u1ed9ng, t\u00ecm hi\u1ec3u v\u1ec1 IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/12.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/12/6200af2620118.png",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 41489,
                videos_count: 19,
                duration: 31276,
                duration_text: "8h41p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2020-02-10T14:23:13.000000Z",
            },
            {
                id: 14,
                title: "L\u00e0m vi\u1ec7c v\u1edbi Terminal & Ubuntu",
                slug: "windows-terminal-wsl",
                description:
                    "S\u1edf h\u1eefu m\u1ed9t Terminal hi\u1ec7n \u0111\u1ea1i, m\u1ea1nh m\u1ebd trong t\u00f9y bi\u1ebfn v\u00e0 h\u1ecdc c\u00e1ch l\u00e0m vi\u1ec7c v\u1edbi Ubuntu l\u00e0 m\u1ed9t b\u01b0\u1edbc quan tr\u1ecdng tr\u00ean con \u0111\u01b0\u1eddng tr\u1edf th\u00e0nh m\u1ed9t Web Developer.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/14/624faac11d109.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/14/624faac2ee23d.png",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 21208,
                videos_count: 28,
                duration: 17946,
                duration_text: "4h59p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2020-02-10T14:23:13.000000Z",
            },
            {
                id: 13,
                title: "X\u00e2y D\u1ef1ng Website v\u1edbi ReactJS",
                slug: "reactjs",
                description:
                    "Kh\u00f3a h\u1ecdc ReactJS t\u1eeb c\u01a1 b\u1ea3n t\u1edbi n\u00e2ng cao, k\u1ebft qu\u1ea3 c\u1ee7a kh\u00f3a h\u1ecdc n\u00e0y l\u00e0 b\u1ea1n c\u00f3 th\u1ec3 l\u00e0m h\u1ea7u h\u1ebft c\u00e1c d\u1ef1 \u00e1n th\u01b0\u1eddng g\u1eb7p v\u1edbi ReactJS. Cu\u1ed1i kh\u00f3a h\u1ecdc n\u00e0y b\u1ea1n s\u1ebd s\u1edf h\u1eefu m\u1ed9t d\u1ef1 \u00e1n gi\u1ed1ng Tiktok.com, b\u1ea1n c\u00f3 th\u1ec3 t\u1ef1 tin \u0111i xin vi\u1ec7c khi n\u1eafm ch\u1eafc c\u00e1c ki\u1ebfn th\u1ee9c \u0111\u01b0\u1ee3c chia s\u1ebb trong kh\u00f3a h\u1ecdc n\u00e0y.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/13/13.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/13/6200af9262b30.png",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 78032,
                videos_count: 112,
                duration: 99168,
                duration_text: "27h32p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2020-02-10T14:23:13.000000Z",
            },
            {
                id: 6,
                title: "Node & ExpressJS",
                slug: "nodejs",
                description:
                    "H\u1ecdc Back-end v\u1edbi Node & ExpressJS framework, hi\u1ec3u c\u00e1c kh\u00e1i ni\u1ec7m khi l\u00e0m Back-end v\u00e0 x\u00e2y d\u1ef1ng RESTful API cho trang web.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/6.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/6/6200afb926038.png",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 48948,
                videos_count: 36,
                duration: 43682,
                duration_text: "12h8p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2020-02-10T14:23:13.000000Z",
            },
            {
                id: 4,
                title: 'App "\u0110\u1eebng Ch\u1ea1m Tay L\u00ean M\u1eb7t"',
                slug: "tool-canh-bao-so-len-mat",
                description:
                    "X\u00e2y d\u1ef1ng \u1ee9ng d\u1ee5ng \u0111\u01b0a ra c\u1ea3nh b\u00e1o khi ng\u01b0\u1eddi d\u00f9ng s\u1edd tay l\u00ean m\u1eb7t. Ch\u00fang ta s\u1ebd s\u1eed d\u1ee5ng th\u01b0 vi\u1ec7n ReactJS & Tensoflow \u0111\u1ec3 ho\u00e0n thi\u1ec7n \u1ee9ng d\u1ee5ng n\u00e0y.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/4/61a9e9e701506.png",
                icon_url: "https://files.fullstack.edu.vn/f8-prod/",
                price: 0,
                old_price: 0,
                is_pro: false,
                is_published: true,
                students_count: 11130,
                videos_count: 13,
                duration: 5658,
                duration_text: "1h34p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2020-02-10T14:23:13.000000Z",
            },
        ],
    },
    pro_courses: {
        data: [
            {
                id: 15,
                title: "HTML CSS Pro",
                slug: "htmlcss",
                description:
                    "Kh\u00f3a h\u1ecdc HTML CSS Pro ph\u00f9 h\u1ee3p cho c\u1ea3 ng\u01b0\u1eddi m\u1edbi b\u1eaft \u0111\u1ea7u, l\u00ean t\u1edbi 8 d\u1ef1 \u00e1n tr\u00ean Figma, 300+ b\u00e0i t\u1eadp v\u00e0 flashcards, t\u1eb7ng 3+ games, t\u1eb7ng 20+ Figma \u0111\u1ec3 th\u1ef1c h\u00e0nh, c\u1ed9ng \u0111\u1ed3ng h\u1ecdc vi\u00ean Pro nhi\u1ec7t t\u00ecnh h\u1ed7 tr\u1ee3 nhau, mua m\u1ed9t l\u1ea7n h\u1ecdc m\u00e3i m\u00e3i.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/15/62f13d2424a47.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/15/62385d6c63dfa.png",
                price: 1299000,
                old_price: 2500000,
                is_pro: true,
                is_published: true,
                students_count: 0,
                videos_count: 590,
                duration: 420602,
                duration_text: "116h50p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2022-08-18T17:00:00.000000Z",
            },
            {
                id: 19,
                title: "JavaScript Pro",
                slug: "javascript",
                description:
                    "Kh\u00f3a h\u1ecdc JavaScript Pro n\u00e0y l\u00e0 n\u1ec1n t\u1ea3ng v\u1eefng ch\u1eafc \u0111\u1ec3 h\u1ecdc ti\u1ebfp React, Vue.js, Node.js, v.v. M\u1ee5c ti\u00eau l\u00e0 gi\u00fap b\u1ea1n c\u00f3 th\u1ec3 l\u00e0m ch\u1ee7 JavaScript th\u00f4ng qua vi\u1ec7c am hi\u1ec3u c\u01a1 ch\u1ebf ho\u1ea1t \u0111\u1ed9ng c\u1ee7a ng\u00f4n ng\u1eef.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/19/66aa28194b52b.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/19/62f13cb685c81.png",
                price: 1399000,
                old_price: 3299000,
                is_pro: true,
                is_published: true,
                students_count: 0,
                videos_count: 254,
                duration: 178476,
                duration_text: "49h34p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2024-08-08T17:00:00.000000Z",
            },
            {
                id: 27,
                title: "Ng\u00f4n ng\u1eef Sass",
                slug: "sass",
                description:
                    "\u0110\u00e2y l\u00e0 m\u1ed9t kh\u00f3a h\u1ecdc nh\u1ecf \u0111\u01b0\u1ee3c t\u00e1ch ra t\u1eeb 2 ch\u01b0\u01a1ng h\u1ecdc trong kh\u00f3a HTML CSS Pro. Ki\u1ebfn th\u1ee9c v\u1ec1 Sass trong kh\u00f3a n\u00e0y b\u1ea1n c\u00f3 th\u1ec3 \u00e1p d\u1ee5ng ngay v\u00e0o c\u00e1c d\u1ef1 \u00e1n c\u1ee7a b\u1ea1n.",
                image_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/27/64e184ee5d7a2.png",
                icon_url:
                    "https://files.fullstack.edu.vn/f8-prod/courses/27/64e0daf212fad.png",
                price: 299000,
                old_price: 400000,
                is_pro: true,
                is_published: true,
                students_count: 0,
                videos_count: 27,
                duration: 22690,
                duration_text: "6h18p",
                user_progress: 0,
                last_completed_at: null,
                published_at: "2023-08-19T15:06:00.000000Z",
            },
        ],
    },
};

function Home() {
    return (
        <div className={cx("wrapper")}>
            <div className="container">
                <CourseBlock
                    title="Khóa học pro"
                    courses={coursesData.pro_courses.data}
                />
                <CourseBlock
                    title="Khóa học miễn phí"
                    courses={coursesData.free_courses.data}
                />
            </div>
        </div>
    );
}

export default Home;
