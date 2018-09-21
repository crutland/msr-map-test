export function createAction(type, payload = null) {
    if (payload == null) return { type };
    return { type, payload }
}

export function action(type, payload) {
    return function() {
        return createAction(type, payload);
    }
}