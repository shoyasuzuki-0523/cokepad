class CreateGoods < ActiveRecord::Migration[5.2]
  def change
    create_table :goods do |t|
      t.string :user_id
      t.string :post_id

      t.timestamps
    end
  end
end
