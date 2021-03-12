let $lists = [...document.getElementsByClassName('list')]

$lists.forEach(list => {
    let $listToScroll = list.querySelector('.list__playlists')
    let relation = 0.5
    list.querySelector('#left-arrow').onclick = function () {
        $listToScroll.scroll({
            left: $listToScroll.scrollLeft - (window.innerWidth * relation),
            behavior: 'smooth'
        })
    }
    list.querySelector('#right-arrow').onclick = function () {
        $listToScroll.scroll({
            left: $listToScroll.scrollLeft + (window.innerWidth * relation),
            behavior: 'smooth'
        })
    }
    list.querySelector('.list__playlists').addEventListener('scroll', function () {
        let $scrollList = list.querySelector('.list__playlists')
        let scrollLeft = $scrollList.scrollLeft
        let scrollWidth = $scrollList.scrollWidth
        let offsetWidth = $scrollList.offsetWidth
        let contentWidth = scrollWidth - offsetWidth
        console.log(scrollLeft)
        if(scrollLeft > 0){
            list.querySelector('#left-arrow').classList.toggle('arrow--active', true)
        } else {
            list.querySelector('#left-arrow').classList.toggle('arrow--active', false)
        }
        if(scrollLeft >= contentWidth){
            list.querySelector('#right-arrow').classList.toggle('arrow--active', false)
        } else {
            list.querySelector('#right-arrow').classList.toggle('arrow--active', true)
        }
    })
})

let $main = document.querySelector('.main')
$main.addEventListener('scroll', () => {
    let scroll = $main.scrollTop;
    if(scroll > 0){
        $main.querySelector('.main__header').classList.add('header--bg')
        $main.querySelector('.header__title').classList.add('title--onbg')
    } else {
        $main.querySelector('.main__header').classList.remove('header--bg')
        $main.querySelector('.header__title').classList.remove('title--onbg')
    }
})
