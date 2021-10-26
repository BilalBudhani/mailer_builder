class MailersController < ApplicationController

  def new
    @mailer = Mailer.new
    @mailer.title = "This is where you title should be"
    @mailer.description = "Here you can describe whatever you want to send to your mailer, be creative and don't overthing :)"
  end
end