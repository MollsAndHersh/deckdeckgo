import {Component, Prop, h, Host, EventEmitter, Event} from '@stencil/core';

import {BreadcrumbsStep} from '../../../../utils/editor/breadcrumbs-type';

@Component({
  tag: 'app-breadcrumbs',
  styleUrl: 'app-breadcrumbs.scss',
  shadow: false
})
export class AppBreadcrumbs {
  @Prop()
  step: BreadcrumbsStep = BreadcrumbsStep.DECK;

  @Event()
  private stepTo: EventEmitter<HTMLElement | undefined>;

  private async selectStep(step: BreadcrumbsStep) {
    if (!document) {
      return;
    }

    if (step === BreadcrumbsStep.DECK) {
      this.stepTo.emit(undefined);
    } else {
      const deck = document.querySelector('main > deckgo-deck');

      if (!deck) {
        return;
      }

      const index = await (deck as any).getActiveIndex();

      const slideElement: HTMLElement = deck.querySelector('.deckgo-slide-container:nth-child(' + (index + 1) + ')');

      if (!slideElement) {
        return;
      }

      if (step === BreadcrumbsStep.SLIDE) {
        this.stepTo.emit(slideElement);
      } else {
        const elementEditable: HTMLElement = slideElement.querySelector('[contenteditable], [editable]');

        this.stepTo.emit(elementEditable);
      }
    }
  }

  render() {
    return (
      <Host>
        {this.renderStep(BreadcrumbsStep.DECK)}
        {this.renderSeparator()}
        {this.renderStep(BreadcrumbsStep.SLIDE)}
        {this.renderSeparator()}
        {this.renderStep(BreadcrumbsStep.ELEMENT)}
      </Host>
    );
  }

  private renderStep(step: BreadcrumbsStep) {
    return (
      <button class={this.step === step ? 'selected' : undefined} onClick={() => this.selectStep(step)}>
        <ion-label>{step}</ion-label>
      </button>
    );
  }

  private renderSeparator() {
    return <ion-label class="separator">&#62;</ion-label>;
  }
}
