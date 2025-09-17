import DefaultLayout from "@/layouts/DefaultLayout";
import FocusDemo from "@/pages/FocusDemo";
import Home from "@/pages/Home";
import ModalDemo from "@/pages/ModalDemo";
import PerformanceDemo from "@/pages/PerformanceDemo";
import Profile from "@/pages/Profile";
import ScrollDemo from "@/pages/ScrollDemo";
import { HashRouter, Route, Routes } from "react-router";

function AppRoutes() {
    return (
        <HashRouter>
            <Routes>
                <Route element={<DefaultLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/modal-demo" element={<ModalDemo />} />
                    <Route path="/scroll-demo" element={<ScrollDemo />} />
                    <Route
                        path="/performance-demo"
                        element={<PerformanceDemo />}
                    />
                    <Route path="/focus-demo" element={<FocusDemo />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default AppRoutes;
