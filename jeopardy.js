/* I copied this function from my treasure hunt program. It will get the id passed into it from the markup. It's specified in the markup as onclick=checkPosition(idNumber). I had a really hard time getting this basic part to work. I probably had the wrong file path in the markup for the JS, and I was trying to use innerHTML to change what the button text says after clicking it. To do this, you have to use value instead. The biggest challenge was finally using just numbers as ID's in the markup. After I changed this and updated the JS, everything started working. Using strings just threw everything off. Most likely it's just me not knowing how to properly utilize string arguments in ID's and call them properly in the JS.
*/
var myWindow;
function checkPosition(id) {
  switch (id) {
    case 12:
       document.getElementById(id).value = "X";
       myWindow = window.open("", "MsgWindow", "width=auto,height=100%");
       myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
      // function popitup(url) {
      // newwindow=window.open(url,'R1C1','height=auto,width=100%');
      // if (window.focus) {newwindow.focus()}
      // return false;
      // }
      break;
    case 14:
      document.getElementById(id).value = "X";
      if (myWindow) {
        myWindow.close();
      }
      myWindow = window.open("", "MsgWindow", "width=200,height=100");
      myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
      break;
    case 16:
      document.getElementById(id).value = "X";
      if (myWindow) {
        myWindow.close();
      }
      myWindow = window.open("", "MsgWindow", "width=200,height=100");
      myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
      break;
    case 18:
      document.getElementById(id).value = "X";
      if (myWindow) {
        myWindow.close();
      }
      myWindow = window.open("", "MsgWindow", "width=200,height=100");
      myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
      break;
    case 110:
      document.getElementById(id).value = "X";
      if (myWindow) {
        myWindow.close();
      }
      myWindow = window.open("", "MsgWindow", "width=200,height=100");
      myWindow.document.write("<p>This is 'MsgWindow'. I am 200px wide and 100px tall!</p>");
      break;

    case 22:
      document.getElementById(id).value = "Q1 cat 2";
      break;
    case 24:
      document.getElementById(id).value = "Q2 cat 2";
      break;
    case 26:
      document.getElementById(id).value = "Q3 cat 2";
      break;
    case 28:
      document.getElementById(id).value = "Q4 cat 2";
      break;
    case 210:
      document.getElementById(id).value = "Q5 cat 2";
      break;

    case 32:
      break;
    case 34:
      break;
    case 36:
      break;
    case 38:
      break;
    case 310:
      break;

    case 42:
      break;
    case 44:
      break;
    case 46:
      break;
    case 48:
      break;
    case 410:
      break;

    case 52:
      break;
    case 54:
      break;
    case 56:
      break;
    case 58:
      break;
    case 510:
      break;

    case 62:
      break;
    case 64:
      break;
    case 66:
      break;
    case 68:
      break;
    case 610:
      break;
  }
}
