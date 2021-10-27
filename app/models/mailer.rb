# == Schema Information
#
# Table name: mailers
#
#  id                :bigint           not null, primary key
#  description       :text
#  description_color :string           default("#333")
#  referral_link     :boolean          default(TRUE), not null
#  social_sharing    :boolean          default(TRUE), not null
#  title             :string           not null
#  title_color       :string           default("#333")
#  uid               :string           not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
# Indexes
#
#  index_mailers_on_uid  (uid) UNIQUE
#
class Mailer < ApplicationRecord
  validates_presence_of :title
  has_one_attached :banner

  before_create :generate_uid

  private
  def generate_uid
    self.uid = SecureRandom.hex(6)
  end
end
