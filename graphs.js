/* Graphs - Breadth-First Search (Graph Traversal) */

// BFS algorithm implemented using a Queue

// DFS Traversal Algorithm: (using Queue)
//
// From the root Node:
// 1. Push Node onto top of stack
// 2. Vist Node (display, print, etc. data in Node); mark Node visited
// 3. Look at adjacent Node which haven't been visited yet;
// 4. If (there are no adjacent Nodes to visit) {Pop the Node  off the stack} else {
//      Move to the next unvisited adjacent Node in alpha order (Node at the top of stack)
// 5.   Push the Node onto the stack; visit it; mark it visited}
// 6.   Loop to step 4 until the queue is empty
// 7. When stack is empty, the DFS traversal is complete!



// BFS Traversal Algorithm: (using Stack)
//
// From the root Node:
// 1. Enqueue Node
// 2. Visit Node; mark it as visited
// 3. Move to next connected neighbor Node in alpha order; mark it visited; add it to queue
// 4. If (a connected neighbor node exists) {Goto step 3} else
//      {Move to the Node at the head of queue; dequeue the Node; goto step 3}
// 5. When the queue is empty, the BFS traversal is complete!

// Nodes
// Edges (connections between Nodes)

// Two types - Directed, Undirected

// Matrices - Adjacency Matrix
//            Incidence Matrix

function bfs(graph, root) {
  var nodesLen = {};

  for(var i = 0; i < graph.length; i++) {
    nodesLen[i] = Infinity;                                   // default Node length = Infinity (i.e. Node not reachable)
  }
  nodesLen[root] = 0;                                         // Distance fro root Node to itself is set to 0

  var queue = [root];                                         // Use a queue to keep track of Nodes to visit
  var current;                                                // Keep track of the current Node that we're traversing

  while (queue.length !== 0) {                                // While the queue length is not 0, traverse the Nodes in the queue
    current = queue.shift();                                    // Pop off a Node from the queue to traverse

    var curConnected = graph[current];                          // Nodes connected to the current Node being traversed
    var neighborIdx = [];                                       // create a empty array to store the neighbor index variable
    var idx = curConnected.indexOf(1);                          // Track the list of Nodes connected to the current Node

    while(idx !== -1) {                                       // While there is a connected Node
      neighborIdx.push(idx);                                    // Push the connected Node onto the list of neighbors
      idx = curConnected.indexOf(1, idx + 1);                   // Search for the next connected Node
    }

                                                              // We now have all Nodes connected to the current Node

    for (var j=0; j < neighborIdx.length; j++) {              // Loop through connected Nodes list to find distances to the target Node
      if (nodesLen[neighborIdx[j]] === Infinity) {              // If distance to neighbor is Infinity, the distance hasn't been set yet
        nodesLen[neighborIdx[j]] = nodesLen[current] + 1;       // Set distance to neighbor from target Node
        queue.push(neighborIdx[j]);                             // Push neighbor Node to queue next to check its neighbors the next pass through 'while loop'
      }
    }
  }
  return nodesLen;                                            // return node length array containing distances of connected Nodes to the target Node
};

var exBFSGraph = [                                           // Adjacency Mtrix Array
  [0, 1, 1, 1, 0],
  [0, 0, 1, 0, 0],
  [1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0],
  [0, 1, 0, 0, 0]
];

console.log(bfs(exBFSGraph, 1));
