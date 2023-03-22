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

let URL = "https://c82a0tvp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22testimonial%22%5D%20%0A"

fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          const testimonialCards = document.querySelectorAll(".section-two-card")

          result.forEach((result, index) => {
            console.log(testimonialCards[index].firstChild)
            testimonialCards[index].children[0].textContent = result.name
            testimonialCards[index].children[1].textContent = result.review
          })
          

            
        })
        .catch((err) => console.error(err));
