
// remove string appended to url in apiNew.tsx file
export const extractApiRoute = (url) => url.replace('/auth', '').replace('/api', '')