function addToLocalStorage(data){
    localStorage.setItem('movies',JSON.stringify(data))
}

function getFromLocalStorage(){
    return JSON.parse(localStorage.getItem('movies')) || [] 
}

export {addToLocalStorage,getFromLocalStorage}