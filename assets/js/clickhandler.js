(function () {

  var links = document.getElementsByClassName("links"),
  templateDiv = document.getElementById("template"),
  nav = document.querySelector('nav > ul'),
  clicked = false, data = { };

  function clickHandler(e) {
    var target = event.target,
    templateName = this.getAttribute("data-template");
    if(clicked) {
      clicked.removeAttribute('class');
    }
    else {
      nav.querySelector('.active').removeAttribute('class');
    }
    target.parentElement.setAttribute('class','active');
    clicked = target.parentElement;

    dust.render(templateName, data, function (err, out) {
      if(err) console.log('Error:',err);
      else {
        templateDiv.innerHTML = out;
      }
    });
  };

  for(var i = 0; i < links.length; i++){
    links[i].addEventListener('click', clickHandler, false);
  }

})();

