import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['title', 'description', 'socialSharing', 'referralLink', 'titleColor', 'descriptionColor']

  connect() {
    this.refresh = this.refresh.bind(this)
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

  }
}
