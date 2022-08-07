import { Component, Input, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit, OnDestroy {
  constructor() {
    console.log("CONSTRUCTOR");
  }
  @Input('postImage') parentImage: string = '';
  @Output() imgSelected = new EventEmitter<boolean>(false)

  selectImage() {
    this.imgSelected.emit(true)
  }
  ngOnInit(): void {
    console.log("ON init");

  }

  ngOnDestroy(): void {
    console.log("DESTROYED");

  }
}
