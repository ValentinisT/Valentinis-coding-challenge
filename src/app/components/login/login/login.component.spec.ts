import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { endaliaLogo } from 'src/app/constants';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { LoginService } from 'src/app/services/login.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared-module/shared.module';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        CommonModule,
        SharedModule,
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

  it("Form should be invalid when enters a password but not the username", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const pass = fixture.componentInstance.form.controls.pass.setValue("password123")
    expect(fixture.componentInstance.form.valid).toBeFalse()
  })

  it("Form should be invalid when enters a password but username is not a valid email", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    fixture.componentInstance.form.controls.pass.setValue("password123")
    fixture.componentInstance.form.controls.email.setValue("jane")
    expect(fixture.componentInstance.form.valid).toBeFalse()
    fixture.componentInstance.form.controls.email.setValue("jane.doe")
    expect(fixture.componentInstance.form.valid).toBeFalse()
    fixture.componentInstance.form.controls.email.setValue("jane.doe@")
    expect(fixture.componentInstance.form.valid).toBeFalse()
    fixture.componentInstance.form.controls.email.setValue("jane.doe@a")
    expect(fixture.componentInstance.form.valid).toBeFalse()
    fixture.componentInstance.form.controls.email.setValue("jane.doe@f.c")
    expect(fixture.componentInstance.form.valid).toBeFalse()
  })

  it("Form should be valid when enters the correct username format and password", () => {
    const fixture = TestBed.createComponent(LoginComponent)
    const email = fixture.componentInstance.form.controls.email.setValue("jane.doe@gmail.com")
    const pass = fixture.componentInstance.form.controls.pass.setValue("password123")
    expect(fixture.componentInstance.form.valid).toBeTrue()
  })
});
