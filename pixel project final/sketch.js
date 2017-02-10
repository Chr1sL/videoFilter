// https://github.com/kylemcdonald/AppropriatingNewTechnologies/wiki/Week-2
var capture;
var tracker
var w = 640,
  h = 480;

function setup() {
  capture = createCapture(VIDEO);
  createCanvas(w, h);
  capture.size(w, h);
  capture.hide();

  colorMode(HSB);

  tracker = new clm.tracker();
  tracker.init(pModel);
  tracker.start(capture.elt);
}

function draw() {
  image(capture, 0, 0, w, h);
  var positions = tracker.getCurrentPosition();

  if (positions.length > 0) {
    // var mouthLeft = createVector(positions[44][0], positions[44][1]);
    // var mouthRight = createVector(positions[50][0], positions[50][1]);
    // var smile = mouthLeft.dist(mouthRight);
    noStroke();
    //colorful shapes
    fill(0, 163, 136, 5);
    quad(positions[3][0], positions[3][1],
      positions[23][0], positions[23][1],
      positions[1][0], positions[1][1], positions[2][0], positions[2][1]);

    fill(155, 89, 182, 5);
    triangle(positions[4][0], positions[4][1], positions[35][0], positions[35][1], positions[44][0], positions[44][1]);

    fill(30, 170, 194, 5);
    triangle(positions[0][0], positions[0][1],
      positions[22][0], positions[22][1],
      positions[1][0], positions[1][1]);

    //eyerbrows
    fill(49, 12, 12, 5);
    triangle(positions[19][0], positions[19][1],
      positions[20][0], positions[20][1],
      positions[22][0], positions[22][1]);

    fill(49, 12, 12, 5);
    triangle(positions[18][0], positions[18][1],
      positions[16][0], positions[16][1],
      positions[15][0], positions[15][1]);

    fill(209, 244, 244, 5);
    triangle(positions[23][0], positions[23][1],
      positions[3][0], positions[3][1],
      positions[34][0], positions[34][1]);

    fill(100, 100, 100, 5);
    triangle(positions[22][0], positions[22][1],
      positions[33][0], positions[33][1],
      positions[18][0], positions[18][1]);

    fill(100, 100, 100, 5);
    triangle(positions[3][0], positions[3][1],
      positions[34][0], positions[34][1],
      positions[4][0], positions[4][1]);

    fill(255, 255, 255, 5);
    triangle(positions[5][0], positions[5][1],
      positions[44][0], positions[44][1],
      positions[4][0], positions[4][1]);

    fill(0, 85, 85, 5);
    triangle(positions[45][0], positions[45][1],
      positions[44][0], positions[44][1],
      positions[60][0], positions[60][1]);

    fill(85, 100, 85, 5);
    triangle(positions[44][0], positions[44][1],
      positions[5][0], positions[5][1],
      positions[6][0], positions[6][1]);

    fill(100, 240, 120, 5);
    triangle(positions[0][0], positions[0][1],
      positions[19][0], positions[19][1],
      positions[22][0], positions[22][1]);

    fill(20, 20, 90, 5);
    triangle(positions[0][0], positions[0][1],
      positions[19][0], positions[19][1],
      positions[22][0], positions[22][1]);

    fill(20, 20, 90, 5);
    quad(positions[6][0], positions[6][1],
      positions[7][0], positions[7][1],
      positions[54][0], positions[54][1], positions[55][0], positions[55][1]);

    fill(40, 100, 200, 5);
    quad(positions[8][0], positions[8][1],
      positions[7][0], positions[7][1],
      positions[54][0], positions[54][1],
      positions[53][0], positions[53][1]);

    fill(20, 0, 20, 5);
    triangle(positions[8][0], positions[8][1],
      positions[9][0], positions[9][1],
      positions[53][0], positions[53][1]);

    fill(20, 40, 60, 5);
    quad(positions[44][0], positions[44][1], positions[35][0], positions[35][1],
      positions[36][0], positions[36][1],
      positions[37][0], positions[37][1]);

    fill(10, 80, 100, 5);
    quad(positions[9][0], positions[9][1], positions[10][0], positions[10][1],
      positions[52][0], positions[52][1],
      positions[53][0], positions[53][1]);

    fill(190, 200, 50, 5);
    triangle(positions[11][0], positions[11][1], positions[10][0], positions[10][1],
      positions[52][0], positions[52][1],
      positions[51][0], positions[51][1]);

    fill(210, 200, 50, 5);
    quad(positions[11][0], positions[11][1], positions[12][0], positions[12][1],
      positions[52][0], positions[52][1],
      positions[51][0], positions[51][1]);

    fill(190, 200, 50, 5);
    triangle(positions[11][0], positions[11][1], positions[10][0], positions[10][1],
      positions[51][0], positions[51][1],
      positions[52][0], positions[52][1]);

    fill(280, 80, 40, 5);
    quad(positions[13][0], positions[13][1], positions[12][0], positions[12][1],
      positions[51][0], positions[51][1],
      positions[50][0], positions[50][1]);

    fill(200, 300, 40, 5);
    triangle(positions[13][0], positions[13][1],
      positions[49][0], positions[49][1],
      positions[50][0], positions[50][1]);

    fill(275, 80, 270, 5);
    triangle(positions[13][0], positions[13][1], positions[14][0], positions[14][1],
      positions[49][0], positions[49][1]);

    fill(275, 80, 270, 5);
    quad(positions[44][0], positions[44][1], positions[45][0], positions[45][1],
      positions[46][0], positions[46][1],
      positions[37][0], positions[37][1]);

    fill(155, 89, 75, 5);
    quad(positions[48][0], positions[48][1], positions[47][0], positions[47][1],
      positions[46][0], positions[46][1],
      positions[37][0], positions[37][1]);

    fill(10, 80, 100, 5);
    triangle(positions[37][0], positions[37][1],
      positions[48][0], positions[48][1],
      positions[49][0], positions[49][1]);

    fill(80, 89, 75, 5);
    quad(positions[37][0], positions[37][1], positions[38][0], positions[38][1],
      positions[49][0], positions[49][1],
      positions[48][0], positions[48][1]);

    fill(209, 244, 244, 5);
    quad(positions[38][0], positions[38][1],
      positions[49][0], positions[49][1],
      positions[31][0], positions[31][1],
      positions[39][0], positions[39][1]);

    fill(155, 89, 182, 5);
    quad(positions[31][0], positions[31][1],
      positions[70][0], positions[70][1],
      positions[14][0], positions[14][1],
      positions[49][0], positions[49][1]);

    fill(40, 100, 200, 5);
    quad(positions[34][0], positions[34][1],
      positions[35][0], positions[35][1],
      positions[36][0], positions[36][1],
      positions[41][0], positions[41][1]);

    fill(155, 89, 182, 5);
    triangle(positions[33][0], positions[33][1],
      positions[34][0], positions[34][1],
      positions[41][0], positions[41][1]);

    fill(30, 170, 194, 5);
    triangle(positions[36][0], positions[36][1],
      positions[37][0], positions[37][1],
      positions[62][0], positions[62][1]);

    fill(240, 60, 100, 5);
    triangle(positions[41][0], positions[41][1],
      positions[42][0], positions[42][1],
      positions[62][0], positions[62][1]);

    fill(90, 100, 50, 5);
    triangle(positions[40][0], positions[40][1],
      positions[41][0], positions[41][1],
      positions[62][0], positions[62][1]);

    fill(125, 50, 100, 5);
    quad(positions[40][0], positions[40][1],
      positions[43][0], positions[43][1],
      positions[37][0], positions[37][1],
      positions[62][0], positions[62][1]);

    fill(125, 50, 50, 5);
    quad(positions[40][0], positions[40][1],
      positions[43][0], positions[43][1],
      positions[38][0], positions[38][1],
      positions[39][0], positions[39][1]);

    fill(90, 100, 50, 5);
    triangle(positions[39][0], positions[39][1],
      positions[40][0], positions[40][1],
      positions[31][0], positions[31][1]);

    fill(20, 200, 150, 5);
    triangle(positions[31][0], positions[31][1],
      positions[69][0], positions[69][1],
      positions[40][0], positions[40][1]);

    fill(190, 120, 150, 5);
    triangle(positions[40][0], positions[40][1],
      positions[41][0], positions[41][1],
      positions[33][0], positions[33][1]);

    fill(125, 50, 50, 5);
    quad(positions[22][0], positions[22][1],
      positions[24][0], positions[24][1],
      positions[64][0], positions[64][1],
      positions[33][0], positions[33][1]);

    fill(190, 120, 150, 5);
    triangle(positions[64][0], positions[64][1],
      positions[25][0], positions[25][1],
      positions[33][0], positions[33][1]);

    fill(275, 80, 270, 5);
    quad(positions[33][0], positions[33][1],
      positions[25][0], positions[25][1],
      positions[65][0], positions[65][1],
      positions[34][0], positions[34][1]);

    fill(125, 50, 50, 5);
    quad(positions[23][0], positions[23][1],
      positions[26][0], positions[26][1],
      positions[65][0], positions[65][1],
      positions[34][0], positions[34][1]);

    fill(125, 50, 50, 5);
    quad(positions[14][0], positions[14][1],
      positions[28][0], positions[28][1],
      positions[29][0], positions[29][1],
      positions[15][0], positions[15][1]);

    fill(46, 78, 39, 5);
    quad(positions[15][0], positions[15][1],
      positions[18][0], positions[18][1],
      positions[68][0], positions[68][1],
      positions[29][0], positions[29][1]);

    fill(29, 59, 120, 5);
    quad(positions[18][0], positions[18][1],
      positions[68][0], positions[68][1],
      positions[30][0], positions[30][1],
      positions[33][0], positions[33][1]);

    fill(125, 50, 50, 5);
    quad(positions[33][0], positions[33][1],
      positions[30][0], positions[30][1],
      positions[69][0], positions[69][1],
      positions[40][0], positions[40][1]);

    //lips
    fill(0, 85, 85, 5);
    triangle(positions[55][0], positions[55][1],
      positions[44][0], positions[44][1],
      positions[6][0], positions[6][1]);

    fill(20, 20, 500, 5);
    triangle(positions[45][0], positions[45][1],
      positions[46][0], positions[46][1],
      positions[60][0], positions[60][1]);

    fill(0, 85, 200, 5);
    triangle(positions[44][0], positions[44][1],
      positions[45][0], positions[45][1],
      positions[60][0], positions[60][1]);

    fill(0, 85, 40, 5);
    quad(positions[46][0], positions[46][1],
      positions[47][0], positions[47][1],
      positions[48][0], positions[48][1],
      positions[60][0], positions[60][1]);

    fill(0, 85, 100, 5);
    triangle(positions[48][0], positions[48][1],
      positions[49][0], positions[49][1],
      positions[60][0], positions[60][1]);

    fill(0, 85, 65, 5);
    quad(positions[49][0], positions[49][1],
      positions[50][0], positions[50][1],
      positions[59][0], positions[59][1],
      positions[60][0], positions[60][1]);

    fill(20, 20, 40, 5);
    quad(positions[50][0], positions[50][1],
      positions[58][0], positions[58][1],
      positions[52][0], positions[52][1],
      positions[51][0], positions[51][1]);

    fill(0, 85, 150, 5);
    quad(positions[50][0], positions[50][1],
      positions[58][0], positions[58][1],
      positions[52][0], positions[52][1],
      positions[51][0], positions[51][1]);

    fill(20, 20, 30, 5);
    triangle(positions[52][0], positions[52][1],
      positions[58][0], positions[58][1],
      positions[53][0], positions[53][1]);

    fill(0, 58, 82, 5);
    triangle(positions[53][0], positions[53][1],
      positions[57][0], positions[57][1],
      positions[58][0], positions[58][1]);

    fill(20, 40, 100, 5);
    triangle(positions[53][0], positions[53][1],
      positions[57][0], positions[57][1],
      positions[56][0], positions[56][1]);

    fill(0, 85, 75, 5);
    quad(positions[55][0], positions[55][1],
      positions[56][0], positions[56][1],
      positions[53][0], positions[53][1],
      positions[54][0], positions[54][1]);

    fill(20, 20, 500, 5);
    triangle(positions[44][0], positions[44][1],
      positions[55][0], positions[55][1],
      positions[56][0], positions[56][1]);
  }

}