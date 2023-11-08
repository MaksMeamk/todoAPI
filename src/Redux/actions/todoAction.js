

export const EDIT_TITLE = 'EDIT_TITLE';

export const editTitle = (title) => {

    return {
        type: EDIT_TITLE,
        payload: title
    }

}