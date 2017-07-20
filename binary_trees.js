/* Binary Search Tree */

// Data Points are called Nodes
// Binary Tree can only have 2 branches for every Nodes
// Ordered: Each sub Tree is <= the Parent Node
//          Each right sub Tree >= the Parent Node
// Parent Nodes (Root Node at top of tree), Child Nodes (left-child, right-child), Leaf Nodes (at end of tree with no children)
//

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
  this.root = null;                                 // root Node : Top of Tree
  }
  add(data) {                                       // Function to add a Node to the tree
    const node = this.root;
    if (node === null) {                            // if no node previously exists,
      this.root = new Node(data);                   // the root node becomes the new Node
      return;
    } else {
      const searchTree = function (node) {          // <----- Search Tree Recursive Operation for Node placement --------------
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;                              // data === node.data, therefore return null
        }
      };                                            // <------- Search Tree Recursive Operation ------------
      return searchTree(node);
    }
  }

  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }

  find(data) {
    let current = this.root;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  isPresent(data) {
    let current = this.root;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      return false;
    }
  }

  remove(data) {
    const removeNode = function (node, data) {
      if (node === null) {
        return null;
      }
      if (data === node.data) {
        if (node.left === null && node.right === null) {          // Node has no children
          return null;
        }
        if (node.left === null) {
          return node.right;                                      // Node has no left child
        }
        if (node.right === null) {
          return node.left;                                       // Node has no right child
        }
        // Node has two children
        var tempNode = node.right;
        while (tempNode.left !== null) {
          tempNode = tempNode.left;
        }
        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    }
    this.root = removeNode(this.root, data);
  }

  isBalanced() {
    return (this.findMinHeight() >= this.findMaxHeight() - 1);
  }

  findMinHeight(node = this.root) {                     // distance from root Node and the first leaf Node w/o two children
    if (node === null) {
      return -1;
    };
    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);
    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }

  findMaxHeight(node = this.root) {                     // distance from root Node to the most bottom Node(s)
    if (node === null) {
      return -1;
    };
    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);
    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    };
  }

  inOrder() {                                           // return the Nodes in numerical order (min -> max)
    if (this.root === null) {
      return null;
    } else {
      var result = new Array();
      function traverseInOrder(node) {
        node.left && traverseInOrder(node.left);
        result.push(node.data);
        node.right && traverseInOrder(node.right);
      }
      traverseInOrder(this.root);
      return result;
    };
  }

  preOrder() {                                                    // explore the root Nodes before the leaf Nodes
    if (this.root === null) {
      return null;
    } else {
      var result = new Array();
      function traversePreOrder(node) {
        result.push(node.data);
        node.left && traversePreOrder(node.left);
        node.right && traversePreOrder(node.right);
      }
      traversePreOrder(this.root);
      return result;
    };
  }

  postOrder() {                                                   // explore the leaf Nodes before the root Nodes
    if (this.root === null) {
      return null;
    } else {
      var result = new Array();
      function traversePostOrder(node) {
        node.left && traversePostOrder(node.left);
        node.right && traversePostOrder(node.right);
        result.push(node.data);
      }
      traversePostOrder(this.root);
      return result;
    };
  }

  levelOrder() {                                                 // explore Nodes level-by-level beginning with the root Node and going down
    let result = [];
    let Q = [];                             // temporary array
    if (this.root !== null) {
      Q.push(this.root);
      while (Q.length > 0) {
        let node = Q.shift();
        result.push(node.data);
        if (node.left !== null) {
          Q.push(node.left);
        };
        if (node.right !== null) {
          Q.push(node.right);
        };
      };
      return result;
    } else {
      return result;
    };
  };
}


//const bst = new BST();
//bst.add(4);
//bst.add(2);
//bst.add(6);
//bst.add(1);
//bst.add(3);
//bst.add(5);
//bst.add(7);
//bst.remove(4);
//console.log(bst.findMin());
//console.log(bst.findMax());
//bst.remove(7);
//console.log(bst.findMax());
//console.log(bst.isPresent(4));


const bst = new BST();

