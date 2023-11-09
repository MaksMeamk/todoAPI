

export const EDIT_TITLE = 'EDIT_TITLE';
export const EDIT_STATUS = 'EDIT_STATUS';

export const editStatus = () => {
    return {
        type: EDIT_STATUS,
    };
}


export const editTitle = (title) => {
    return {
        type: EDIT_TITLE,
        payload: title
    }
}