class MailersController < ApplicationController

  def new
    @mailer = Mailer.new
    @mailer.title = "This is where you title should be"
    @mailer.description = "Here you can describe whatever you want to send to your mailer, be creative and don't overthing :)"
  end

  def show
    @mailer = Mailer.find(params[:id])
  end

  def create
    @mailer = Mailer.new(mailer_params)
    if @mailer.save
      redirect_to @mailer
    else
      render 'new', status: :unprocessable_entity
    end
  end

  def update
    @mailer = Mailer.find(params[:id])
    if @mailer.update(mailer_params)
      redirect_to @mailer
    else
      render 'show', status: :unprocessable_entity
    end
  end

  private
  def mailer_params
    params.require(:mailer).permit(:title, :description, :social_sharing, :referral_link)
  end
end