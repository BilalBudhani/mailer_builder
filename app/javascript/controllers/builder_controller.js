import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['header', 'subHeader', 'banner']

  connect() {
    console.log('builder is connected')
  }
}
