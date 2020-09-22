let divJs = document.querySelector('.js'); 
let divHead = document.querySelector('.head');
let leftArm = document.querySelector('.left_arm');
let rightArm = document.querySelector('.right_arm');
let leftLeg = document.querySelector('.left_leg');
let rightLeg = document.querySelector('.right_leg');
let torso = document.querySelector('.torso');
let colors = document.querySelector('.colors');

const jsEffect = () => {
    // console.log('jsEffect Function');
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
    console.log(color);
    document.documentElement.style.setProperty('--color', color);

}

const eventLoad = () => {
    divHead.addEventListener('mouseover', jsEffect);
    divHead.addEventListener('mouseout',jsEffectOff);
    colors.addEventListener('click', colorsJs);


}

eventLoad();
