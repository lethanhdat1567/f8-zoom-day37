import { useState } from "react";

const useToggle = (initialValue) => {
    const [toggleValue, setToggleValue] = useState(initialValue);

    const toggle = () => {
        setToggleValue(!toggleValue);
    };

    return [toggleValue, toggle, setToggleValue];
};

export default useToggle;
