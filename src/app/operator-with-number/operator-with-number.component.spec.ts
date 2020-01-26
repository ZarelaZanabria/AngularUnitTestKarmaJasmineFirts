import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorWithNumberComponent } from './operator-with-number.component';


describe('OperatorWithNumberComponent', () => {
  let component: OperatorWithNumberComponent;
  let fixture: ComponentFixture<OperatorWithNumberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [OperatorWithNumberComponent]
    }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OperatorWithNumberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

  })

  it('Test Sum Two Number', (async () => {
    expect(component.add(5, 6)).toEqual(11);
  }));

  it('Dinamic Test Sum of Two Numbers', (async () => {
    (<HTMLInputElement>document.getElementById('num1')).value = '3';
    (<HTMLInputElement>document.getElementById('num2')).value = '5';
    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBe('8');

  }));

  it('Result of sum Two Numbers is Higher', (async () => {
    (<HTMLInputElement>document.getElementById('num1')).value = '3';
    (<HTMLInputElement>document.getElementById('num2')).value = '5';
    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBeGreaterThan(7);

  }));

  it('Result of sum Two Numbers is Less', (async () => {
    (<HTMLInputElement>document.getElementById('num1')).value = '3';
    (<HTMLInputElement>document.getElementById('num2')).value = '5';
    document.getElementById('calc').click();
    expect((<HTMLInputElement>document.getElementById('result')).value).toBeLessThan(9);

  }));

  it('In the description concain string SumaApp', (async () => {
    const title = document.getElementById('title').innerHTML;
    expect(title).toContain('SumaApp')

  }));



});
