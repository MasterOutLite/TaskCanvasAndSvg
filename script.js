"use strict";

const canvas = document.querySelector("#canvas");

if (canvas.getContext) {
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const widthCanvas = canvas.width;
    const heightCanvas = canvas.height;

    for (let i = 0, step = 5; i < 20; i++, step += 200) {
        const randY = Math.random() * (60 - 10) + 10;
        drawCloud(context, step, randY, 2);
    }

    for (let i = 0, step = 5; i < 20; i++, step += 200) {
        const randY = Math.random() * (40 - 10) + 10;
        drawTree(context, step, heightCanvas - 240 + randY, 2)
    }

    drawSun(context, widthCanvas - 50, 40, 4);

    drawBird(context, 300, 200, 5);
    drawBird(context, 800, 150, 5);
    drawBird(context, 1000, 300, 5);
}

const svgns = "http://www.w3.org/2000/svg";
const svg = document.querySelector("#svg");

const rect = document.createElementNS(svgns, 'rect');
rect.setAttributeNS(null, 'x', 100);
rect.setAttributeNS(null, 'y', 300);
rect.setAttributeNS(null, 'width', '20');
rect.setAttributeNS(null, 'height', '50');
rect.setAttributeNS(null, 'style', 'fill: red;');
svg.append(rect);

const rect2 = document.createElementNS(svgns, 'rect');
rect2.setAttributeNS(null, 'x', 70);
rect2.setAttributeNS(null, 'y', 220);
rect2.setAttributeNS(null, 'width', '80');
rect2.setAttributeNS(null, 'height', '80');
rect2.setAttributeNS(null, 'style', 'fill: green;');
svg.append(rect2);

const ellipse = document.createElementNS(svgns, 'ellipse');
ellipse.setAttributeNS(null, 'cx', 800);
ellipse.setAttributeNS(null, 'cy', 90);
ellipse.setAttributeNS(null, 'rx', '150');
ellipse.setAttributeNS(null, 'ry', '60');
ellipse.setAttributeNS(null, 'style', 'fill: blue;');
svg.append(ellipse);

const ellipse2 = document.createElementNS(svgns, 'ellipse');
ellipse2.setAttributeNS(null, 'cx', 300);
ellipse2.setAttributeNS(null, 'cy', 60);
ellipse2.setAttributeNS(null, 'rx', '150');
ellipse2.setAttributeNS(null, 'ry', '60');
ellipse2.setAttributeNS(null, 'style', 'fill: blue;');
svg.append(ellipse2);

function drawTree(ctx, x, y, size = 1) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(200, 0, 0)";
    const width = 60 * size;
    const height = 70 * size;
    ctx.fillRect(x, y, width, height);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(x + width / 3, y + height, 20 * size, 40 * size);
}

function drawSun(ctx, x, y, size = 1) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 227, 43)";

    ctx.arc(x, y, 20 * size, 0, Math.PI * 2);
    ctx.fill();
}

function drawBird(ctx, x, y, size = 1) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(106, 21, 209)";

    const width = 5 * size;
    const height = 5 * size;
    ctx.ellipse(x, y, width, height, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.ellipse(x + width * 2, y, 5 * size, 10 * size, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.ellipse(x + width * 2, y - (5 + height), 3 * size, 8 * size, Math.PI / 4, 0, 2 * Math.PI);
    ctx.fill();
}

function drawCloud(ctx, x, y, size = 1) {
    ctx.beginPath();
    ctx.fillStyle = "rgb(10, 185, 204)";
    ctx.ellipse(x + 20, y + 5, 10 * size, 40 * size, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.beginPath();
    ctx.fillStyle = "rgb(13, 190, 255)";

    ctx.ellipse(x, y, 10 * size, 40 * size, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();

    ctx.ellipse(x + 15, y + 15, 10 * size, 40 * size, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fill();
}
