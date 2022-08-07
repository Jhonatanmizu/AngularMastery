import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fundamentals';
  private password: string = 'sfadjlfsadlkjfsda'
  imageUrl: string = 'https://images.unsplash.com/photo-1659798513725-0fff11178130?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
  getPassword(): string {
    return this.password
  }
  changeImage(data: KeyboardEvent) {
    console.log(data);

    this.imageUrl = (data.target as HTMLInputElement).value
  }

  listenSelectImage(event: boolean) {
    if (event) {
      console.log(event);

    }
  }
}
