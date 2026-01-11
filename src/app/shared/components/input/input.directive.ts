import { Directive, computed, input } from '@angular/core';
import { inputVariants } from './input.variants';
import { mergeClasses } from '@/shared/utils/merge-classes';

@Directive({
  selector: 'input[z-input], textarea[z-input]',
  standalone: true,
  host: {
    '[class]': 'classes()',
  },
})
export class ZardInputDirective {
  readonly class = input<string>('');

  protected readonly classes = computed(() => mergeClasses(inputVariants(), this.class()));
}
