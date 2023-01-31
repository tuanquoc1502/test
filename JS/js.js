
const color = [
    'ip13pmblue',
    'ip13pmgold',
    'ip13pmgra',
    'ip13pmsil',

]

const text = [
    'iPhone 13 Pro Max Serria Blue Chính Hãng VN/A Newseal',
    'iPhone 13 Pro Max Gold Chính Hãng VN/A Newseal',
    'iPhone 13 Pro Max Graphite Chính Hãng VN/A Newseal',
    'iPhone 13 Pro Max Silver Chính Hãng VN/A Newseal',

]

const price128 = [
    '30.890.000đ',
    '30.890.000đ',
    '30.490.000đ',
    '30.490.000đ',

]

const priceElement = document.querySelector('.priceIphone')
const textElement = document.querySelector('.textIphone')
const img = document.querySelector('.box1')
const colorIphone = document.querySelectorAll('.colorIphone')
colorIphone.forEach((index, tab) => {

    index.onclick = () => {
        img.innerHTML = `<img src="images/products/iPhone/${color[tab]}.png"> `
        textElement.innerHTML = `${text[tab]}`
        priceElement.innerHTML = `${price128[tab]}`
    }

})

// iphone 13 pro
document.getElementById("img-gold").style.display = 'none';
document.getElementById("img-gra").style.display = 'none';
document.getElementById("img-sil").style.display = 'none';
document.getElementById("text-gold").style.display = 'none';
document.getElementById("text-gra").style.display = 'none';
document.getElementById("text-sil").style.display = 'none';
document.getElementById("pri-gold").style.display = 'none';
document.getElementById("pri-gra").style.display = 'none';
document.getElementById("pri-sil").style.display = 'none';


document.getElementById('btn-blue').onclick = function () {
    document.getElementById("img-gold").style.display = 'none';
    document.getElementById("img-gra").style.display = 'none';
    document.getElementById("img-sil").style.display = 'none';
    document.getElementById("text-gold").style.display = 'none';
    document.getElementById("text-gra").style.display = 'none';
    document.getElementById("text-sil").style.display = 'none';
    document.getElementById("pri-gold").style.display = 'none';
    document.getElementById("pri-gra").style.display = 'none';
    document.getElementById("pri-sil").style.display = 'none';
    document.getElementById("img-blue").style.display = 'inline-block';
    document.getElementById("text-blue").style.display = 'inline-block';
    document.getElementById("pri-blue").style.display = 'inline-block';

}
document.getElementById('btn-gold').onclick = function () {
    document.getElementById("img-blue").style.display = 'none';
    document.getElementById("img-gra").style.display = 'none';
    document.getElementById("img-sil").style.display = 'none';
    document.getElementById("text-blue").style.display = 'none';
    document.getElementById("text-gra").style.display = 'none';
    document.getElementById("text-sil").style.display = 'none';
    document.getElementById("pri-blue").style.display = 'none';
    document.getElementById("pri-gra").style.display = 'none';
    document.getElementById("pri-sil").style.display = 'none';
    document.getElementById("img-gold").style.display = 'inline-block';
    document.getElementById("text-gold").style.display = 'inline-block';
    document.getElementById("pri-gold").style.display = 'inline-block';

}
document.getElementById('btn-gra').onclick = function () {
    document.getElementById("img-blue").style.display = 'none';
    document.getElementById("img-gold").style.display = 'none';
    document.getElementById("img-sil").style.display = 'none';
    document.getElementById("text-blue").style.display = 'none';
    document.getElementById("text-gold").style.display = 'none';
    document.getElementById("text-sil").style.display = 'none';
    document.getElementById("pri-blue").style.display = 'none';
    document.getElementById("pri-gold").style.display = 'none';
    document.getElementById("pri-sil").style.display = 'none';
    document.getElementById("img-gra").style.display = 'inline-block';
    document.getElementById("text-gra").style.display = 'inline-block';
    document.getElementById("pri-gra").style.display = 'inline-block';

}
document.getElementById('btn-sil').onclick = function () {
    document.getElementById("img-blue").style.display = 'none';
    document.getElementById("img-gold").style.display = 'none';
    document.getElementById("img-gra").style.display = 'none';
    document.getElementById("text-blue").style.display = 'none';
    document.getElementById("text-gold").style.display = 'none';
    document.getElementById("text-gra").style.display = 'none';
    document.getElementById("pri-blue").style.display = 'none';
    document.getElementById("pri-gold").style.display = 'none';
    document.getElementById("pri-gra").style.display = 'none';
    document.getElementById("img-sil").style.display = 'inline-block';
    document.getElementById("text-sil").style.display = 'inline-block';
    document.getElementById("pri-sil").style.display = 'inline-block';

}

