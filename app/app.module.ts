import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { TokenModule } from "./token/token.module";
import { GerenciaProdutosModule } from "./gerencia-produtos/gerencia-produtos.module";

@NgModule({
  imports:      [ BrowserModule, TokenModule, GerenciaProdutosModule ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
