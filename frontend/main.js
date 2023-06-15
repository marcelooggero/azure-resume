window.addEventListener('DOMContentLoaded', (event) => {
  getVisitCount();
})

//const functionApi = 'https://maoresume.azurewebsites.net/api/HttpTrigger1?code=FyUOUw-uxFTwum6pjUzRiuoJJN6By5mOA4Jh9B3FP1QWAzFujiG7LQ==';
const functionApi ='https://maoresume2.azurewebsites.net/api/GetResumeMao2?code=ntC9UUNOY0AG9TQ_0-tz12ZrCInzUZweBanoT4YjZMbuAzFuG0Qa2A==';
                            
//const functionApi = 'http://localhost:7071/api/GetResumeMao2';

const getVisitCount = () => {
  let count =30;
  fetch(functionApi).then(response => {
    return response.json()
  }).then(response =>{
    console.log("website called function API");
    count = response.count;
    document.getElementById("counter").innerText = count;
  }).catch(function(error){
    console.log(error);
  });
  return count;
}