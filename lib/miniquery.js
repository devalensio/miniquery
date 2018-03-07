const SweetSelector = {
  select: function(value) {
    console.log(document.querySelector(value));
  }
}

const DOM = {
  hide: function (value) {
    document.querySelector(value).style.visibility = "hidden";
  },
  show: function (value) {
    document.querySelector(value).style.visibility = "visible";
  },
  addClass: function (value, additional) {
    let test = document.querySelector(value)
    test.className += ` ${additional}`
  },
  removeClass: function (value, additional) {
    let test = document.querySelector(value)
    test.classList.remove(additional)
  }
}
const EventDispatcher = {
  on: function (value, additional, cb) {
    const test = document.querySelector(value)
    test.addEventListener(additional,cb)
  }
}

const ajaxWrapper = (object) => {
  var request = new XMLHttpRequest()
  request.open(object.type, object.url, true)
  request.addEventListener('load', (object.success))
  request.addEventListener('error', (object.fail))
  request.send()
}






ajaxWrapper({
  url: 'https://dog.ceo/api/breeds/list/all',
  type: 'GET',
  success: function (data) {
    console.log(data);
  },
  fail: function (error) {
    console.log(error);
  }
})


SweetSelector.select('#eyed')
SweetSelector.select('.klass')
SweetSelector.select('a')

DOM.hide('.klass')
DOM.show('.klass')
DOM.addClass('.klass', 'shadi')
DOM.removeClass('.klass', 'shadi')

EventDispatcher.on('.klass', 'click', function () {
  console.log('awesome');
})
