var slist = [];


function am(i1, i2) {
    return (slist[i1][i2].value() - 127) / 128.0;
}

function do_the_math(u,v) {
    let x = (am(0,0)*u+am(1,2)*v+am(2,0)) / (am(0,2)*u+am(1,2)*v+am(2,2)); 
    let y = (am(0,1)*u+am(1,1)*v+am(2,1)) / (am(0,2)*u+am(1,2)*v+am(2,2));
    return {'x':x + 200, 'y':y + 200};
}

function show_shape(x1, y1, x2, y2, x3, y3, x4, y4) {
    line(x1, y1, x2, y2);
    line(x2, y2, x3, y3);
    line(x3, y3, x4, y4);
    line(x4, y4, x1, y1);

    let uv1 = do_the_math(x1, y1);
    let uv2 = do_the_math(x2, y2);
    let uv3 = do_the_math(x3, y3);
    let uv4 = do_the_math(x4, y4);

    text('uv1', uv1.x, uv1.y, 25);
    text('uv2', uv2.x, uv2.y, 25);
    text('uv3', uv3.x, uv3.y, 25);
    text('uv4', uv4.x, uv4.y, 25);

    // line(uv1.x, uv1.y, uv2.x, uv2.x);
    // line(uv2.x, uv2.y, uv3.x, uv3.x);
    // line(uv3.x, uv3.y, uv4.x, uv4.x);
    // line(uv4.x, uv4.y, uv1.x, uv1.x);
}


function show_text() {
    for (var i=0;i<3;i++) {
        for (var j=0;j<3;j++) {
            text('a'+i +''+j, slist[i][j].x + slist[i][j].width + 5, slist[i][j].y + 15)
        }
    }
}

function create_slider() {
    for (var i=0;i<3;i++) {
        let tmp = [];
        for (var j=0;j<3;j++) {
            let s = createSlider(0, 255, 128);
            s.position(20 + (s.width+50) * j, 20 + 50 * i);
            tmp.push(s);
        }
        slist.push(tmp);
    }
}

function setup() {
    createCanvas(800, 500);
    create_slider();
}

function draw() {
    background(220);
    show_text();
    show_shape(200, 200, 300, 200, 300, 300, 200, 300);
}