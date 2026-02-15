import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestExchangePlatformComponent } from './best-exchange-platform.component';

describe('BestExchangePlatformComponent', () => {
  let component: BestExchangePlatformComponent;
  let fixture: ComponentFixture<BestExchangePlatformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestExchangePlatformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestExchangePlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
