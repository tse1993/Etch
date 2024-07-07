const container = document.querySelector('#container')

for (let i=1; i<257; i++) {
    const div = document.createElement('div')
    container.appendChild(div)
}

const divs = container.querySelectorAll('div');
divs.forEach(div => {
    div.addEventListener('mouseover', function() {
        this.classList.add('black');
    });
});


const btn = document.querySelector('button')

btn.addEventListener('click', function(){
    divs.forEach(div =>{
        div.classList.remove('black')
    })
})