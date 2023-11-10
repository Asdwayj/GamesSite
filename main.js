function bigmen(event) {
  event.preventDefault();

  const myInput = document.getElementById('bigmen');

  if (myInput.value == 'bigmenyes') {
    window.open("www.google.com","_blank")
  }
}