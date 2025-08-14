export function pegarBaseUrl (){
    const baseURL = __ENV.BASE_URL || 'http://localhost:3000';
    return baseURL
}