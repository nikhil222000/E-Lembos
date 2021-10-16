function toogleNav()
{
    let ele = document.querySelector('#nav-item-list');
    if(ele.classList.contains('hide'))
    {
        ele.classList.remove('hide');
        ele.style.transform = "translateX(0)";
    }

    else{
        ele.classList.add('hide');
    }
}


function Show()
{
    let element = document.querySelector('#hidden-menu');

    let iconz = document.querySelector("#drop-iconz");

    if(iconz.classList.contains('fa-arrow-up'))
    {
        hide();
    }

    else{
        iconz.classList.remove('fa-arrow-down');
        iconz.classList.add('fa-arrow-up');
        element.style.display = "block";
    }
}

function hide()
{
    let element = document.querySelector('#hidden-menu');
    element.style.display = "none";
    let iconz = document.querySelector("#drop-iconz");
    iconz.classList.add('fa-arrow-down');
    iconz.classList.remove('fa-arrow-up');
}