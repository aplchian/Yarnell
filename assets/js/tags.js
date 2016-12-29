const {
    filter,
    forEach,
    compose,
    map,
    uniq
} = require('ramda')
const h = require('hyperscript')

const mapTags = item => {
    return item.childNodes[0].innerText
}

const tagCount = item => {
    var arr = filter(tag => tag === item, tagChildren)
    return arr.length
}

const buildTags = item => {
    return {
        tag: item,
        count: tagCount(item)
    }
}

const li = item => {
    return h('a', {
        href: `http://www.yoururl.com/tag/${item.tag}`
    }, [
        h('div.cat-table', [
            h('span.cat-type', item.tag),
            h('span.cat-count', item.count)
        ])
    ])
}

const tags = document.getElementsByClassName('tags')

const tagChildren = map(mapTags, tags)

const tagsUniq = compose(
    map(buildTags),
    uniq
)(tagChildren)


const tagEl = h('div', map(li, tagsUniq))

document.getElementsByClassName('cat-float-contain')[0].appendChild(tagEl)