// iphone 13
document.getElementById("img-mid").style.display = 'none';
document.getElementById("img-pink").style.display = 'none';
document.getElementById("img-red").style.display = 'none';
document.getElementById("img-sta").style.display = 'none';
document.getElementById("text-mid").style.display = 'none';
document.getElementById("text-pink").style.display = 'none';
document.getElementById("text-red").style.display = 'none';
document.getElementById("text-sta").style.display = 'none';
document.getElementById("pri-mid").style.display = 'none';
document.getElementById("pri-pink").style.display = 'none';
document.getElementById("pri-red").style.display = 'none';
document.getElementById("pri-sta").style.display = 'none';


document.getElementById('btn-13blue').onclick = function () {
    document.getElementById("img-mid").style.display = 'none';
    document.getElementById("img-pink").style.display = 'none';
    document.getElementById("img-red").style.display = 'none';
    document.getElementById("img-sta").style.display = 'none';
    document.getElementById("text-mid").style.display = 'none';
    document.getElementById("text-pink").style.display = 'none';
    document.getElementById("text-red").style.display = 'none';
    document.getElementById("text-sta").style.display = 'none';
    document.getElementById("pri-mid").style.display = 'none';
    document.getElementById("pri-pink").style.display = 'none';
    document.getElementById("pri-red").style.display = 'none';
    document.getElementById("pri-sta").style.display = 'none';
    document.getElementById("img-13blue").style.display = 'inline-block';
    document.getElementById("text-13blue").style.display = 'inline-block';
    document.getElementById("pri-13blue").style.display = 'inline-block';
}
document.getElementById('btn-mid').onclick = function () {
    document.getElementById("img-13blue").style.display = 'none';
    document.getElementById("img-pink").style.display = 'none';
    document.getElementById("img-red").style.display = 'none';
    document.getElementById("img-sta").style.display = 'none';
    document.getElementById("text-13blue").style.display = 'none';
    document.getElementById("text-pink").style.display = 'none';
    document.getElementById("text-red").style.display = 'none';
    document.getElementById("text-sta").style.display = 'none';
    document.getElementById("pri-13blue").style.display = 'none';
    document.getElementById("pri-pink").style.display = 'none';
    document.getElementById("pri-red").style.display = 'none';
    document.getElementById("pri-sta").style.display = 'none';
    document.getElementById("img-mid").style.display = 'inline-block';
    document.getElementById("text-mid").style.display = 'inline-block';
    document.getElementById("pri-mid").style.display = 'inline-block';
}
document.getElementById('btn-pink').onclick = function () {
    document.getElementById("img-13blue").style.display = 'none';
    document.getElementById("img-mid").style.display = 'none';
    document.getElementById("img-red").style.display = 'none';
    document.getElementById("img-sta").style.display = 'none';
    document.getElementById("text-13blue").style.display = 'none';
    document.getElementById("text-mid").style.display = 'none';
    document.getElementById("text-red").style.display = 'none';
    document.getElementById("text-sta").style.display = 'none';
    document.getElementById("pri-13blue").style.display = 'none';
    document.getElementById("pri-mid").style.display = 'none';
    document.getElementById("pri-red").style.display = 'none';
    document.getElementById("pri-sta").style.display = 'none';
    document.getElementById("img-pink").style.display = 'inline-block';
    document.getElementById("text-pink").style.display = 'inline-block';
    document.getElementById("pri-pink").style.display = 'inline-block';
}

document.getElementById('btn-red').onclick = function () {
    document.getElementById("img-13blue").style.display = 'none';
    document.getElementById("img-mid").style.display = 'none';
    document.getElementById("img-pink").style.display = 'none';
    document.getElementById("img-sta").style.display = 'none';
    document.getElementById("text-13blue").style.display = 'none';
    document.getElementById("text-mid").style.display = 'none';
    document.getElementById("text-pink").style.display = 'none';
    document.getElementById("text-sta").style.display = 'none';
    document.getElementById("pri-13blue").style.display = 'none';
    document.getElementById("pri-mid").style.display = 'none';
    document.getElementById("pri-pink").style.display = 'none';
    document.getElementById("pri-sta").style.display = 'none';
    document.getElementById("img-red").style.display = 'inline-block';
    document.getElementById("text-red").style.display = 'inline-block';
    document.getElementById("pri-red").style.display = 'inline-block';
}
document.getElementById('btn-sta').onclick = function () {
    document.getElementById("img-13blue").style.display = 'none';
    document.getElementById("img-mid").style.display = 'none';
    document.getElementById("img-pink").style.display = 'none';
    document.getElementById("img-red").style.display = 'none';
    document.getElementById("text-13blue").style.display = 'none';
    document.getElementById("text-mid").style.display = 'none';
    document.getElementById("text-pink").style.display = 'none';
    document.getElementById("text-red").style.display = 'none';
    document.getElementById("pri-13blue").style.display = 'none';
    document.getElementById("pri-mid").style.display = 'none';
    document.getElementById("pri-pink").style.display = 'none';
    document.getElementById("pri-red").style.display = 'none';
    document.getElementById("img-sta").style.display = 'inline-block';
    document.getElementById("text-sta").style.display = 'inline-block';
    document.getElementById("pri-sta").style.display = 'inline-block';
}


