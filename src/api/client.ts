import axios, { AxiosError } from "axios";
import * as _ from 'lodash';
import { dispatchErrorEvent } from "../events/errorEvent";

/**
 *  Inicializace API
 * @param contentType {string}
 */
export const createApiInstance = (contentType = "application/json; charset=utf-8") => {
    const api = axios.create({
        baseURL: process.env.REACT_APP_API_BASE_URL as string,
        headers: {
            "Content-Type": contentType,
        },
    });
    api.interceptors.request.use(
        async (config) => {
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    api.interceptors.response.use(
        (res) => res,
        (err: AxiosError) => {
            const error = err.response?.data as any;

            if (_.isArray(error)) {
                _.forEach(error, (single: { message: string; }) => {
                    dispatchErrorEvent(single.message);
                });
            } else {
                dispatchErrorEvent(error?.message || error?.Message || err.message);
            }

            return Promise.reject(err);
        }
    );

    return api;
};
