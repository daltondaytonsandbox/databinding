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

    // 'Lifecycle'
    // 'ngOnChanges' - Called after a bound input property changes
    // 'ngOnInit' - Called once the component is initialized
    // 'ngDoCheck' - Called during every change detection run
    // 'ngAfterContentInit' - Called after content (ng-content) has been projected into view
    // 'ngAfterContentChecked' - Called every time the projected content has been checked
    // 'ngAfterViewInit' - Called after the component's view and (child views) has been initialzed
    // 'ngAfterViewChecked' - Called every time the view (and child views) have been checked

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
