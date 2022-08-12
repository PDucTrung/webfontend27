import { getProvinces, getDistricts, getWards } from "./api.js";
import { createOption } from "./form.js";

const provinceEl = document.getElementById("province");
const districtEl = document.getElementById("district");
const wardEl = document.getElementById("ward");

window.onload = async function () {
    try {
        const provinces = await getProvinces();

        const options = provinces.map(createOption);

        provinceEl.append(...options);
    } catch (err) {
        console.log(err);
    }
};

provinceEl.onchange = async (e) => {
    const proviceCode = e.target.value;

    try {
        const districts = await getDistricts(proviceCode);

        const options = districts.districts.map(createOption);

        districtEl.append(...options);
    } catch (err) {
        console.log(err);
    }
};

districtEl.onchange = async (e) => {
    const districtCode = e.target.value;

    try {
        const wards = await getWards(districtCode);

        const options = wards.wards.map(createOption);

        wardEl.append(...options);
    } catch (err) {
        console.log(err);
    }
};