//bst.add(9);
//bst.add(4);
//bst.add(17);
//bst.add(3);
//bst.add(6);
//bst.add(22);
//bst.add(5);
//bst.add(7);
//bst.add(20);

//console.log(bst.findMinHeight());
//console.log(bst.findMaxHeight());
//console.log(bst.isBalanced());
//bst.add(10);
//console.log(bst.findMinHeight());
//console.log(bst.findMaxHeight());
//console.log(bst.isBalanced());
//console.log('inOrder: ' + bst.inOrder());
//console.log('preOrder: ' + bst.preOrder());
//console.log('postOrder: ' + bst.postOrder());

//console.log('levelOrder: ' + bst.levelOrder());


bst.add(781);
bst.add(549);
bst.add(714);
bst.add(966);
bst.add(468);
bst.add(446);
bst.add(117);
bst.add(71);
bst.add(612);
bst.add(433);
bst.add(554);
bst.add(693);
bst.add(680);
bst.add(303);
bst.add(144);
bst.add(395);
bst.add(25);
bst.add(627);
bst.add(319);
bst.add(111);
bst.add(942);
bst.add(819);
bst.add(270);
bst.add(876);
bst.add(467);
bst.add(57);
bst.add(375);
bst.add(95);
bst.add(21);
bst.add(340);
bst.add(317);
bst.add(839);
bst.add(697);
bst.add(620);
bst.add(707);
bst.add(220);
bst.add(820);
bst.add(168);
bst.add(467);
bst.add(256);
bst.add(170);
bst.add(564);
bst.add(578);
bst.add(347);
bst.add(241);
bst.add(424);
bst.add(504);
bst.add(198);
bst.add(111);
bst.add(442);
bst.add(953);
bst.add(571);
bst.add(624);
bst.add(250);
bst.add(510);
bst.add(551);
bst.add(145);
bst.add(104);
bst.add(8);
bst.add(995);
bst.add(957);
bst.add(425);
bst.add(856);
bst.add(940);
bst.add(327);
bst.add(760);
bst.add(392);
bst.add(508);
bst.add(653);
bst.add(270);
bst.add(548);
bst.add(151);
bst.add(137);
bst.add(692);
bst.add(373);
bst.add(408);
bst.add(21);
bst.add(895);
bst.add(549);
bst.add(784);
bst.add(772);
bst.add(670);
bst.add(527);
bst.add(775);
bst.add(944);
bst.add(224);
bst.add(70);
bst.add(863);
bst.add(266);
bst.add(392);
bst.add(670);
bst.add(946);
bst.add(922);
bst.add(94);
bst.add(788);
bst.add(607);
bst.add(516);
bst.add(769);
bst.add(995);
bst.add(267);
bst.add(253);
bst.add(528);
bst.add(85);
bst.add(761);
bst.add(650);
bst.add(987);
bst.add(730);
bst.add(898);
bst.add(558);
bst.add(1000);
bst.add(318);
bst.add(791);
bst.add(973);
bst.add(500);
bst.add(358);
bst.add(511);
bst.add(238);
bst.add(742);
bst.add(541);
bst.add(411);
bst.add(399);
bst.add(200);
bst.add(482);
bst.add(584);
bst.add(699);
bst.add(345);
bst.add(125);
bst.add(616);
bst.add(407);
bst.add(607);
bst.add(16);
bst.add(95);
bst.add(398);
bst.add(14);
bst.add(712);
bst.add(553);
bst.add(526);
bst.add(674);
bst.add(966);
bst.add(769);
bst.add(157);
bst.add(342);
bst.add(192);
bst.add(635);
bst.add(406);
bst.add(354);
bst.add(34);
bst.add(850);
bst.add(92);
bst.add(212);
bst.add(370);
bst.add(939);
bst.add(90);
bst.add(820);
bst.add(974);
bst.add(698);
bst.add(60);
bst.add(42);
bst.add(271);
bst.add(15);
bst.add(842);
bst.add(480);
bst.add(151);
bst.add(887);
bst.add(871);
bst.add(124);
bst.add(998);
bst.add(405);
bst.add(750);
bst.add(996);
bst.add(683);
bst.add(259);
bst.add(309);
bst.add(333);
bst.add(971);
bst.add(401);
bst.add(139);
bst.add(345);
bst.add(564);
bst.add(641);
bst.add(234);
bst.add(457);
bst.add(465);
bst.add(74);
bst.add(926);
bst.add(227);
bst.add(298);
bst.add(420);
bst.add(338);
bst.add(627);
bst.add(545);
bst.add(939);
bst.add(99);
bst.add(920);
bst.add(994);
bst.add(418);
bst.add(663);
bst.add(496);
bst.add(869);
bst.add(871);
bst.add(914);
bst.add(12);
bst.add(49);
bst.add(823);
bst.add(679);
bst.add(229);
bst.add(613);
bst.add(37);
bst.add(353);
bst.add(142);
bst.add(422);
bst.add(403);
bst.add(197);
bst.add(871);
bst.add(577);
bst.add(443);
bst.add(775);
bst.add(668);
bst.add(783);
bst.add(953);
bst.add(338);
bst.add(994);
bst.add(682);
bst.add(106);
bst.add(342);
bst.add(647);
bst.add(576);
bst.add(951);
bst.add(517);
bst.add(55);
bst.add(675);
bst.add(822);
bst.add(859);
bst.add(771);
bst.add(919);
bst.add(95);
bst.add(121);
bst.add(943);
bst.add(425);
bst.add(976);
bst.add(856);
bst.add(40);
bst.add(773);
bst.add(407);
bst.add(214);
bst.add(235);
bst.add(171);
bst.add(917);
bst.add(713);
bst.add(517);
bst.add(822);
bst.add(866);
bst.add(244);
bst.add(222);
bst.add(187);
bst.add(745);
bst.add(630);
bst.add(112);
bst.add(395);
bst.add(522);
bst.add(597);
bst.add(248);
bst.add(736);
bst.add(226);
bst.add(847);
bst.add(904);
bst.add(696);
bst.add(268);
bst.add(561);
bst.add(693);
bst.add(254);
bst.add(463);
bst.add(407);
bst.add(222);
bst.add(370);
bst.add(793);
bst.add(43);
bst.add(567);
bst.add(930);
bst.add(789);
bst.add(221);
bst.add(493);
bst.add(416);
bst.add(763);
bst.add(550);
bst.add(747);
bst.add(834);
bst.add(560);
bst.add(388);
bst.add(824);
bst.add(773);
bst.add(233);
bst.add(549);
bst.add(186);
bst.add(482);
bst.add(15);
bst.add(277);
bst.add(582);
bst.add(985);
bst.add(835);
bst.add(167);
bst.add(632);
bst.add(231);
bst.add(260);
bst.add(492);
bst.add(401);
bst.add(379);
bst.add(673);
bst.add(929);
bst.add(638);
bst.add(110);
bst.add(31);
bst.add(828);
bst.add(275);
bst.add(433);
bst.add(170);
bst.add(646);
bst.add(93);
bst.add(776);
bst.add(811);
bst.add(614);
bst.add(717);
bst.add(984);
bst.add(529);
bst.add(49);
bst.add(609);
bst.add(709);
bst.add(873);
bst.add(579);
bst.add(814);
bst.add(286);
bst.add(474);
bst.add(889);
bst.add(307);
bst.add(247);
bst.add(853);
bst.add(270);
bst.add(984);
bst.add(363);
bst.add(957);
bst.add(948);
bst.add(636);
bst.add(649);
bst.add(13);
bst.add(16);
bst.add(523);
bst.add(484);
bst.add(169);
bst.add(377);
bst.add(170);
bst.add(263);
bst.add(732);
bst.add(829);
bst.add(154);
bst.add(725);
bst.add(572);
bst.add(766);
bst.add(774);
bst.add(753);
bst.add(878);
bst.add(979);
bst.add(125);
bst.add(347);
bst.add(701);
bst.add(509);
bst.add(580);
bst.add(180);
bst.add(693);
bst.add(270);
bst.add(797);
bst.add(309);
bst.add(229);
bst.add(96);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());
