document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.fixed-action-btn');
  var instances = M.FloatingActionButton.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.sidenav');
  var instances = M.Sidenav.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elems = document.querySelectorAll('.materialboxed');
  var instances = M.Materialbox.init(elems);
});

document.addEventListener('DOMContentLoaded', function() {
  var elem = document.querySelector('.collapsible.expandable');
  var instance = M.Collapsible.init(elem, {
  accordion: false
  })
});

var instance = M.Materialbox.getInstance(elem);