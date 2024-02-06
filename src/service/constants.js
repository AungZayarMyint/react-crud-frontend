const domain = process.env.REACT_APP_DOMAIN;

export const POST_API = `${domain}posts`;
export const POST_DETAIL_API = (id) => `${domain}post/${id}`;
export const AUTH_API = (mode) => `${domain}${mode}`;
