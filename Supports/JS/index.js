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
