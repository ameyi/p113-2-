function setup(){
    canvas = createCanvas(1000, 1000)
    canvas.position(110, 250)
    video = createCapture(VIDEO)  
    video.hide()
    filter_color = ""
}
function draw(){
    fill(0, 168, 168)
    stroke(100, 160, 0)
    circle(800, 100, 300, 300)


    image(video, 0, 0, 640, 480)
    tint(filter_color)
}
function take_snapshot(){
    save('ameya.png')
}
function filtercolor(){
    filter_color = document.getElementById("color_name").value;
}