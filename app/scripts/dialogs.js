var typewriter = require('typewriter');
function dialog1() {
  var dialogue = typewriter(document.getElementById("main_console_body")).withAccuracy(98).withMinimumSpeed(10).withMaximumSpeed(15).build();
  dialogue
    .clear()
    .put('Starting HaxxorOS loader').wait(600)
    .put('.').wait(600)
    .put('.').wait(600)
    .put('.').wait(600)
    .put('<br/>Started EgorOS successfully<br/>').wait(1000)
    .clear().wait(600)
    .put('Loading Linux 3.2.0-4-amd64 ...<br/>').wait(600)
    .put('Loading initial ramdisk  ...<br/>').wait(1000)
    .clear().wait(600)
    .put('Loading, please wait ...<br/>').wait(1200)
    .put('[    2.543342] sd 0:0:0:0: [sda] Assuming drive cache: write through<br/>').wait(100)
    .put('[    2.553753] sd 0:0:0:0: [sda] Assuming drive cache: write through<br/>').wait(100)
    .put('[    2.564342] sd 0:0:0:0: [sda] Assuming drive cache: write through<br/>').wait(100)
    .put('INIT: version 9.11 booting<br/>').wait(800)
    .put('[<span class="ci">info</span>] Using makefile-style concurrent boot in runlevel S.<br/>').wait(0)
    .put('[ <span class="cs">ok</span> ] Starting the hot plug events dispatcher: udevd.<br/>').wait(60)
    .put('....] Synthesizing the initial hotplug events...[    2.900323] piix_smbus 0000:00:07.3: Host SMBus controller not enabled!<br/>').wait(200)
    .put('done<br/>').wait(40)
    .put('[ <span class=\"cs\">ok</span> ] Waiting for /dev to be fully populated...[    3.245322] Error: Driver "pc spkr" is already registered, aborting...<br/>').wait(40)
    .put('done<br/>').wait(200)
    .put('[ <span class="cs">ok</span> ] Setting preliminary keymap...done.<br/>').wait(200)
    .put('[ <span class="cs">ok</span> ] Activating swap...done.<br/>').wait(200)
    .put('[....] Checking root file system...fsck from util-linux 3.2.0 /dev/sda1: clean, 38140/1256660 files, 344993/5014832 blocks<br/>').wait(40)
    .put('done<br/>').wait(40)
    .put('[<span class="ci">info</span>] Loading kernel module loop.<br/>').wait(40)
    .put('[ <span class="cs">ok</span> ] Cleaning up temporary files... /tmp.<br/>').wait(40)
    .put('[ <span class="cs">ok</span> ] Activating lvm and md swap...done.<br/>').wait(40)
    .put('[....] Checking file systems...fsck from util-linux 3.2.0<br/>').wait(800)
    .put('done<br/>').wait(200)
    .put('[....] Mounting local filesystems...done.<br/>').wait(500)
    .put('[ <span class="cs">ok</span> ] Activating swapfile swap...done.<br/>').wait(100)
    .put('[ <span class="cs">ok</span> ] Cleaning up temporary files....<br/>').wait(20)
    .put('[ <span class="cs">ok</span> ] Setting kernel variables ...done.<br/>').wait(200)
    .put('[ <span class="cs">ok</span> ] Configuring network interfaces...done.<br/>').wait(500)
    .put('[ <span class="cs">ok</span> ] Starting rpcbind daemon....<br/>').wait(200)
    .put('[ <span class="cs">ok</span> ] Starting NFS common utilities: statd idmapd.<br/>').wait(200)
    .put('[ <span class="cs">ok</span> ] Cleaning up temporary files....done.<br/>').wait(200)
    .put('[<span class="ci">info</span>] Setting console screen modes.<br/>').wait(40)
    .put('[<span class="ci">info</span>] Skipping font and keymap setup (handled by console-setup).<br/>').wait(40)
    .put('[....] Setting up console font and keymap...done.<br/>').wait(400)
    .put('INIT: Entering runlevel: 2<br/>').wait(1000)
    .put('[<span class="ci">info</span>] Using makefile-style concurrent boot in runlevel 2.<br/>').wait(90)
    .put('[ <span class="cs">ok</span> ] Starting NFS common utlities: statd idmapd.<br/>').wait(20)
    .put('[ <span class="cs">ok</span> ] Starting rpcbind daemon...[....] Already running..<br/>').wait(10)
    .put('[ <span class="cs">ok</span> ] Starting enhanced syslogd: rsyslogd.<br/>').wait(300)
    .put('[ <span class="cs">ok</span> ] Starting deferred execution scheduler: atd.<br/>').wait(300)
    .put('[ <span class="cs">ok</span> ] Starting ACPI services....<br/>').wait(100)
    .put('[ <span class="cs">ok</span> ] Starting periodic command scheduler: cron<br/>').wait(80)
    .put('[ <span class="cs">ok</span> ] Starting system message bus: dbus<br/>').wait(1000)
    .put('[ <span class="cs">ok</span> ] Starting Avahi mDNS/DNS-SD Daemon: avahi-daemon.<br/>').wait(40)
    .put('[ <span class="cs">ok</span> ] Starting Common Unix Printing System: cupsd<br/>').wait(90)
    .put('[ <span class="cs">ok</span> ] Starting MTA: exim4.<br/>').wait(20)
    .put('Debian GNU/Linux 7 egordm ttyl<br/>').wait(100)
    .clear().wait(40)
    .put('Welcome to H4xxor 0S<br/>').wait(100)
    .put('Login to continue<br/>').wait(100)
    .put('h4xx0r0s_login: ').wait(1000)
    .type('root', action1);
}

