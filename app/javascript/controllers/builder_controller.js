import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['title', 'description']

  connect() {
    this.refresh = this.refresh.bind(this)
    this.refresh()
  }

  refresh() {
    const previewTitle = document.querySelector('#preview_title')
    previewTitle.innerHTML = this.titleTarget.value

    const previewDescript = document.querySelector('#preview_description')
    previewDescript.innerHTML = this.descriptionTarget.value
  }
}
