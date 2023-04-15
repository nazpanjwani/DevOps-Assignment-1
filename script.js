function search() {
    // Declare variables
    var input, filter, ul, li, h3, p, i, txtValue;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    ul = document.getElementById('projects-list');
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      h3 = li[i].getElementsByTagName('h3')[0];
      p = li[i].getElementsByTagName('p')[0];
      txtValue = h3.textContent || h3.innerText;
      txtValue += ' ' + p.textContent || p.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = '';
      } else {
        li[i].style.display = 'none';
      }
    }
  }
  