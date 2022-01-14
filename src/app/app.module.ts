import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { SigningUpComponent } from './components/signing-up/signing-up.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { DashBoardComponent } from './components/dash-board/dash-board.component';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { AddNoteComponent } from './components/add-note/add-note.component';
import { IconComponent } from './components/icon/icon.component';
import { CollaboratorComponent } from './components/collaborator/collaborator.component';

@NgModule({
  declarations: [
    AppComponent,
    SigningUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PasswordRecoveryComponent,
    DashBoardComponent,
    AddNoteComponent,
    IconComponent,
    CollaboratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    MatListModule,
    MatSidenavModule,
    MatCardModule,
    MatToolbarModule
  ],
  exports:[
    SigningUpComponent,
    LoginComponent,
    ForgotPasswordComponent,
    PasswordRecoveryComponent,
    DashBoardComponent,
    AddNoteComponent,
    IconComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
