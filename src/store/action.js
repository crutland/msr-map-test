export function createAction(type, payload = null) {
    if (payload == null) return { type };
    return { type, payload }
}

export function action(type) {
    return function() {
        return createAction(type);
    }
}

export function createNamespace(ns) {
    return (strings) => `@@${ns}/${strings.join('')}`;
}