window.onload = function () {
  const calendarElement = document.getElementById('calendar');
  calendarElement.setAttribute('selected', getToday());
}

var getToday = function() {
  const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const today = new Date();
  return monthsShort[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear()
}