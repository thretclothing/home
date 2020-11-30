import { EmojiDirective } from './emoji.directive';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component, DebugElement, Renderer2, ViewChild } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  selector: 'thret-test-host',
  template: `<span thretEmoji="❤️" #directiveEl></span>`
})
class TestHostComponent {
  @ViewChild('directiveEl') directiveEl!: HTMLSpanElement;
}

describe('EmojiDirective', () => {

  let testHostComponentFixture: ComponentFixture<TestHostComponent>;
  let testHostComponentDebugEl: DebugElement;
  let testHostComponent: TestHostComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestHostComponent, EmojiDirective],
      providers: [Renderer2]
    }).compileComponents();
  });

  beforeEach(() => {
    testHostComponentFixture = TestBed.createComponent(TestHostComponent);
    testHostComponentDebugEl = testHostComponentFixture.debugElement;
    testHostComponent = testHostComponentFixture.componentInstance;
    testHostComponentFixture.detectChanges();
  });

  describe('when the element that this directive is applied to loads', () =>
    it('should generate an image element pointing to the appropriate emoji', () =>
      expect(testHostComponentDebugEl.query(By.css('.emoji'))).not.toBeNull()));

});
