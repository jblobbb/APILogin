class APIutils {

    async login(apiContext: any, loginPayLoad: any){
        const loginResponse = await apiContext.post("https:rahulshettyacademy.com/api/ecom/auth/login", {data:loginPayLoad});
        return loginResponse.json();
    }
} module.exports={APIutils};