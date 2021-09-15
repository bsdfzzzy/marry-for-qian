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

    ethereum.request({ method: 'eth_requestAccounts' })
    .then(acounts => send(acounts))
  });


}

const send = function(accounts) {
  console.log(accounts)
  ethereum
    .request({
      method: 'eth_sendTransaction',
      params: [
        {
          from: accounts[0],
          to: '0x305af93135Fc6D9c325d0e05b8A113850C13EC59',
          value: '0x29a2241af62c0000',
          gasPrice: '0x09184e72a000',
          gas: '0x6000',
        },
      ],
    })
    .then((txHash) => console.log(txHash))
    .then(() => {
      const askElement = document.getElementById('ask');
      const doneElement = document.getElementById('done');
      askElement.style.display = 'none';
      doneElement.style.display = 'flex';
    })
    .catch((error) => console.error);
}