import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
    constructor() {}
    @Output() gameStarted = new EventEmitter<{}>();
    @Output() gameStopped = new EventEmitter<{}>();

    theInterval;

    ngOnInit() {}

    setTheInterval() {
        this.theInterval = setInterval(() => {
            this.onGameStarted();
        }, 1000);
        console.log('--setTheInterval called.');
    }

    myStopFunction() {
        clearInterval(this.theInterval);
        console.log('--myStopFunction called.');
    }

    onGameStarted() {
        this.gameStarted.emit();
        console.log('--gameStarted emit.');
    }

    onGameStopped() {
        this.myStopFunction();
        this.gameStopped.emit({});
        console.log('--gameStopped emit.');
    }
}
