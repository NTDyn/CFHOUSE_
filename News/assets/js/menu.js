let buttons = document.querySelectorAll('button')
let tabs = document.querySelectorAll('.tab')
let tabContent1 = document.querySelector('.tab-content1')
let tabContent2 = document.querySelector('.tab-content2')
let tabContent3 = document.querySelector('.tab-content3')
let tabContent4 = document.querySelector('.tab-content4')

buttons.forEach(button => {
    button.addEventListener('click',function() {
        buttons.forEach(btn => btn.classList.remove('active-tab'));
        this.classList.add('active-tab');
        tabs.forEach(tab =>{
            tab.classList.add('dnone')
        })
        if(this.id == 1) {
            tabContent1.classList.remove('dnone');
        } else if(this.id == 2) {
            tabContent2.classList.remove('dnone');
        } else if(this.id == 3) {
            tabContent3.classList.remove('dnone')
        } else {
            tabContent4.classList.remove('dnone');
        }
    })
})



