'use strict'

const leftEye = document.getElementById('left-eye');
const rightEye = document.getElementById('right-eye');
const leftPupil = document.getElementById('left-pupil');
const rightPupil = document.getElementById('right-pupil');

document.addEventListener('mousemove', (event) => {
    moveEye(event, leftEye, leftPupil);
    moveEye(event, rightEye, rightPupil);
});

function moveEye(event, eye, pupil) {
    const eyeRect = eye.getBoundingClientRect();
    const eyeX = eyeRect.left + eyeRect.width / 2;
    const eyeY = eyeRect.top + eyeRect.height / 2;
    const angle = Math.atan2(event.clientY - eyeY, event.clientX - eyeX);
    const distance = Math.min(eyeRect.width / 4, eyeRect.height / 4);
    const pupilX = distance * Math.cos(angle);
    const pupilY = distance * Math.sin(angle);

    pupil.style.transform = `translate(${pupilX}px, ${pupilY}px)`;
}
