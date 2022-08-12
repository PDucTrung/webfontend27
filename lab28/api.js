const PROVINCE_API = "https://provinces.open-api.vn/api/";
const DISTRICT_API = "https://provinces.open-api.vn/api/p/";
const WARD_API = "https://provinces.open-api.vn/api/d/";

export const getProvinces = () => fetch(PROVINCE_API).then((res) => res.json());

export const getDistricts = (code) =>
    fetch(DISTRICT_API + code + "?depth=2").then((res) => res.json());

export const getWards = (code) =>
    fetch(WARD_API + code + "?depth=2").then((res) => res.json());
