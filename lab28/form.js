export const createOption = ({ name, code }) => {
    const opt = document.createElement("option");
    opt.text = name;
    opt.value = code;

    return opt;
};
