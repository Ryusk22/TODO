class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.boolean :is_completed, null: false, default: false
      t.integer :user_id
      t.string :title, null: false, default: ""
      t.string :content, default: ""
      t.timestamps
    end
  end
end
