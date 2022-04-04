<template>
    <div class="container">
        <h1>Simon The Game</h1>
        <div class="panel game-panel" :class="{ 'disabled': activeShowRhythm }">
            <div class="square green-square" id="1" @click="checkUser($event.target.id)"></div>
            <div class="square red-square" id="2" @click="checkUser($event.target.id)"></div>
            <div class="square orange-square" id="3" @click="checkUser($event.target.id)"></div>
            <div class="square blue-square" id="4" @click="checkUser($event.target.id)"></div>
        </div>
        <div class="panel control-panel">
            <div>
                <h2 v-if="!userLooser">Текущий раунд: {{ roundNumber }}</h2>
                <h2 v-if="userLooser">Вы проиграли!<br />Серия побед: {{ victory }}</h2>
            </div>
            <div>
                <h3>Уровень сложности:</h3>
                <select :disabled="activeGame" v-model="difficult">
                    <option value="1500">Легкий</option>
                    <option value="1000">Средний</option>
                    <option value="400">Сложный</option>
                </select>
            </div>
            <br />
            <br />
            <div>
                <button :disabled="activeGame" @click="startRound()">Начать!</button>
            </div>
        </div>
    </div>
</template>

<script>

    const soundGreen = require("../audio/sounds_1.mp3");
    const soundRed = require("../audio/sounds_2.mp3");
    const soundOrange = require("../audio/sounds_3.mp3");
    const soundBlue = require("../audio/sounds_4.mp3");

    export default {
        name: 'simonTheGame',
        data () {
            return {
                rhythm: [],
                cheсkUserArray: [],
                difficult: 1500,
                roundNumber: 0,
                victory: 0,
                soundGreen,
                soundRed,
                soundOrange,
                soundBlue,
                activeGame: false,
                activeShowRhythm: false,
                userLooser: false
            }
        },
        methods: {
            playAudio (e) {
                let sound = e === "1" ? this.soundGreen : e === "2" ? this.soundRed : e === "3" ? this.soundOrange : this.soundBlue;
                let audio = new Audio(sound);
                audio.play();
            },
            setRhythm () {
                this.rhythm.push((Math.floor(Math.random() * 4) + 1)+"");
                this.cheсkUserArray = this.rhythm.slice();
            },
            showRhythm () {
                let timeout = Number(this.difficult);
                let canPush = 0;
                this.rhythm.forEach((element, currentIndex) => {   
                    setTimeout(() => {
                        this.playAudio(element);
                        let elem = document.getElementById(element);
                        elem.style.opacity = 1;
                        setTimeout(() => {
                            elem.style.opacity = 0.6;
                            canPush++;
                            if ( canPush === this.rhythm.length ) {
                                this.activeShowRhythm = false;
                            }
                        }, timeout/2);
                    }, timeout*currentIndex);    
                });    
            },
            startRound () {
                if ( this.roundNumber === 0 ) {
                    this.victory = 0;
                }
                this.userLooser = false;
                this.activeGame = true;
                this.roundNumber = this.victory + 1;
                this.activeShowRhythm = true;
                this.setRhythm();
                setTimeout(() => {
                    this.showRhythm();
                }, 2000);
            },
            checkUser (e) {
                this.playAudio(e);

                var cheсkArray = this.cheсkUserArray;
                if ( this.activeGame ) {
                    if ( e !== cheсkArray[0] ) {
                        this.userLooser = true;
                        this.reset();
                    } else {
                        cheсkArray.shift();
                        if ( cheсkArray.length === 0 ) {
                            this.victory++;
                            this.startRound();   
                        }
                    }
                }                
            },
            reset () {
                this.rhythm = [];
                this.roundNumber = 0;
                this.activeGame = false;
            }
        }
    }
</script>