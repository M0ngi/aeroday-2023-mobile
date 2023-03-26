const getHeaders = (accessToken) => {
    return accessToken ? {
        Authorization: accessToken
    } : {}
}

export default getHeaders;