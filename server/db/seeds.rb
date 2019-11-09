20.times do

  Task.create({
    title: Faker::Book.title,
    content: Faker::Lorem.sentence
  })

end
