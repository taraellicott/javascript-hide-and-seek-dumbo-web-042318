function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
return document.querySelector('#nested .target');
}

function deepestChild() {
 return document.querySelector('#grand-node div div div div');
}

// function deepestChild() {
//   let node = document.querySelector('#grand-node')
//   let nextNode = node.children[0]
//   }
//   while (nextNode) {
//     node = nextNode
//     nextNode = node.children[0]
//   }
// return node
// }

function increaseRankBy(n) {
  const lists = document.querySelectorAll('.ranked-list');
  for (let i = 0; j = lists.length, i < j; i++) {
    let children = lists[i].children;
  for (let k = 0; l = children.length, k < l; k++) {
    children[k].innerHTML = parseInt(children[k].innerHTML) + n;
    }
    }
  }