function action1() {
  promptCommandPrefix("password: ",$("#main_console_body"),1, function(out) {
    dialog2();
    return true;
  });
}

function dialog2() {
  var dialogue = typewriter(document.getElementById("main_console_body")).withAccuracy(98).withMinimumSpeed(10).withMaximumSpeed(15).build();
  dialogue
    .clear()
    .wait(250)
    .put("<span class='cs'>[ <span class='ce'>firewall</span> ] " +getTimePrefix()+" -!- sysadmin_3g0rdm [sysadmin_3g0rdm@157.114.154.224] has connected from external ip adress</span></br></br>").wait(1000)
    .put(getAdminPrefix())
    .type("Hello h4xx0r, you came here for a reason. I am sure you did. But you cant trust anyone.").wait(2000).type(" The world needs you! *cough* *cough*").wait(900).put("</br>")
    .type(" But first, prove to me you are worthy.").wait(1500).put("</br></br>"+getTimePrefix()+" -!-Root issues a command").wait(100)
    .put("</br>Pick a pill").wait(100)
    .put("</br></br>Commands:</br><span class='red'>red</span></br><span class='blue'>blue</span></br>").wait(100, action2);
}

function action2() {
  promptCommandPrefix(getRootPrefix(),$("#main_console_body"),0, function(out) {
      if(out === "blue") {
        var dialogue = typewriter(document.getElementById("main_console_body")).withAccuracy(98).withMinimumSpeed(10).withMaximumSpeed(15).build();
        dialogue.put("</br>").type("Too bad, you are too far to turn back. You have no other choice. Pick red.", action2);
        return true;
      } else if(out === "red"){
        dialog3();
        return true;
      } else {
        var dialoguez = typewriter(document.getElementById("main_console_body")).withAccuracy(98).withMinimumSpeed(10).withMaximumSpeed(15).build();
        dialoguez.put("</br>").type("You dont want to make me angry?").wait(600).type(" Do you?", action2);
        return false;
      }
  });
}

function dialog3() {
  var dialogue = typewriter(document.getElementById("main_console_body")).withAccuracy(98).withMinimumSpeed(13).withMaximumSpeed(20).build();
  dialogue
    .clear()
    .wait(250)
    .put(getAdminPrefix())
    .type("Good choice.").wait(500).type(" Lets start with hacking NASA and retrieving a very important document.").wait(300).put("</br>")
    .type("I am sure you can do this, you are the most MLG h4xx0r i know.").wait(400).type(" Dont let anyone know about this.").wait(200)
    .type(" ANYONE!").wait(200).type(" And remember, you know nothing about me.").wait(800).type(" I know everything about you.").wait(1000).put("</br></br>")
    .type("Let the h4xx1ng begin.").wait(2000, action3);
}

function action3() {
  $("#primary_console").addClass("console-hidden-left");
  $("#bruteforce_console").removeClass("console-hidden-right");
  dialog4();
}

function dialog4() {
  var dialogue = typewriter(document.getElementById("bruteforce_console_body")).withAccuracy(98).withMinimumSpeed(13).withMaximumSpeed(20).build();
  dialogue
    .clear()
    .put(getRootPrefix()).wait(2000)
    .type("hydra -s 465 -S -v -V -l r00t.admin@nasa.gov-x 10:12:al -t -w 32 smtp.nasa.gov smtp﻿ 129.164.248.225").wait(100).put("</br></br>").wait(300)
    .put("[DATA] attacking service smtp on port 465 with SSL</br>").wait(100)
    .put("[VERBOSE] Resolving addresses ... done</br>").wait(150)
    .put("[VERBOSE] using SMTP wormhole mechanism</br>").wait(100)
    .put("[VERBOSE] Detection encryption").wait(1000).put(".").wait(1000).put(".").wait(1000).put(".</br>").wait(500)
    .put("[INFO] Encryption SHA-512 detected</br>").wait(700)
    .put("[VERBOSE] Starting miners on 251127/723872 slaves</br>")
    .wait(2000)
    .put("[INFO] Opening net.miner gui global brute</br>").wait(2000, action4);
}

