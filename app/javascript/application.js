// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import {  Tabs, Toggle } from "tailwindcss-stimulus-components"
import "@hotwired/turbo-rails"
import "controllers"
application.register('toggle', Toggle)
application.register('tabs', Tabs)

