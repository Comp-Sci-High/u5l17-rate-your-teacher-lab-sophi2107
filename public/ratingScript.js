// Add an event listener to the form that upon submits creates a new rating
// When the rating is created redirect to the ratings page
const form = document.querySelector("form")
form. addEventListener("submit", async (e) => {
    e.preventDefault ()
    const ratingData = new FormData (form)
    const reqBody = Object.fromEntries(ratingData)
    const response = await fetch("/add", 
        window.location.href = "/rating.ejs",
        {
        
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
     
        body: JSON.stringify (reqBody)
    })
    const data = await response.json()
    console.log(data)
})