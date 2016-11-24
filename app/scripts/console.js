var hiddenInput = $("#hidden-textarea");
var consoleinput = null;
var consoleinputline= null;
var consoleinputtype = 0;
var doc = $( document );

var cb = null;
var ucb = null;

doc.on("keydown", onKeydown);
doc.on("keyup", onKeyUp);
doc.on("click", refocus);
doc.on("touchstart", ".line:last", refocus);
hiddenInput.on("input", handleTextInput);

function universalClick() {
  if(ucb != null) {
    ucb();
  }
}

function promptCommand(parent, callback) {
  promptCommandPrefix("", parent, callback, 0);
}

function promptCommandPrefix(prefix, parent,type, callback) {
  cb = callback;
  consoleinputline = $('<br/><span class="console_line">'+prefix+'<span id="console_input"></span></span></span>');
  parent.append(consoleinputline);
  consoleinput = $("#console_input");
  consoleinputtype = type;
  hiddenInput.focus();
}

function refocus(t) {
  universalClick();
  t.preventDefault();
  if(cb != null && consoleinput != null) {
    hiddenInput.focus();
  }
}
function handleTextInput() {
  universalClick();
  if(consoleinputtype === 1) {
    var encypted = "";
    for(var i = 0; i < hiddenInput.val().length; i++) {
      encypted+="*";
    }
    consoleinput.text(encypted);
  } else {
    consoleinput.text(hiddenInput.val());
  }
}

function onKeydown(t) {
  universalClick();
  var e = t.keyCode ? t.keyCode : t.which;
  if(13 === e) {
    t.preventDefault();
    submit();
  }
}
function onKeyUp(t) {
  universalClick();
  var e = t.keyCode ? t.keyCode : t.which;
  (8 === e || 46 === e) && handleTextInput()
}
function submit() {
  if(cb != null) {
    if(cb(hiddenInput.val())) {
      consoleinput = null;
      consoleinputline.remove();
      cb = null;
      consoleinputtype = 0;
      hiddenInput.blur();
    } else {
      hiddenInput.val("");
      consoleinputline.empty();
    }
  }
  hiddenInput.val("");
  consoleinputline.empty();
}

var password = "G3tR3kt";
var counter = 0;
var interval = null;
var bruteforcecb = null;
var characters = [];
function startBruteforce(callback) {
  bruteforcecb = callback;
  interval = setInterval(function(){
    for(i = 0; i < counter; i++) {
      characters[i] = password.charAt(i);
    }
    for(i = counter; i < password.length; i++) {
      characters[i] = Math.random().toString(36).charAt(2);
    }
    $('#brutepassword').text(characters.join(''));
  }, 25);

  ucb = brute;
}

function brute() {
  counter++;
  if(counter == password.length){
    bruteforcecb();
    bruteforcecb = null;
    characters = [];
    counter = 0;
    ucb = null;
    clearInterval(interval);
  }
}


