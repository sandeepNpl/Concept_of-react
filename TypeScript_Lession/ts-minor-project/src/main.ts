import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = ():void =>{
    const fullList = FullList.instance
    const template = ListTemplate.instance

}

document.addEventListener("DOMContentLoaded", initApp)

