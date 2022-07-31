document.addEventListener('DOMContentLoaded', () => {
    console.log("app loaded")
    
    const toggleFOPButton = document.getElementById('toggle-fop-banner')
    const fopBanner = document.getElementById('fop-banner')

    toggleFOPButton.addEventListener("click", () => {
        fopBanner.style.display = "none"
    })
})