import axios from "axios";
import { route } from "constants/";

const router = axios.create({ baseURL: route.local });

export const GET_PRODUCTS = async () => await router.get("/");
