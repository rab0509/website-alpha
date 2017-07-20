var authors = [
  {name: 'Spencer H.', sections: ['Business']},
  {name: 'John C.', sections: ['Movies']},
  {name: 'Rob J.', sections: ['Weather', 'Sports']},
  {name: 'Josh F.', sections: ['Sports']},
  {name: 'Megan M.', sections: ['World']},
];

//function doArray() {
//  var sportsAuthors = [];
//    for (var i = 0; i < authors.length; i++) {
//        if(authors[i].indexOf('Sports') >= 0) {
//            sportsAuthors.push(authors[i].name)
//        }
//    }
//}

function doArray() {
  sportsAuthors = authors.filter(function (authors) {
      return authors.sections.indexOf('Sports') >= 0;
    }).map(function(sportsAuthors){
      return sportsAuthors.name;
    });
}

console.log(sportsAuthors.name);

window.onload = doArray;
