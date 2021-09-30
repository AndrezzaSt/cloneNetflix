import { style } from "@angular/animations";
import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";


@Component({
    selector: 'app-nav-bar',
    templateUrl: './nav-bar.components.html',
    styleUrls: ['./nav-bar.components.scss']
})
export class navBarComponents implements OnInit{

   @Output() menuToggle: EventEmitter<boolean> = new EventEmitter();

    @Input() opened = false;

    constructor() {

    }

    ngOnInit(): void {
       
    }

    toogle() {
        this.opened = !this.opened;
        this.menuToggle.emit(this.opened);
    }
}