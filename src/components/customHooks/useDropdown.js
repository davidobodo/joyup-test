import { useState, useCallback } from "react";

const useDropdown = () => {
    //------------------------------------------------------------------
    //State
    //------------------------------------------------------------------
    const [selectedOption, setSelectedOption] = useState("");
    const [isDropdownOpen, setIsDropdodwnOpen] = useState(false);

    //------------------------------------------------------------------
    //Toggle the display of the dropdown
    //------------------------------------------------------------------
    const handleToggleDropdown = useCallback(() => {
        setIsDropdodwnOpen(!isDropdownOpen);
    }, [isDropdownOpen]);

    return {
        selectedOption,
        isDropdownOpen,
        handleToggleDropdown
    };
};

export default useDropdown;
