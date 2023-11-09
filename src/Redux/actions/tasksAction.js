

export const LOAD = 'LOAD';
export const DELETE = 'DELETE';
export const EDIT_TASK = 'EDIT_TASK';
export const EDIT_STATUS = 'EDIT_STATUS';


export const load = (arr) => {
    return {
        type: LOAD,
        payload: arr
    }
}

