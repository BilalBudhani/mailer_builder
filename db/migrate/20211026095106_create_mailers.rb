class CreateMailers < ActiveRecord::Migration[7.0]
  def change
    create_table :mailers do |t|
      t.string :title, null: false
      t.string :title_color, default: "#333"
      t.text :description
      t.string :description_color, default: "#333"
      t.boolean :referral_link, null: false, default: true
      t.boolean :social_sharing, null: false, default: true
      t.string :uid, null: false

      t.timestamps
    end

    add_index :mailers, :uid, unique: true
  end
end
