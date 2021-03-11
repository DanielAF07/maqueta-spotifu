let $lists = [...document.getElementsByClassName('list')]

$lists.forEach(list => {
    console.log(window.innerWidth);
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
})

$lists.forEach(list => {
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