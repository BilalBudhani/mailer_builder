import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['title']

  connect() {
    console.log('builder is connected')
    this.refresh = this.refresh.bind(this)
  }

  refresh() {
    console.log(this.titleTarget.value)

    const mailerTitle = document.querySelector('#mailer_title')
    mailerTitle.innerHTML = this.titleTarget.value
  }
}
