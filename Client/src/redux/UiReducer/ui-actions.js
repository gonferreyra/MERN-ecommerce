import { types } from "./ui-types";

export const uiSetError = (error) => {
    return {
        type: types.uiSetError,
        payload: error,
    }
};

export const uiRemoveError = () => {
    return {
        type: types.uiRemoveError
    }
};

export const uiStartLoading = () => {
    return {
        type: types.uiStartLoading
    }
};

export const uiFinishLoading = () => {
    return {
        type: types.uiFinishLoading
    }
};