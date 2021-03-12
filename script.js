const topLeft = document.getElementById('topLeft');
const preview = document.getElementById('preview');
const topLeftBtn = document.getElementById('topLeftBtn');
const topRightBtn = document.getElementById('topRightBtn');
const bottomLeftBtn = document.getElementById('bottomLeftBtn');
const bottomRightBtn = document.getElementById('bottomRightBtn');
const displayTopLeft = document.getElementById('displayTopLeft');
const displayTopRight = document.getElementById('displayTopRight');
const displayResult = document.getElementById('displayResult');
const copyButton = document.getElementById('copyCss');

const changeTopLeftRadius = () => {
    preview.style.borderTopLeftRadius = `${topLeft.value}%`;
    displayTopLeft.innerHTML = `${topLeft.value}%`;
    document.getElementById('tLeft').innerText = `${topLeft.value}% `;
}

const changeTopRightRadius = () => {
    preview.style.borderTopRightRadius = `${topRight.value}%`;
    displayTopRight.innerHTML = `${topRight.value}%`;
    document.getElementById('tRight').innerText = `${topRight.value}% `;
}

const changeBottomLeftRadius = () => {
    preview.style.borderBottomLeftRadius = `${bottomLeft.value}%`;
    displayBottomLeft.innerHTML = `${bottomLeft.value}%`;
    document.getElementById('bLeft').innerText = `${bottomLeft.value}% `;
}

const changeBottomRightRadius = () => {
    preview.style.borderBottomRightRadius = `${bottomRight.value}%`;
    displayBottomRight.innerHTML = `${bottomRight.value}%`;
    document.getElementById('bRight').innerText = `${bottomRight.value}% `;
}

const copyCss = () => {
        const el = document.createElement('textarea');
        el.value = displayResult.innerText;
        el.setAttribute('readonly', '');
        el.style.position = 'absolute';
        el.style.left = '-9999px';
        document.body.appendChild(el);
        el.select();
        document.execCommand('copy');
        document.body.removeChild(el);
      };

topLeft.addEventListener('input', changeTopLeftRadius)
topRight.addEventListener('input', changeTopRightRadius)
bottomLeft.addEventListener('input', changeBottomLeftRadius)
bottomRight.addEventListener('input', changeBottomRightRadius)
copyButton.addEventListener('click', copyCss)

