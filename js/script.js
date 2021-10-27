'use strict'
window.addEventListener('DOMContentLoaded', ()=> {
    // Header Fixed
    let header = document.querySelector('.header'),
        headerTop = header.offsetTop
    
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > headerTop){
            header.classList.add('fixed')
            document.body.style.paddingTop = header.offsetHeight + 'px'
        }
        else{
            header.classList.remove('fixed')
            document.body.style.paddingTop = ''
        }
    })
    // Portfolio Slider
    class Slider{
        constructor(element, index = 0){
            this.element = element
            this.items = element.querySelectorAll('.item')
            this.row = element.querySelector('.row')
            this.prev = element.querySelector('.toggle-btn.prev')
            this.next = element.querySelector('.toggle-btn.next')
            this.index = index

            this.prev.addEventListener('click', ()=>{
                this.sliderToggle(this.index--)
            })
            this.next.addEventListener('click', ()=>{
                this.sliderToggle(this.index++)
            })
        }
        sliderToggle(){
            this.index < 0
            ? this.index = this.items.length - 1 : ''
            
            this.index > this.items.length - 1
            ? this.index = 0 : ''
    
            this.row.style.left = -this.index * 100 + '%'
        }

    }
    let portfolio = document.querySelector('.portfolio'),
        portfolioSlider = new Slider(portfolio.querySelector('.portfolio__slider')),
        portfolioLine = document.querySelector('.portfolio__slider__line'),
        portfolioContent = document.querySelector('.portfolio__slider__content')

    let portfolioRowHeight = portfolioLine.style.height = portfolioContent.offsetHeight + 'px'

    window.addEventListener('resize', ()=>{portfolioRowHeight = portfolioLine.style.height = portfolioContent.offsetHeight + 'px'})

    // Media Queries
    function mediaQueries() {
        if (window.matchMedia('(min-width: 769px)').matches){

        }
        if (window.matchMedia('(max-width: 768px)').matches){
            // Header Burger
            let headerBurger = header.querySelector('.header__burger'),
                headerMenu = header.querySelector('.header__menu'),
                headerMenuLinks = header.querySelectorAll('.header__menu-link')
            
            function headerMenuToggle() {
                header.classList.toggle('active')
            }
            headerBurger.addEventListener('click', ()=>{
                headerMenuToggle()
            })
            headerMenuLinks.forEach(i => {
                i.addEventListener('click', ()=>{
                    headerMenuToggle()
                })
            })

            var prevScrollpos = window.pageYOffset;

            window.addEventListener('scroll', ()=>{
                var currentScrollPos = window.pageYOffset;
                if (prevScrollpos > currentScrollPos ) {
                    header.style.top = "0";
                } 
                else {
                    header.style.top = "-71px";
                }
                prevScrollpos = currentScrollPos;
            })
        }
        if (window.matchMedia('(max-width: 576px)').matches){
            let skillsSliders = document.querySelectorAll('.skills__slider').forEach(i => new Slider(i))
        }
    };mediaQueries()
    window.addEventListener('resize', mediaQueries)
})