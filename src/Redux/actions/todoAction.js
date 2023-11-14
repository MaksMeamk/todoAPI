

export const EDIT_TITLE = 'EDIT_TITLE';
export const START_EDIT = 'START_EDIT';
export const END_EDIT = 'END_EDIT';

export const startEdit = (id) => {
    return {
        type: START_EDIT,
        payload: { id }
    };
}
export const endEdit = (id) => {
    return {
        type: END_EDIT,
        payload: { id }
    };
}


export const editTitle = (id, newTitle) => {
    return {
        type: EDIT_TITLE,
        payload: { id, newTitle }
    }
}