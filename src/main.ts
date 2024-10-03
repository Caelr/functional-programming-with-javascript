import { compose } from './utils/compose'

const el = (tag: keyof HTMLElementTagNameMap) => document.createElement(tag)

const addClass = (className: string) => {
  return function (el: HTMLElement) {
    el.classList.add(className)
    return el
  }
}

const div = compose(
  addClass('bg-light'),
  addClass('p-2'),
)(el('div'))

document.body.appendChild(div)

