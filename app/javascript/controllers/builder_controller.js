import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['title', 'description', 'socialSharing', 'referralLink']

  connect() {
    this.refresh = this.refresh.bind(this)
    this.refresh()
  }

  refresh() {
    const previewTitle = document.querySelector('#preview_title')
    previewTitle.innerHTML = this.titleTarget.value

    const previewDescript = document.querySelector('#preview_description')
    previewDescript.innerHTML = this.descriptionTarget.value

    const previewSocial = document.querySelector('#preview_social_sharing')
    if (this.socialSharingTarget.checked) {
      previewSocial.classList.remove('hidden')
    } else {
      previewSocial.classList.add('hidden')
    }

    const previewReferral = document.querySelector('#preview_referral_link')
    if (this.referralLinkTarget.checked) {
      previewReferral.classList.remove('hidden')
    } else {
      previewReferral.classList.add('hidden')
    }
  }
}
