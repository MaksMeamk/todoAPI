export const LOAD = 'LOAD';
export const DELETE = 'DELETE';
export const EDIT_TASK = 'EDIT_TASK';
export const EDIT_READY_STATUS = 'EDIT_READY_STATUS';
export const EDIT_STATUS = 'EDIT_STATUS';

export const load = (arr) => {
    return {
        type: LOAD,
        payload: arr
    }
}
export const del = (id) => {
    return {
        type: DELETE,
        payload: { id }
    }
}
export const changeTask = (id, newTitle) => {
    return {
        type: EDIT_TASK,
        payload: { id, newTitle }
    }
}
export const editReadyStatus = (id) => {
    return {
        type: EDIT_READY_STATUS,
        payload: { id }
    }
}
export const editStatus = (id) => {
    return {
        type: EDIT_STATUS,
        payload: { id }
    }
}

