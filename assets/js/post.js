const {
    filter,
    forEach,
    compose,
    map,
    addIndex,
    keys,
    uniq
} = require('ramda')
const h = require('hyperscript')
const mapIndex = addIndex(map)


const render = function(state) {

    var img
    var activePosition
    var altText

    const returnActive = function(item) {
        if (state[item]['active'] === true) {
            img = state[item]['url']
            activePosition = parseInt(item) + 1
            altText = state[item]['alt']
        }
    }

    const buildCircles = function(item) {
        var status = ''
        var el
        if (state[item]['active'] === true) {
            el = h('li.current')
        } else {
            el = h('li')
        }
        el.addEventListener('click', function(e) {
            const deactiveAll = function(item) {
                state[item]['active'] = false
            }
            e.preventDefault
            var position = item
            forEach(deactiveAll, keys(state))
            state[position]['active'] = true
            render(state)
        })
        return el
    }


    const initState = function(item, i) {
        state[i] = {
            url: item,
            active: i === 0 ? true : false
        }
    }


    compose(
        forEach(returnActive),
        keys
    )(state)


    let el = h('div.all-slides-contain', [
        h("div.slideshow-container", [
            h("div.slide-img-contain", {
                style: `background: url(${img}) no-repeat center center;background-size:cover`
            }),
            h('div.slide-container', [
                h("ul.slide-position", map(buildCircles, keys(state)))
            ])
        ]),
        h("div.desktop-ss-container",{
          style: `background: url(${img}) no-repeat center center;background-size:cover`
        } , [
            h("div.ss-content-contain", [
                h("div.inner-contain", [
                    h("div.ss-position", [
                        h("span.current", `${activePosition}`),
                        h("span.backslash", `/`),
                        h("span.total", keys(state).length.toString())
                    ]),
                    h("span.ss-alt-text", `${altText}`),
                    h("div.ss-btn-container", [
                        h("div.left-btn"),
                        h("div.right-btn")
                    ])
                ])
            ])
        ])
    ])



    $('.all-slides-contain').replaceWith(el)
    $('.slideshow').replaceWith(el)

    var rightBtn = document.getElementsByClassName('right-btn')[0]
    var leftBtn = document.getElementsByClassName('left-btn')[0]

    rightBtn.addEventListener('click',function(){
      var currentState = state
      var current = activePosition - 1
      var next = activePosition.toString()
      state[current.toString()].active = false
      state[next].active = true
      render(state)
    })

    leftBtn.addEventListener('click',function(){
      var currentState = state
      var current = activePosition - 1
      var previous = current - 1
      state[current.toString()].active = false
      state[previous.toString()].active = true
      render(state)
    })

}



var el = document.getElementsByClassName('slideshow')[0]

console.log(el)

var nodes = el.childNodes

console.log(nodes)

var state = {}


const initState = function(item, i) {
    state[i] = {
        url: item.src,
        active: i === 0 ? true : false,
        alt: item.alt
    }
}

var images = compose(
    mapIndex(initState),
    filter(node => node.nodeName === 'IMG')
)(nodes)




render(state)

var next = document.getElementsByClassName('more-article-widget')


if(next.length < 2){
  $('.slide-container').hide()
}

var prevButton = document.getElementsByClassName('prev-article')[0]
var nextButton = document.getElementsByClassName('next-article')[0]
var prevButton2 = document.getElementsByClassName('prev-article')[1]
var nextButton2 = document.getElementsByClassName('next-article')[1]

prevButton.addEventListener('click',function(){
  $(next[0]).removeClass('hide')
  $(next[1]).addClass('hide')
})

nextButton.addEventListener('click',function(){
  $(next[1]).removeClass('hide')
  $(next[0]).addClass('hide')
})

prevButton2.addEventListener('click',function(){
  $(next[0]).removeClass('hide')
  $(next[1]).addClass('hide')
})

nextButton2.addEventListener('click',function(){
  $(next[1]).removeClass('hide')
  $(next[0]).addClass('hide')
})


const updateNext = function(item,i){
  if(i === 1){
    item.className += ' hide'
  }
}

mapIndex(updateNext,next)
