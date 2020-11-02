import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({selector: '[thretEmoji]'})
export class EmojiDirective implements OnInit {

  @Input()
  thretEmoji!: string;

  constructor(private _element: ElementRef<unknown>,
              private _renderer: Renderer2) {
  }

  ngOnInit(): void {
    twemoji.parse(this.thretEmoji, (icon, options): void => {

      const emojiElement = this._renderer.createElement('img');
      const emojiLocation = `${options.base}${options.size}/${icon}${options.ext}`;

      this._renderer.addClass(emojiElement, options.className);
      this._renderer.setAttribute(emojiElement, 'draggable', 'false');
      this._renderer.setAttribute(emojiElement, 'src', emojiLocation);
      this._renderer.appendChild(this._element.nativeElement, emojiElement);
    });
  }
}
