

export const CHANGE_STATUS_LOAD_TASK = 'CHANGE_STATUS_LOAD_TASK';


export const changeStatusLoad = (isLoad) => {
    return {
        type: CHANGE_STATUS_LOAD_TASK,
        payload: !isLoad
    }

}
