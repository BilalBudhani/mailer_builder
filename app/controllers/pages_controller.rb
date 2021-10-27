class PagesController < ApplicationController
  def main
    redirect_to new_mailer_path
  end
end