let colorPicker = document.getElementById("color-picker")
    colorPicker.addEventListener("change", listenColorChange, false)

function listenColorChange(event) {
    let firstColor = event.target.value
    document.getElementById("color-1").style.backgroundColor=firstColor;
    document.getElementById("name-1").textContent=firstColor;
    document.getElementById("color-picker-hex").textContent=firstColor;
    
    return firstColor
}


let schemeButton = document.getElementById("scheme-button")
                           .addEventListener("click", listenChosenScheme)
                           
function listenChosenScheme() {
    let chosenScheme = document.getElementById("scheme-list").value
    let chosenColor = colorPicker.value
    let fiveColors = []
    console.log(chosenColor.slice(1,))
    console.log(chosenScheme)
    fetch(`https://www.thecolorapi.com/scheme?hex=${chosenColor.slice(1,)}&count=5&mode=${chosenScheme}`)
        .then(res => res.json())
        .then(data => {
                data.colors.map(color => {
                    fiveColors.unshift(color.hex.value)
                })
                
                fiveColors.map((value, index) => {
                    document.getElementById(`color-${index + 1}`).style.backgroundColor=value;
                    document.getElementById(`name-${index + 1}`).textContent=value;
                })
                console.log(fiveColors)
            })
}




