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

let URL = "https://c82a0tvp.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20'team'%5D%7B%0A%20%20teamName%2C%0A%20%20%20%20teamRole%2C%0A%20%20%22imageUrl%22%3A%20teamImage.asset-%3Eurl%0A%7D"

fetch(URL)
        .then((res) => res.json())
        .then(({ result }) => {
          const teamGrid = document.querySelector(".team-grid")
          if (result.length != 0) {
            teamGrid.innerHTML = ""
          } else {
            return
          }

            result.forEach((result, index) => {
                    const teamGridItem = document.createElement("div")
                    teamGridItem.classList.add("team-grid-item")
                    teamGrid.appendChild(teamGridItem)
                    const teamImage = document.createElement("img")
                    teamGridItem.appendChild(teamImage)
                    teamImage.src = result.imageUrl

                    
                    const teamName = document.createElement("p")
                    teamName.textContent = result.teamName
                    teamGridItem.appendChild(teamName)
                    const teamRole = document.createElement("p")
                    teamRole.textContent = result.teamRole
                    teamGridItem.appendChild(teamRole)
            });
            
        })
        .catch((err) => console.error(err));
