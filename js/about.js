document.addEventListener('DOMContentLoaded', () => {
    const toggleFOPButton = document.getElementById('toggle-fop-banner')
    const fopBanner = document.getElementById('fop-banner')

    toggleFOPButton.addEventListener("click", () => {
        fopBanner.style.display = "none"
    })

    
    const toggleIFGButton = document.getElementById('toggle-ifg-banner')
    const ifgBanner = document.getElementById('ifg-banner')

    toggleIFGButton.addEventListener("click", () => {
        ifgBanner.style.display = "none"
    })
})