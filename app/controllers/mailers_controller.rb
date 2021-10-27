class MailersController < ApplicationController

  def new
    @mailer = Mailer.new
    @mailer.title = "Share with friends, get cool stuff!"
    @mailer.description = "Have friends who'd love our newsletter too? Give them your unique referral link (below) and get an awesome reward when they subscribe."
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
    params.require(:mailer).permit(:title, :description, :social_sharing, :referral_link, :title_color, :description_color)
  end
end