function getFirstSelector(selector) {
  return document.querySelectorAll(selector)[0]
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target')
}

function deepestChild() {
  let nodes = document.querySelectorAll('#grand-node div')
  return nodes[nodes.length - 1]
}

function increaseRankBy(n) {
  let list = document.querySelectorAll('.ranked-list')

  for (let i = 0; i < list.length; i++) {
    let children = list[i].children

    for (let j = 0; j < children.length; j++) {
      children[j].innerHTML = parseInt(children[j].innerHTML) + n
    }
  }
}