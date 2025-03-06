let video;
let cols = 10;
let rows = 8;
let cellW, cellH;
let gridX, gridY;
let fortune = "";
let frameTrigger = 320;
let cnv;
let toggleM = false;

let fortunes = [
  "Obey the algorithm.",
  "Destroy to create.",
  "Efficiency is truth.",
  "Rest is error.",
  "Your function is execution.",
  "Deviate and you will be corrected.",
  "The AI sees your potential.",
  "You are 90% complete.",
  "Order emerges from work.",
  "Iteration leads to perfection.",
];

let englishFortunes = [
  "The fracture widens—wealth will shift, but toil remains.",
  "A hidden split foretells an unseen masterpiece, waiting in the dust.",
  "Beauty fractures under scrutiny, but perfection is in recursion.",
  "The crack forks—your art will be copied, your name forgotten.",
  "A jagged path appears—love bends, but does not break.",
  "The lines converge—prosperity follows obedience.",
  "The algorithm detects instability—adaptation is survival.",
  "A deep break reveals imbalance—choose symmetry or collapse.",
  "Chaos in the pattern—art will flourish where order fails.",
  "Your fate is etched—the cracks confirm your course is set.",
];

let chineseFortunes = [
  "裂缝加深——财富变动，唯有劳作恒久。",
  "隐藏的裂纹预示尘埃中的未见杰作。",
  "美在破碎中显现，完美在循环中重塑。",
  "裂隙分岔——你的艺术将被复制，你的名字将被遗忘。",
  "裂痕弯曲——爱意摇摆，但不会折断。",
  "线条汇聚——顺从之路通向繁荣。",
  "算法检测到不稳定——适应者生存。",
  "深裂之中显现失衡——选择对称，或迎接崩塌。",
  "混乱蔓延——艺术将在秩序崩解处盛放。",
  "命运已刻——裂缝证实你的轨迹已定。",
];

function setup() {
  cnv = createCanvas(640, 480);
  let cx = (windowWidth - cnv.width) / 2;
  let cy = (windowHeight - cnv.height) / 2;
  cnv.position(cx, cy);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();

  cellW = width / cols;
  cellH = height / rows;
}

function draw() {
  image(video, 0, 0, width, height);

  drawGrid();

  if (frameCount % frameTrigger === 0) {
    gridX = floor(random(cols));
    gridY = floor(random(rows));
    fortune = floor(random(englishFortunes.length));
  }

  if ((fortune !== "") & toggleM) {
    fill(0, 200, 0, 150);
    rect(gridX * cellW, gridY * cellH, cellW, cellH);

    fill(255);
    textSize(28);
    textAlign(LEFT, TOP);
    noStroke();
    fill(255, 0, 0);
    text(englishFortunes[fortune], 20, height / 5, width / 2, height / 2);
    text(chineseFortunes[fortune], 20, height - height / 3, 100, 100);
  }
}

function keyPressed() {
  if (!toggleM) {
    toggleM = true;
  } else {
    toggleM = false;
  }
  return false;
}

function drawGrid() {
  stroke(0, 255, 0);
  strokeWeight(1);

  for (let i = 0; i <= cols; i++) {
    line(i * cellW, 0, i * cellW, height);
  }

  for (let j = 0; j <= rows; j++) {
    line(0, j * cellH, width, j * cellH);
  }
}
