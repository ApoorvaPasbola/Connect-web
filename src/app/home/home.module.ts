import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './homePage/homePage.component';
import { SharedModule } from '../shared/shared.module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatComponent } from './chat/chat.component';
import { ChatInfoComponent } from './chat-info/chat-info.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ChatListComponent,
    ChatComponent,
    ChatInfoComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class HomeModule { }
