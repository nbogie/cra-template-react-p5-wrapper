import { P5Instance } from "react-p5-wrapper";
// import ORIGINAL_P5 from 'p5';  //for types

export function sketch(p5: P5Instance) {

    let counter = 99;
    let x: number;
    let y: number;
    let greeting = "hi";

    p5.updateWithProps = props => {
        if (props.counter !== undefined) {
            counter = props.counter;
        }
    };

    p5.setup = () => {
        const canvas = p5.createCanvas(600, 400);

        x = p5.width / 2;
        y = p5.height / 2;

        canvas.mousePressed(handleMousePressed);
    }

    p5.draw = () => {
        p5.background(190);
        drawText();
        moveText();
    };



    function drawText() {
        p5.textSize(160);
        p5.fill("black");
        p5.textAlign(p5.CENTER, p5.CENTER);
        p5.text(greeting + ":" + counter, x, y);
    }

    function moveText() {
        x++;
        if (x > p5.width + 50) {
            x = -50;
        }
    }

    function handleMousePressed() {
        greeting = p5.random(["hi", "hola", "ciao"]);
    }
}
