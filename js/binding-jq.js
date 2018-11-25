// objects
const firstName = $('#firstName');
const middleName = $('#middleName');
const lastName = $('#lastName');
const fullName = $('#fullName');

// methods
function setFullName() {
  const name = [firstName.val(), middleName.val(), lastName.val()]
    .filter(x => x.length > 0)
    .join(' ');
  fullName.val(name);
}

function setFirstAndLastName(e) {
  const names = e.target.value.split(' ');
  firstName.val(names[0]);
  middleName.val(names[1] || '');
  lastName.val(names[2] || '');
}

// Event listeners
function listeningEvents() {
  firstName.on('change keyup', setFullName);
  middleName.on('change keyup', setFullName);
  lastName.on('change keyup', setFullName);
  fullName.on('change keyup', setFirstAndLastName);
}

// initiate
(function() {
  firstName.val('Donald');
  middleName.val('John');
  lastName.val('Trump');
  setFullName();
  listeningEvents();
}())
