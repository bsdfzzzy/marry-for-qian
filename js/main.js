window.onload = function () {
  // const calendarElement = document.getElementById('calendar');
  // calendarElement.setAttribute('selected', getToday());

  // const manAvatarElement = document.getElementById('avatar-man');
  // manAvatarElement.addEventListener('click', () => playChat('chat-first', '你，愿意嫁给我吗'));

  const doButtonElement = document.getElementById('do');
  doButtonElement.addEventListener('click', () => {
  //   playChat('chat-second', '我愿意');
  //   setTimeout(() => {
  //     const loadingElement = document.getElementById('loading');
  //     loadingElement.style.display = 'flex';
  //   }, 1000);
    
    const requestElement = document.getElementById('request');
    const loadingElement = document.getElementById('loading');
    requestElement.style.display = 'none';
    loadingElement.style.display = 'flex';

    setTimeout(() => {
      const askElement = document.getElementById('ask');
      const doneElement = document.getElementById('done');
      askElement.style.display = 'none';
      doneElement.style.display = 'flex';
    }, 2000);
  });


}

const getToday = function() {
  const monthsShort = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const today = new Date();
  return monthsShort[today.getMonth()] + ' ' + today.getDate() + ', ' + today.getFullYear()
}

const playChat = function(id, word) {
  const dom = document.getElementById(id);
  const data = word.split('');
  let index = 0;
  (function writing(index) {
      if (index < data.length) {
          dom.innerHTML += data[index]
          setTimeout(writing.bind(this), 200, ++index)
      }
  })(index)
}