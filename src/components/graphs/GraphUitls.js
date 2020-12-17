export const valuesFromLabels = (minHeight, maxHeight, allDates) => {
    //Check if only one actual date exists
    if (allDates[0] === "") {
        const val = parseInt(Math.random() * (maxHeight - minHeight) + minHeight);
        return ["", val, "", "", "", "", ""];
    }
    let values = [];
    for (let i = 0; i < allDates.length; i++) {
        const val = Math.random() * (maxHeight - minHeight) + minHeight;
        values.push(parseInt(val));
    }

    return values;
};
