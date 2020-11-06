const log = require('./../../helpers/Log')

function Node(name) {
  this.children = []
  this.name = name
}

Node.prototype = {
  add: function(child) {
    this.children.push(child)
  },

  remove: function(child) {
    let length = this.children.length
    for(let i = 0; i < length; i++) {
      if(this.children[i] === child) {
        this.children.splice(1, 1)
        return;
      }
    }
  },

  getChild: function(i) {
    return this.children[i]
  },

  hasChildren: function() {
    return this.children.length > 0
  }

}

// recursively traverse a (sub)tree
function traverse(indent, node) {
  log.add(Array(indent++).join("->") + node.name)
  for(let i = 0, len = node.children.length; i < len; i++) {
    traverse(indent, node.getChild(i))
  }
}

function run() {
  let tree = new Node("root")
  let left = new Node("left")
  let rigth = new Node("rigth")
  let leftleft = new Node("leftleft")
  let leftleftleft = new Node("leftleftleft")
  let leftrigth = new Node("leftrigth")
  let rigthrigth = new Node("rigthrigth")
  let rigthleft = new Node("rigthleft")

  tree.add(left)
  tree.add(rigth)
  tree.remove(rigth)
  tree.add(rigth)

  left.add(leftleft)
  left.add(leftrigth)

  rigth.add(rigthrigth)
  rigth.add(rigthleft)

  leftleft.add(leftleftleft)

  traverse(0, tree)

  log.show()
}

run()