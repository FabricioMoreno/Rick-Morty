import API from "./api.js"
const api = new API

const spaceImg = document.getElementById('spaceImg')
const btnSend = document.getElementById('btnSend')
const numImg = document.getElementById('numImg')

function isAValidNumber(num){
    if(num === "" ){
        return false
    }
    if(Number.isInteger(Number(num)) && Number(num) > 0){
        return true
    }
    
    return false
}

async function search(){
    const numImg = document.getElementById('numImg').value
    if(!isAValidNumber(numImg)){
        api.renderError('No Character')
        return
    }
    try{
        spaceImg.innerHTML = '<span class ="preloader"></span><h2>Loading ...</h2>'
        await api.searchImg(numImg)
        api.renderImg()

    }
    catch(e){
        api.renderError(e.message)
    }
}

function enter(e){
    const keycode = e.keycode || e.which
    if(keycode === 13 ){
        search()
    }
}

btnSend.addEventListener('click',search)
numImg.addEventListener('keyup',enter)