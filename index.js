function hamburger() {
  var items = document.querySelectorAll(".item");
  items.forEach(function (item) {
    item.classList.toggle("active");
  });
}
/*function hamburger() {
                    var items = document.querySelectorAll('.item');
                
                    items.forEach(function(item) {
                        if (item.classList.contains('active')) {
                            item.classList.remove('active');
                        } else {
                            item.classList.add('active');
                        }
                    });
                }
                */
