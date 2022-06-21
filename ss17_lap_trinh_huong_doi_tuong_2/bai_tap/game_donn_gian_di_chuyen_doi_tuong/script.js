/**
 * Created by DatPham on 21/-6/2022.
 */

class Hero {
    constructor(image, top, left, size) {
        this.image = image;
        this.top = top;
        this.left = left;
        this.size = size;
    }

    getHeroElement() {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    moveRight(tocDo) {
        this.left += tocDo;
        console.log('ok: ' + this.left);
    }

    moveLeft(tocDo) {
        this.left -= tocDo;
        console.log('ok: ' + this.left);
    }

    moveTop(tocDo) {
        this.top -= tocDo;
        console.log('ok: ' + this.top);
    }

    moveDown(tocDo) {
        this.top += tocDo;
    }
}

let hero = new Hero('avatar2.png', 0, 0, 200);
let tocDo = parseInt(prompt('Nhập tốc độ di chuyển.'));

function start() {
    if (hero.left < window.innerWidth - hero.size && hero.top===0) {
        hero.moveRight(tocDo);
    } else if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown(tocDo);
    }else if (hero.left > 0 && hero.top>=window.innerHeight-hero.size){
        hero.moveLeft(tocDo);
    }
    else if (hero.left ===0&& hero.top>0 ){
        hero.moveTop(tocDo);
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 2)
}

start();