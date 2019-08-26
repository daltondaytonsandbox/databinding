import {
    Component,
    OnInit,
    EventEmitter,
    Output,
    ViewChild,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'app-cockpit',
    templateUrl: './cockpit.component.html',
    styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent implements OnInit {
    @Output() serverCreated = new EventEmitter<{
        serverName: string;
        serverContent: string;
    }>();
    @Output() blueprintCreated = new EventEmitter<{
        serverName: string;
        serverContent: string;
    }>();

    // newServerName = '';
    // newServerContent = '';

    // @ViewChild can be used instead of passing a local reference through a function
    @ViewChild('serverContentInput', { static: true })
    serverContentInput: ElementRef;
    // '{ static: true }' must be used in Angular 8 since it will also be used in 'ngOnInit'.
    // This won't be necessary in Angular 9

    constructor() {}

    ngOnInit() {}

    onAddServer(nameInput: HTMLInputElement) {
        this.serverCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }

    onAddBlueprint(nameInput: HTMLInputElement) {
        this.blueprintCreated.emit({
            serverName: nameInput.value,
            serverContent: this.serverContentInput.nativeElement.value,
        });
    }
}
