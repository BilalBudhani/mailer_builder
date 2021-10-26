# == Schema Information
#
# Table name: mailers
#
#  id                 :bigint           not null, primary key
#  description        :text
#  description_styles :string
#  referral_link      :boolean          default(TRUE), not null
#  social_sharing     :boolean          default(TRUE), not null
#  title              :string           not null
#  title_styles       :string
#  uid                :string           not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#
# Indexes
#
#  index_mailers_on_uid  (uid) UNIQUE
#
require "test_helper"

class MailerTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
