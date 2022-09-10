voted = {};

function checkVoter(name) {
  if (voted[name]) {
    console.log('kick them out!');
  } else {
    voted[name] = name;
    console.log('let them vote!');
  }
}

checkVoter('tom');
checkVoter('mike');
checkVoter('mike');