function action4() {
  $("#bruteforce_gui_console").removeClass("console-hidden-center");
  dialog5()
}

function dialog5() {
  var dialogue = typewriter(document.getElementById("bruteforce_gui_console_body")).withAccuracy(98).withMinimumSpeed(13).withMaximumSpeed(20).build();
  dialogue.clear().wait(2000)
    .put("Accessing the mainframe using a double-handshake attack on the firewall.</br>").wait(700)
    .put("Encryption type <span class='blue'>SHA-512</span> secret service</br>").wait(400)
    .put("Initiationg ANT</br>").wait(200)
    .put("Press any key to hack").wait(200, action5);
}

function action5() {
  $("#bruteforce_gui_console_body").append($('<div id="brutepassword"></div>'));
  startBruteforce(dialog6);
}

function dialog6() {
  var dialogue = typewriter(document.getElementById("bruteforce_gui_console_body")).withAccuracy(98).withMinimumSpeed(13).withMaximumSpeed(20).build();
  dialogue.wait(2000)
    .put("Succesfully obtained password for r00t.</br>").wait(700)
    .put("Proceeding to encrypted NASA terminal.</br>")
    .wait(3000, action6);
}

function action6() {
  setTimeout(function() {$("#bruteforce_console").addClass("console-hidden-right");},200);
  setTimeout(function() {$("#nasa_console").removeClass("console-hidden-center"); dialog7();},400);
  $("#bruteforce_gui_console").addClass("console-hidden-center");
}

function dialog7() {
  var dialogue = typewriter(document.getElementById("nasa_console_body")).withAccuracy(98).withMinimumSpeed(13).withMaximumSpeed(20).build();
  dialogue.wait(2000)
    .put("Welcome to encrypted nasa terminal. Please check in to continue</br>")
    .put('<span class="ci">login: ').wait(1000).type('r00t.admin').wait(400)
    .put('</br><span class="ci">password: ').wait(900).type('*******').wait(200).put("</br></br>")
    .put('<span class="cs">Login succeeded. Welcome </span>John Cena</span>')
    .put('</br>Loading last session')
    .wait(3000, action7);
}

var jsonNasaDocs = null;
function action7() {
  $("#nasa_files_console").removeClass("console-hidden-left");
  $("#nasa_document_console .close").click(function() {
    $("#nasa_document_console").addClass("console-hidden-left");
  });
  $(".nasa-file").click(function(){

    $("#nasa_document_console").addClass("console-hidden-left");
    setTimeout(function(){
      $("#nasa_document_console").removeClass("console-hidden-left");
    }, 300);

    if(jsonNasaDocs != null) {
     var content = jsonNasaDocs[$(this).attr('id')];
      $("#nasa_document_console_title").html($(this).html());
      $("#nasa_document_console_body").html(content);
      if($(this).attr('id') == "illuminati") {
        $('.jumpscares').append('<div ></div>'); setTimeout(function(){$('.jumpscares').empty();}, 500);
      } else if($(this).attr('id') == "birthday") {
        $('.send').css("display", "inline");
      } else {
        $('.send').css("display", "none");
      }
    }
  });

  $(".send").click(function(){
    $(".main_content").append($("<div class='distortion'></div>"));
  });

  jsonNasaDocs = new Object();
  $.getJSON("nasadocs.json", function(json) {
    jsonNasaDocs["league"] = json.league;
    jsonNasaDocs["illuminati"] = json.illuminati;
    jsonNasaDocs["worldwar"] = json.worldwar;
    jsonNasaDocs["hidebody"] = json.hidebody;
    jsonNasaDocs["nothing"] = json.nothing;
    jsonNasaDocs["michael"] = json.michael;
    jsonNasaDocs["birthday"] = json.birthday;
  });
}



function getAdminPrefix() {
   return "<span class='cs'>" +getTimePrefix() + " sysadmin_3g0rdm </span>";
}

function getTimePrefix() {
  var currentdate = new Date();
  return currentdate.getHours() + ":" + currentdate.getMinutes();
}

function getRootPrefix() {
  return '<span style="color:#ff0000;">r</span><span style="color:#ff2a00;">o</span><span style="color:#ff5500;">o</span><span style="color:#ff7f00;">t</span><span style="color:#ffaa00;">@</span><span style="color:#ffd400;">3</span><span style="color:#ffff00;">g</span><span style="color:#80ff00;">0</span><span style="color:#00ff00;">r</span><span style="color:#00ff55;">0</span><span style="color:#00ffaa;">S</span><span style="color:#00ffff;">:</span><span style="color:#00aaff;">~</span><span style="color:#0055ff;">#</span> ';
}
