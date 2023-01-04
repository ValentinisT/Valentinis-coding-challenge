import { endaliaLogo } from 'src/app/constants';
import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginService } from './services/login.service';
import { LoginApiService } from './services/login-api.service';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        FormsModule,
        HttpClientModule,
        LoginRoutingModule,
        NgbModule,
        ReactiveFormsModule],
      declarations: [LoginComponent],
      providers: [LoginService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it("should recover Endalia logo from constants", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const login = fixture.componentInstance
    expect(login.endaliaLogo).toEqual(endaliaLogo)
  })

  it("Form fields should start empty", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const email = fixture.componentInstance.form.controls.email.value
    const pass = fixture.componentInstance.form.controls.pass.value
    expect(email && pass).toEqual('')
  })

  it("Form should be invalid when empty", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    expect(fixture.componentInstance.form.invalid).toBeTrue()
  })

  it("Form should be invalid when enters username but not the password", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const email = fixture.componentInstance.form.controls.email.setValue("jane.doe@gmail.com")
    expect(fixture.componentInstance.form.valid).toBeFalse()
  })

  it("Form should be invalid when enters password but not the username", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const pass = fixture.componentInstance.form.controls.pass.setValue("password123")
    expect(fixture.componentInstance.form.valid).toBeFalse()
  })

  it("Form should be valid when entered username and password", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const email = fixture.componentInstance.form.controls.email.setValue("jane.doe@gmail.com")
    const pass = fixture.componentInstance.form.controls.pass.setValue("password123")
    expect(fixture.componentInstance.form.valid).toBeTrue()
  })

  // it("Function should return true if login is succesfull", () => {
  //   const fixture = TestBed.createComponent(LoginComponent)
  //   const email = fixture.componentInstance.form.controls.email.setValue("jane.doe@gmail.com")
  //   const pass = fixture.componentInstance.form.controls.pass.setValue("password123")
  //   fixture.componentInstance.onSubmit()
  // })
});
