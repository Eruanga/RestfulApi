
const toggle = document.querySelector('.toggle');
const icon = document.querySelector('.bx');
const countries = document.querySelector('.countries');
const regions = document.querySelectorAll('.regions');
const regionNam = document.getElementsByClassName('regionName');
const search = document.querySelector('.search');
const countryFlag = document.querySelector('.countryFlag');
const countryNameo = document.querySelector('.countryName');
const countryPopulation = document.querySelector('.countryPopulation');




//I'm trying out a search event listener using the input. Note = this function below activated the region search.







//Now, i want to try if i can get the "search by country to work properly"

// async function searchI(){
//     // Replace this with your actual search logic
//     var searchInput = document.querySelector('.search');
//     var searchTerm = searchInput.value;
//     alert('Searching for: ' + searchTerm);
//     const url   = await fetch(`https://restcountries.com/v2/name/${searchTerm}`)
//     const res = await url.json()
//     console.log(res.length)
//     if(res.length > 1){
//         res.forEach (api => {
//             showCountry(api);
//             console.log(api)
//             console.log('dcgcxgcx')
//         }
//         );
//     }
//   };


// window.addEventListener('DOMContentLoaded', function() {
//     var searchInput = document.querySelector('.search');
//     searchInput.addEventListener('keydown', function(event) {
//       if (event.key === 'Enter') {
//         event.preventDefault(); // Prevent form submission
//         searchI();
//     }
//     });
//   });











toggle.addEventListener('click', e => {
    document.body.classList.toggle('dark-mode');
    toggle.classList.toggle('dark-mode');
    icon.classList.toggle('bxs-moon');
    dropDown.classList.toggle('dark-mode');
})


const dropDown = document.querySelector (".dropdownMenu");
const dropOptions = document.querySelector(".drop-options");

dropDown.addEventListener('click', e => {
   dropOptions.classList.toggle('show-options');
})


async function getCountries() {
    const URL = await fetch('https://restcountries.com/v3.1/all');
    const res = await URL.json();
    console.log(res);
    res.forEach (api => {
        showCountry (api);
    }
    );
}

getCountries();

function showCountry(data){
    const country = document.createElement('div');
    country.classList.add('country');
    country.innerHTML = 
        `<div class = "country-img">
            <img src=${data.flags.png} alt = " Country image goes here">
        </div>

        <div class = "country-details">
            <h5 class="countryName"><strong>${data.name.official}</strong></h5>
            <p><strong>Population: </strong>${data.population}</p>
            <p class="regionName"><strong>Region: </strong>${data.region}</p>
            <p><strong>Capital: </strong>${data.capital}</p>
        <div>`

    countries.appendChild(country);
    country.addEventListener("click",()=>{
        showCountryDetail(data)
    })



}

const countryName = document.getElementsByClassName('countryName');

search.addEventListener('input', e =>{
    Array.from(countryName).forEach(country=>{
        if (country.innerText.toLowerCase().includes(search.value.toLowerCase())){
            country.parentElement.style.display = "grid";
        } else {
            country.parentElement.parentElement.style.display = "none";
        }
    })
})

const regionName = document.getElementsByClassName('regionName');

regions.forEach (region => {
    region.addEventListener ('click', e=>{
        console.log("hi");
        Array.from(regionName).forEach(element =>{
            if (element.innerText.includes(region.innerText) || region.innerText === "All") {
                element.parentElement.parentElement.style.display = "grid";
            } else {
                element.parentElement.parentElement.style.display = "none";
            }
            console.log("done");
        })
    })
})

// indian guy's javascript code below
// const back=document.querySelector(".back")
// const countryModal=document.querySelector(".countryModal");
// back.addEventListener("click", ()=>{
//     countryModal.classList.toggle("show")
// })


const countryModal= document.querySelector(".countryModal")

