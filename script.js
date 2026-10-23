'use strict';

const startBtn = document.querySelector('.card-button');
const votingStatus = document.querySelector('.voting-status');
const totalVotes = document.querySelector('.total-of-votes');

const resultProgress = document.querySelectorAll('.result-progress');
const votosInfo = document.querySelectorAll('.votos-info');
const percentageVotes = document.querySelectorAll('.percentage-votes');
const valueNameCandidato = document.querySelector('.value-name-candidato');
const submitBtnCandidato = document.querySelector('.submit-button');
const nameCandidato = document.querySelectorAll('.name-candidate');

let candidato01 = 0;
let candidato02 = 0;
let candidato03 = 0;

startBtn.addEventListener('click', function () {

    votingStatus.textContent = 'Apuração em andamento';
    votingStatus.style.setProperty('color', '#4ade80', 'important');

    setInterval(() => {
        // geração de votos
        const votesNumber = Math.floor(Math.random() * 1000) + 1;
        console.log(votesNumber);

        // sorteando candidato
        const voteNumberCandidato = Math.floor(Math.random() * 3);

        if (voteNumberCandidato === 0) {
            candidato01 += votesNumber;
        } else if (voteNumberCandidato === 1) {
            candidato02 += votesNumber;
        } else {
            candidato03 += votesNumber;
        }

        const somaDeVotos = candidato01 + candidato02 + candidato03;
        let percentCandidate01 = candidato01 / somaDeVotos * 100;
        let percentCandidate02 = candidato02 / somaDeVotos * 100;
        let percentCandidate03 = candidato03 / somaDeVotos * 100;

        resultProgress[0].style.width = percentCandidate01 + "%";
        resultProgress[1].style.width = percentCandidate02 + "%";
        resultProgress[2].style.width = percentCandidate03 + "%";

        votosInfo[0].textContent = candidato01 + " votos";
        votosInfo[1].textContent = candidato02 + " votos";
        votosInfo[2].textContent = candidato03 + " votos";
        
        percentageVotes[0].textContent = percentCandidate01.toFixed(2) + "%";
        percentageVotes[1].textContent = percentCandidate02.toFixed(2) + "%";
        percentageVotes[2].textContent = percentCandidate03.toFixed(2) + "%";

        totalVotes.textContent = somaDeVotos;
    }, 3000);


});

console.log(valueNameCandidato.value);

submitBtnCandidato.addEventListener('click', (event) => {

    event.preventDefault();

    nameCandidato.forEach((candidato) => {
        candidato.textContent = valueNameCandidato.value;
    });
    
    valueNameCandidato.value = '';
});