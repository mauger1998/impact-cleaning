// Dropdown

document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")

    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return
    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle("active")
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown === currentDropdown) return
        dropdown.classList.remove("active")
    })
})

// Cms

let URL = "https://c82a0tvp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22beforeAfterImage%22%5D%20%7B%0A%20%20%0A%20%20%22imageUrl%22%3A%20beforeAfterImage.asset-%3Eurl%0A%7D%0A"

fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          const beforeAfterImg = document.querySelectorAll(".section-four-image img")

            result.forEach((result, index) => {
                    beforeAfterImg[index].src = result.imageUrl
            });
            
        })
        .catch((err) => console.error(err));

let URLTWO = "https://c82a0tvp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22quote%22%5D%20%0A"

fetch(URLTWO)
        .then((res) => res.json())
        .then(({ result }) => {
          const quote = document.querySelector(".section-five > .wrapper > h2")
          console.log(quote)

          console.log(result)

          quote.textContent = result[0].quote

            
        })
        .catch((err) => console.error(err));



