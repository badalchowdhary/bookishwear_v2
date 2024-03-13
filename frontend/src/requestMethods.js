import axios from 'axios';

const BASE_URL = "http://localhost:5001/api/";
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZTc3Y2Y3NzRhOWY1ZDU4MWQ3YTY0MCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTcxMDE1NDQ2NSwiZXhwIjoxNzEwNDEzNjY1fQ.PNO8p_fFrWxFVWkf8f1rDCxLL3G4KoEXVzzgZt0rfAM";

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header: { token: `Bearer ${TOKEN}` }
});