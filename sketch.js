var serial; // variable to hold an instance of the serialport library
var portName = '/dev/cu.usbmodem641';  // fill in your serial port name here
var inData;
var img; // Declaring variable image



function setup() {
 createCanvas(1270, 640);
   // set default background color
  c = color(255, 255, 255);

  
 
 serial = new p5.SerialPort();    // make a new instance of the serialport library
 serial.on('list', printList);    // set a callback function for the serialport list event
 serial.on('data', serialEvent);    // callback for when new data arrives
 
 // change the data rate to whatever you wish
 var options = { baudrate: 9600};
 serial.open(portName, options);

}

function draw() {
  fill(0);
  // clear background
  background(c);

  // print out the sensor value
  text("chao says: " + inData, 30, 30);
  ellipse(width/2, height/2, inData, inData);
}

function serialEvent() {
  // retreive value from serial port
  inData = Number(serial.read());
}


// print list of ports for debugging
function printList(portList) {
  // portList is an array of serial port names
  for (var i = 0; i < portList.length; i++) {
    // Display the list the console:
  print(i + " " + portList[i]);
   }
}

function keyPressed()
{
 // UP key
  if(keyCode == UP_ARROW)
  {
    c = color(210, 255, 90);
  }
 
  // DOWN key
  if(keyCode == DOWN_ARROW)
  { 
    c = color(60, 60, 30);
  }
 
  // RIGHT key
  if(keyCode == RIGHT_ARROW)
  {
    c = color(250, 73, 10);
  }
 
  // LEFT key
  if(keyCode == LEFT_ARROW)
  {
    c = color(100, 198, 5);
  }
}
