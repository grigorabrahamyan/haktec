export const minCharTwo = (str) => {
    if (!str.name.length || str.name.length > 2 && str.ok) return {name: str.name, ok: true};
    return {name: str.name, ok: false};
};

export function validateEmail(email) {
    if (!email.length) return false;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}