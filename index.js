var allTds = document.querySelectorAll('td');

allTds.forEach(function(td){
    td.addEventListener('click', function(){
        this.classList.add('X');
        setTimeout(add0, 500);
    })
})

function add0(){
    var i = Math.floor(Math.random() * (allTds.length));
    do{
        i = Math.floor(Math.random() * (allTds.length));

    } while (allTds[i].classList)

    allTds[i].classList.add('O');
}

