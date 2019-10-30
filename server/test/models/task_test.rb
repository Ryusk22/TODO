# == Schema Information
#
# Table name: tasks
#
#  id           :integer          not null, primary key
#  is_completed :boolean
#  user_id      :integer
#  title        :string(255)      default(""), not null
#  content      :string(255)      default(""), not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
