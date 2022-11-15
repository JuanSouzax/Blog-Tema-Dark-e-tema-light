/* aqui está  declarando os componentes  */
const inputContainer = document.querySelector('input')
const rootElement =document.documentElement

const lighttheme = {  /*  aqui está   chamando  as variaveis  do CSS   para o tema Light*/
    '--background-color' : '#FFF',
    '--text-color' : '#1A1A1A',
    '--button-background-color' : '#9B8AFB',
}

const darktheme = {  /*  Aqui está chamando as variaveis do css para o tema Dark*/
    '--background-color' : '#1A1A1A',
    '--text-color' : '#FFF',
    '--button-background-color' : '#5925DC',
}
/* aqui esta configurando  o check box para mudar o tema  */
inputContainer.addEventListener('change',function(){
    const isChecked = inputContainer.checked
     isChecked ? changeTheme(darktheme) : changeTheme(lighttheme)
})
/* aqui esta configurando  o check box para mudar o tema  */
function changeTheme(theme) {
   console.log(theme)
   for (let prop in theme){
    changeProperty(prop,theme[prop])
   }
}

/* aqui esta configurando  o check box para mudar o tema  */
function changeProperty(property , value){
    rootElement.style.setProperty(property,value)
}


