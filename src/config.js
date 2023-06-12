let Dev = false
let API;
if(Dev) {
API = "http://localhost:5000"
}else{
API = "https://goswap.online"
}


export default API;