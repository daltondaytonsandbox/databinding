import {
    Component,
    OnInit,
    Input,
    ViewEncapsulation,
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    ViewChild,
    ContentChild,
    ElementRef,
} from '@angular/core';

@Component({
    selector: 'app-server-element',
    templateUrl: './server-element.component.html',
    styleUrls: ['./server-element.component.css'],
    encapsulation: ViewEncapsulation.Emulated, // Emulated is default. This line isn't needed.
})
export class ServerElementComponent
    implements
        OnInit,
        OnChanges,
        DoCheck,
        AfterContentInit,
        AfterContentChecked,
        AfterViewInit,
        AfterViewChecked,
        OnDestroy {
    @Input() element: { type: string; name: string; content: string };
    @Input() name: string;
    @ViewChild('heading', { static: true }) header: ElementRef;
    @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

    constructor() {
        console.log('Constructor Called!');
    }

    // 'Lifecycle'
    // 'ngOnChanges' - Called after a bound input property changes
    // 'ngOnInit' - Called once the component is initialized
    // 'ngDoCheck' - Called during every change detection run
    // 'ngAfterContentInit' - Called after content (ng-content) has been projected into view
    // 'ngAfterContentChecked' - Called every time the projected content has been checked
    // 'ngAfterViewInit' - Called after the component's view and (child views) has been initialzed
    // 'ngAfterViewChecked' - Called every time the view (and child views) have been checked

    ngOnChanges(changes: SimpleChanges) {
        console.log('ngOnChanges Called!');
        console.log(changes);
        // Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
        // Add '${implements OnChanges}' to the class.
    }

    ngOnInit() {
        console.log('ngOnInit Called!');
        console.log('Text Content: ' + this.header.nativeElement.textContent);
        console.log(
            'Text Content of Paragraph: ' +
                this.paragraph.nativeElement.textContent,
        );
        // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
        // Add 'implements OnInit' to the class.
    }

    ngDoCheck() {
        console.log('ngDoCheck Called!');
        // Called every time that the input properties of a component or a directive are checked.
        // Use it to extend change detection by performing a custom check.
        // Add 'implements DoCheck' to the class.
    }

    ngAfterContentInit() {
        console.log('ngAfterContentInit Called!');
        console.log(
            'Text Content of Paragraph: ' +
                this.paragraph.nativeElement.textContent,
        );
        // Called after ngOnInit when the component's or directive's content has been initialized.
        // Add 'implements AfterContentInit' to the class.
    }

    ngAfterContentChecked() {
        console.log('ngAfterContentChecked Called!');
        // Called after every check of the component's or directive's content.
        // Add 'implements AfterContentChecked' to the class.
    }

    ngAfterViewInit() {
        console.log('ngAfterViewInit Called!');
        console.log('Text Content: ' + this.header.nativeElement.textContent);
        // Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        // Add 'implements AfterViewInit' to the class.
    }

    ngAfterViewChecked() {
        console.log('ngAfterViewChecked Called!');
        // Called after every check of the component's view. Applies to components only.
        // Add 'implements AfterViewChecked' to the class.
    }

    ngOnDestroy(): void {
        console.log('ngOnDestroy Called!');
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
    }
}
