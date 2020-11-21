const axios = require("axios").default;


axios.get("https://api.github.com/users/JayantGoel001").then((response)=>{
    console.log(response.data);
})