function showCountryDetail(data){
    // let borders =data.borders.forEach(element => {
    //     return element
    // });
   
    const keys = Object.keys(data.currencies)
    const langkeys = Object.keys(data.languages)

    // console.log(keys)
    console.log(langkeys)
    let languagesKeys
    langkeys.forEach(language=>{
        languagesKeys =data.languages[language]
    })
    console.log(languagesKeys)
   
    // console.log(data.languages[langkeys])
    // console.log(langkeys)
    // console.log(keys[1])
    // console.log(keys.name)

    countryModal.classList.toggle("show")
    countryModal.innerHTML=`      
    <nav class="quesNav">
    <section class="container quesHold">
    <h1>Where in the world?</h1>
    
    <button class="toggle">       <img class="bx bx-moon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAZhJREFUSEu1lYExBEEQRd9FgAgQASJABIgAESACRIAIkAERIAMiQATIQD3VczW3N7s7W267amvm6mb/7/79p3fCyDEZGZ8+gmXgEDgF3K8MTaiL4Ai4CmBxf7J9NU8bwV1kLtAbsAG8ADvVyHGwRHABnEfGVvENPC2KwAwFM3aB58h6YQQCbgOXgJUYNvcL+ADW/yPRGvAe0rhXmhSv0YdjwP5UR94Drahr7gG1z8Pft4BESpeTd5LlBKm5uTz5y0q0GhVYSVXkBEn/1NwmwGY0fWkISU5wDZwAZ4D7UuiyB0ASK7Lqxy7JShLdxGhok0BX2ei97IDVp7BS42+s5ATpDtTacT8SEdCK8vgEdOLcsEuNPAgpqhoZYAIqrWNlKnNzVCQ7SrQ1xI5hba3sUJzeo9IsSpfK1Uok6wvlEtz+zFzGEoGHbJqleqF0io0vhWcFlsCYM0jbuPZF9fRjY1iNlbj62FhN4epZZVFeLTwTfV80M9OSTZfkIH4nBC9K2UeQgMzUxrn6WIUyunbOpVqCvia3/j86wS+UkVUZlM9ZYAAAAABJRU5ErkJggg=="/> dark mode</button>
</section>
</nav>
<hr>
<section class="container">
    <button class="back">Back</button>
    <div class="modal">
        <div class="leftModal">
            <!-- this is the image source the indian guy used -->
            <img src="${data.flags.png}" alt="">
        </div>
        <div class="rightModal">
            <h1>${data.name.official}</h1>
            <div class="modalInfo">
                <div class="innerLeft inner">
                    <p><strong>Native Name: </strong>${data.name.common}</p>
                    <p><strong>Population: </strong>${data.population}</p>
                    <p><strong>Region: </strong>${data.region}</p>
                    <p><strong>Sub-region: </strong>${data.subregion}</p>
                    <p><strong>Capital: </strong>${data.capital}</p>
                    <p>
                    <div class="innerBottom inner bottomFirst">
                            <p><strong>Border Countries: </strong><a href="#">${data.borders}</a></p>
                    </div>
                </div>
                <div class="innerRight inner">
                    <p><strong>Top Level Domain: </strong>${data.tld}</p>
                    <p><strong>Currencies: </strong>${data.currencies[keys[0]].name}, ${data.currencies[keys[0]].symbol}</p>
                    <p><strong>Languages: </strong>${languagesKeys}</p>
                </div>
                <section class="bord">
                <div class="modal bord">
        <div class="innerBottom inner">
            <p><strong>Border Countries: </strong>${data.borders}</p>
        </div>
    </div>
</section>
            </div>
        </div>
    </div>

</section>

    
    `;

    const toggle= countryModal.querySelector(".toggle")
    toggle.addEventListener('click', e => {
        document.body.classList.toggle('dark-mode');
        toggle.classList.toggle('dark-mode');
        icon.classList.toggle('bxs-moon');
        dropDown.classList.toggle('dark-mode');
    })

    const back= countryModal.querySelector(".back")
        back.addEventListener("click", ()=>{
            countryModal.classList.toggle("show")
        })
    
    // fetch('https://restcountries.com/v3.1/data.borders')
    //     .then(response => response.json())
    //     .then(data => {
    //        var button = document.createElement("button");
    //        button.textContent = data.buttonText;
    //        button.className = "innerBottom inner";

    //        var buttonWrapper = document.getElementById("buttonWrapper");
    //        buttonWrapper.appendChild(button);
    //     })
    //     .catch(error => {
    //         console.error('Error: ', error);
    //     });

}
