let divJs = document.querySelector('.js'),
    divHead = document.querySelector('.head'),
    leftArm = document.querySelector('.left_arm'),
    rightArm = document.querySelector('.right_arm'),
    leftLeg = document.querySelector('.left_leg'),
    rightLeg = document.querySelector('.right_leg'),
    torso = document.querySelector('.torso'),
    colors = document.querySelector('.colors');

const jsEffect = () => {
    divJs.setAttribute('class', 'js-js');
    divJs.firstElementChild.setAttribute('class', 'js-img-js');
    leftArm.setAttribute('class', 'left_arm-js');
    rightArm.setAttribute('class', 'right_arm-js');
    leftLeg.setAttribute('class', 'left_leg-js');
    rightLeg.setAttribute('class', 'right_leg-js');
    torso.setAttribute('class', 'torso-js');
    document.documentElement.style.setProperty('--color', '#f7e018');
}
const jsEffectOff = () => {
    divJs.setAttribute('class', 'js');
    divJs.firstElementChild.setAttribute('class', 'js-img');
    leftArm.setAttribute('class', 'left_arm');
    rightArm.setAttribute('class', 'right_arm');
    leftLeg.setAttribute('class', 'left_leg');
    rightLeg.setAttribute('class', 'right_leg');
    torso.setAttribute('class', 'torso');
    document.documentElement.style.setProperty('--color', '#5f93e8');
}

const colorsJs = (e) => {
    let color = e.target.id;
    document.documentElement.style.setProperty('--color', color);
}

(() => {
    divHead.addEventListener('mouseover', jsEffect);
    divHead.addEventListener('mouseout',jsEffectOff);
    colors.addEventListener('click', colorsJs);
})();
