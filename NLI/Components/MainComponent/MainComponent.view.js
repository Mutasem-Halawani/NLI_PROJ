﻿import './MainComponent.scss'
import Component from '../Abstracts/Component/Component'
import Header from '../Header/Header.view'
import Footer from '../Footer/Footer.view'
import HomePage from '../Pages/HomePage/HomePage.view'

export default class MainComponent extends Component  {
    constructor(){
        super();
        this.markup = `<main class="app-wrap">   
                            ${_getPageHtml(window._pageData.id)}
                       </main>`
    }
}

const _getPageHtml = function(pageId) {
    switch (pageId) {
        case 1:
            return new HomePage().getHtml()
    }
}