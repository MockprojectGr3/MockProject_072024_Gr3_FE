function authentication(decodeToken) {
    let currentDate = new Date();
    let result = false;
    
    if (decodeToken.exp * 1000 < currentDate.getTime()) {
        console.log("Token expired.");
        return result;
    } else {
        console.log("Valid token");
        result = true;
        return result;
    }
}

export { authentication };
