import { Controller } from "@hotwired/stimulus"
import { template, unescape } from "lodash"

export default class extends Controller {
  static targets = ['title', 'description', 'socialSharing', 'referralLink', 'titleColor', 'descriptionColor']

  connect() {
    this.refresh = this.refresh.bind(this)
    this.generateTemplate = this.generateTemplate.bind(this)
    this.refresh()
  }

  refresh() {
    // Title
    const previewTitle = document.querySelector('#preview_title')
    previewTitle.innerHTML = this.titleTarget.value
    previewTitle.style.cssText = 'color: ' + this.titleColorTarget.value;

    // Description
    const previewDescript = document.querySelector('#preview_description')
    previewDescript.innerHTML = this.descriptionTarget.value
    previewDescript.style.cssText = 'color: ' + this.descriptionColorTarget.value;

    // Social Sharing
    const previewSocial = document.querySelector('#preview_social_sharing')
    if (this.socialSharingTarget.checked) {
      previewSocial.classList.remove('hidden')
    } else {
      previewSocial.classList.add('hidden')
    }

    // Referral Link
    const previewReferral = document.querySelector('#preview_referral_link')
    if (this.referralLinkTarget.checked) {
      previewReferral.classList.remove('hidden')
    } else {
      previewReferral.classList.add('hidden')
    }

    this.generateTemplate()
  }

  generateTemplate() {
    const outputTpl = document.querySelector('#output_template')
    const compiled = template(unescape(outputTpl.innerHTML))
    const outputEl = document.querySelector('#mailer_output')
    outputEl.innerHTML = compiled({
      title: this.titleTarget.value,
      titleColor: this.titleColorTarget.value,
      description: this.descriptionTarget.value,
      descriptionColor: this.descriptionColorTarget.value,
      socialSharing: this.socialSharingTarget.checked,
      referralLink: this.referralLinkTarget.checked
    })
  }
}
