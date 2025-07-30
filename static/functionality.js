
const logo = document.querySelector(".logo");
const ViewForm = document.querySelector(".ViewForm")

  


ViewForm.addEventListener('submit' , (e) =>
{   
    e.preventDefault()
   const DestinationValue =  document.getElementById('PassengerDestinationValue').value
   const LocationValue =  document.getElementById('PassengerLocationValue').value
    console.log(DestinationValue)

    localStorage.setItem ('DestinationValue' , DestinationValue)
    localStorage.setItem ('LocationValue' , LocationValue)
    window.location.href = "/SearchResult.html"
})





logo.addEventListener('click', () => {
    window.location.href = "/login.html"
    console.log("haaha")
})

document.getElementById('PassengerDateValue').value = new Date().toDateInputValue();
