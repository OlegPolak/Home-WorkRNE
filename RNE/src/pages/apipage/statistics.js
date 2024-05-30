import { axiosRequest } from "./Api";

export const warInfo = async () => {
    await axiosRequest({
        url: '/war-info',
    });
};