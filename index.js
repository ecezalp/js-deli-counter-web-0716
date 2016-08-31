function takeANumber (line, name) {
  return `Welcome, ${name}. You are number ${line.push(name)} in line.`
}

function nowServing (line) {
  if (line.length === 0) {
    return 'There is nobody waiting to be served!';
  }
  else {
    return `Currently serving ${line.shift()}.`;
  }
}

function currentLine(line){
  if (line.length === 0) {
    return 'The line is currently empty.';
  }
  else {
    var lineMessage = "The line is currently: ";
    line.forEach(function(person, index){
      lineMessage += `${index + 1}. ${person},`
    });
    lineMessage = lineMessage.slice(0, -2);
    return lineMessage
  }
}