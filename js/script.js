// Get API Key for the Openweather
//Api Request, and it will bring back object for Dom Maniuplation
var apiCall = "https://api.openweathermap.org/data/2.5/onecall?lat=40.7128&lon=74.0060&appid=072a07635f36c67ff60820814a7c8b80"

fetch(apiCall).then(function(res){
    return res.json()
}).then(function (data){
    console.log(data)
})



//pulling the apicall that we have and use DOM maniuplation and show to User