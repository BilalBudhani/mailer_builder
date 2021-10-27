import { Controller } from "@hotwired/stimulus"
import { template, unescape } from "lodash"
import { DirectUpload } from "@rails/activestorage"

export default class extends Controller {
  static targets = ['title', 'description', 'socialSharing', 'referralLink', 'titleColor', 'descriptionColor', 'banner']

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

    // Banner
    if (this.bannerTarget.files.length > 0) {
      const bannerUrl = URL.createObjectURL(this.bannerTarget.files[0])
      const previewBanner = document.querySelector('#preview_banner')
      previewBanner.src = bannerUrl
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

  upload() {
    const upload = new DirectUpload(this.bannerTarget.files[0], this.bannerTarget.dataset.directUploadUrl)
    upload.create((error, blob) => {
      if (error) {
        console.error(error)
      } else {
        const hiddenField = document.createElement('input')
        hiddenField.setAttribute("id", "banner_url")
        hiddenField.setAttribute("type", "hidden");
        hiddenField.setAttribute("value", blob.signed_id);
        hiddenField.name = this.bannerTarget.name
        document.querySelector('form').appendChild(hiddenField)
        this.refresh()
      }
    })
  }
}
