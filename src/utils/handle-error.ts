import { AxiosError } from "axios";
import { Response } from "../types";

export function handleError<T>(error: unknown): Response<T> {
    if (error instanceof AxiosError) {
        console.error(`Error HTTP: ${error.response?.status} - ${error.response?.data?.message}`);

        return {
            status: error.response?.status || 500,
            success: false,
            message: error.response?.data?.message || "Error desconocido",
            data: undefined,
        };
    }

    return {
        status: 500,
        success: false,
        message: "Ocurrió un error inesperado",
        data: undefined,
    };
}