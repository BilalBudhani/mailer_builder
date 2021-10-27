// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import { Tabs, Toggle } from "tailwindcss-stimulus-components"
import { definitionsFromContext } from "@hotwired/stimulus-webpack-helpers"
import { Application } from "@hotwired/stimulus"
const application = Application.start()

// Configure Stimulus development experience
application.warnings = true
application.debug    = false
window.Stimulus      = application

const context = require.context("./controllers", true, /\.js$/)
Stimulus.load(definitionsFromContext(context))


application.register('toggle', Toggle)
application.register('tabs', Tabs)

