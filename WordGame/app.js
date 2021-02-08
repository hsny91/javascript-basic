let selected = null

function dragOver(e) {
  if (isBefore(selected, e.target)) {
    e.target.parentNode.insertBefore(selected, e.target)
  } else {
    e.target.parentNode.insertBefore(selected, e.target.nextSibling)
  }
}

function dragEnd() {
  selected = null
}

function dragStart(e) {
  e.dataTransfer.effectAllowed = 'move'
  e.dataTransfer.setData('text/plain', null)
  selected = e.target
}

