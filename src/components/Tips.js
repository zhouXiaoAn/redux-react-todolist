import React,{Component} from 'react'
export const tips = (tips) => {
    if(document.getElementsByClassName('tips').length != 0) {
        document.body.removeChild(document.getElementsByClassName('tips')[0])
    }
    let newNode = document.createElement('div')
    newNode.innerText = tips
    newNode.style.textAlign = 'center'
    newNode.style.position = 'fixed'
    newNode.style.top = '-20px'
    newNode.style.width = '100%'
    newNode.className = 'tips'
    newNode.addEventListener('trsitionend',()=>{
        console.log('动画执行结束')
    })
    document.body.insertBefore(newNode,null)
    // return newNode
}
