export const digitsRegex =/[\d]$/;
export const dashAndDigitsRegex =/[\d-]$/;
export const securityNumberRegex= /^[0-9]{8}-[0-9]{4}$/;
export const phoneRegex =/^(0([1-9]{9}))$/
export const emailRegex = /^([a-zA-Z0-9])([a-zA-Z0-9\._])*@(([a-zA-Z0-9])+(\.))+([a-zA-Z]{2,4})+$/;

export const _checkValidation = (e ,regex , id , Styles , errors) => {
    const element = document.getElementById(id) as HTMLElement;
    const error  =  element.nextSibling as HTMLElement;
    const {value} = e.target;
    if(!regex.test(value) && error){
       element.classList.add(Styles.error)
       error.style.display="block"
       if(value==="") error.textContent = errors[id].emptyMessage;
       else error.textContent = errors[id].incorrect;
    }
    else if(error){
        element.classList.remove(Styles.error)
        error.style.display="none"
     }
 }

 export const errors = {
    email:{
        emptyMessage:"Ange din e-postaddress",
        incorrect:"email är felaktigt"
    } ,
    phone:{
        emptyMessage:"Ange ditt telefonnummer",
        incorrect:"Felaktig telefon. Ange ditt telefon."
    },
    securityNumber:{
        emptyMessage:"Personligt nummer krävs",
        incorrect:"Ange ditt korrekta personnummer exampel : (19806101-1234)"
    }
}