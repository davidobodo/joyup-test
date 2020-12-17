import { useState, useCallback } from "react";

const useDropdown = () => {
    //------------------------------------------------------------------
    //State
    //------------------------------------------------------------------
    const [selectedOption, setSelectedOption] = useState("Location");
    const [isDropdownOpen, setIsDropdodwnOpen] = useState(false);

    //------------------------------------------------------------------
    //Toggle the display of the dropdown
    //------------------------------------------------------------------
    const handleToggleDropdown = useCallback(() => {
        setIsDropdodwnOpen(!isDropdownOpen);
    }, [isDropdownOpen]);

    //------------------------------------------------------------------
    //If an option is selected
    //------------------------------------------------------------------
    const handleSelectOption = useCallback((e) => {
        setSelectedOption(e.target.textContent);
        setIsDropdodwnOpen(false);
    }, []);

    return {
        selectedOption,
        handleSelectOption,
        isDropdownOpen,
        handleToggleDropdown
    };
};

export default useDropdown;
