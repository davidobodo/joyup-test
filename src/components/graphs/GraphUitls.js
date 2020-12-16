export const labelsForOneMonth = () => {
    let labels = [];

    for (let i = 0; i < 31; i++) {
        const day = `November ${i + 1} 2020`;
        labels.push(day);
    }

    return labels;
};

export const labelsForOneWeek = () => {
    let labels = [];

    for (let i = 0; i < 7; i++) {
        const day = `December ${i + 1} 2020`;
        labels.push(day);
    }

    return labels;
};

export const valuesForOneMonth = () => {
    let values = [];
    for (let i = 0; i < 31; i++) {
        const val = Math.random() * (330 - 230) + 230;
        values.push(parseInt(val));
    }

    return values;
};

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

export const firstValuesForOneMonth = () => {
    let values = [];
    for (let i = 0; i < 31; i++) {
        const val = Math.random() * (1600 - 0) + 230;
        values.push(parseInt(val));
    }

    return values;
};

export const secondValuesForOneMonth = () => {
    let values = [];
    for (let i = 0; i < 31; i++) {
        const val = Math.random() * (1600 - 0) + 230;
        values.push(parseInt(val));
    }

    return values;
};
