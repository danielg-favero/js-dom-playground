const setCookie = () => {
    document.cookie = "grettings=Obrigado Pelo Cookie :)"
}

const deleteCookie = () => {
    document.cookie = "grettings="
}

const showCookie = () => {
    alert(document.cookie)
}