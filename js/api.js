export default class API{
    constructor(){
        this.urlImg 
    }
    searchImg(numImg){
        return new Promise((resolve,reject)=>{
            fetch(`https://rickandmortyapi.com/api/character/${numImg}`)
            .then(connect =>  connect.json())
            .then(json => {
                if(json.error){
                    throw new Error(json.error)
                }
                return fetch(json.image)
            })
            .then(img => {
                resolve(img.url)
                this.urlImg = img.url
            })
            .catch((e)=>{
                reject(e)                
            })
        })
    }
    renderImg(){
        const img = `<img src='${this.urlImg}'>`
        spaceImg.innerHTML = img
    }
/**

 * @param {string} error error message showed in the page
 */
    renderError(error){
        const img = `<h2>${error}</h2>`
        spaceImg.innerHTML = img
    }
}

