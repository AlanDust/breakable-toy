# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
flute = Instrument.create({ name: "Flute", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZobirtApnM7_uzxgQj-YL8JJTBuKxclsryrN8UcuE90yLTQucOQ"})
percussion = Instrument.create({ name: "Percussion", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjbtB09bLnL-88q50uWWZ4PLU-8p2RoCfu0S9C1jwNJ3V1Te6w"})
trombone = Instrument.create({ name: "Trombone", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8lksz2LjicsCPasHDgPGzG6JI98AHQhiBHyBofu9u5L0wgYXCyg"})
voice = Instrument.create({ name: "Voice", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm2T4Kcq1MIZzYLcbF0o7IuJGIt_BbwtvukF2MzkcYAu6H7hGm"})
oboe = Instrument.create({name: "Oboe", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeOIHr8Ya7bU_5swd9_1-clmJK4AIcAXnxRwW4z-e9DunloKo8NA"})
saxophone = Instrument.create({ name: "Saxophone", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyHHF9fxFUB12p41E4qtBw1GTDq2xQVvl9vSsoOx-CqQZNyDZwCg"})
bassoon = Instrument.create({ name: "Bassoon", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXntiaYfk3Di7qtKinQbgIsfyvgDQp99AiZQEpyhq0i9yUfRv0eg"})
clarinet = Instrument.create({ name: "Clarinet", picture: "https://www.musicnexo.com/blog/wp-content/uploads/2017/03/clarinet-86157_1920-1200x800.jpg"})
trumpet = Instrument.create({ name: "Trumpet", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvfL6z-nM_260-X-amQynaC02ugIMyZR1w1EBesnilFUFBewmeeA"})
french_horn = Instrument.create({ name: "French Horn", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcjcI-0dOCqn6sRqXPIG5VU4i1PL6GspFxZdzRfl2UKjafjK5Xg"})
baritone_tuba = Instrument.create({ name: "Baritone / Tuba", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-QBr6OR07ODFSsymc4FYAD8reQMCpAdRCi5BgIEoTBlFiBZWtTA"})
guitar = Instrument.create({ name: "Guitar", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRULxe69CK-B--4fwZ9BsETfuxsO09XeeY9tJiKDEY681Q1K3Up2w"})
voilin_viola = Instrument.create({ name: "Violin / Viola", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9duMrYJ6JxKn_nwhqYfK4DZjDWh8vWvWyE9jb1eM1uFaYzjFN"})
cello = Instrument.create({ name: "Cello", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNogKTJxksq1_V4yt76U29xK5jPb5QQ08iHZZ8J-krt1sQJ9E"})
bass = Instrument.create({ name: "Bass", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuNYI84IEB478PEIUdM5qYbmZlP1zFCUz177cg3itvV2a7KrDPWg"})
piano = Instrument.create({ name: "Piano", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStlq2TFADjqvoB0k0ttm40FoeEp3am-r4z92DC7DEsesqJ-H9M"})

alan = User.create({ email: "alan.dust@gmail.com", encrypted_password: "123456", first_name: "Alan", last_name: "Dust", age: 34, role: "teacher", zip: "01852", bio: "I have taught band at all levels for 12 years.  I am primarily a percussionist, but can teach all instruments.", lesson_location: "Lowell, MA", password: "123456"})
patricia = User.create({ email: "patricia.deandres@gmail.com", encrypted_password: "123456", first_name: "Patricia", last_name: "DeAndres", age: 33, role: "teacher", zip: "01852", bio: "I am a professional flutist.  I currently perform with the Metropolitan Wind Symphony and have performed with Symphony Orchestras across Europe.", lesson_location: "Lowell, MA", password: "123456"})
mark = User.create({ email: "mark.taddonio@gmail.com", encrypted_password: "123456", first_name: "Mark", last_name: "Taddonio", age: 25, role: "teacher", zip: "03087", bio: "I am the current band director at Windham High School.  I am primarily a trombonist, but can teach all wind and brass instruments as well as voice.  I have been teaching professionally for five years and am excited to have you as a student!", lesson_location: "Windham, NH", password: "123456"})
sheila = User.create({ email: "sheila.cuneo@gmail.com", encrypted_password: "123456", first_name: "Sheila", last_name: "Cuneo", age: 50, role: "teacher", zip: "03087", bio: "I am the current choir director at Windham High School.  I am primarily a vocalist and teach all voices.", lesson_location: "Windham, NH", password: "123456"})
bob = User.create({email: "bob.dawson@gmail.com", encrypted_password: "123456", first_name: "Bob", last_name: "Dawson", age: 55, role: "teacher", zip: "03038", bio: "I am a principal of a local high school.  On the side, I sing opera and play string instruments.  I have been teaching for 28 years and would love to have you as a student!  Accepting students of all levels.", lesson_location: "Derry, NH", password: "123456"})
lynn = User.create({email: "lynn.dust@gmail.com", encrypted_password: "123456", first_name: "Lynn", last_name: "Dust", age: 59, role: "teacher", zip: "13492", bio: "I teach vocalists of all ages.  I also teach piano and guitar.", lesson_location: "Whitesboro, NY", password: "123456"})
joe = User.create({email: "joe.hastreiter@gmail.com", encrypted_password: "123456", first_name: "Joe", last_name: "Hastreiter", age: 39, role: "teacher", zip: "53590", bio: "I teach guitar.  Guitar is my passion.  I will teach students the basics all the way up to advanced levels.  Let's have some fun learning how to play guitar!", lesson_location: "Sun Prairie, WI", password: "123456"})
billy = User.create({email: "billy.chou@gmail.com", encrypted_password: "123456", first_name: "Billy", last_name: "Chou", age: 34, role: "teacher", zip: "22032", bio: "I have been playing piano since I was 3 years old.  I accept piano students of all levels.  Come and see how much fun learning piano can be by taking private lessons! I also teach mallet percussion!", lesson_location: "Fairfax, VA", password: "123456"})
steve = User.create({email: "steve.peterson@gmail.com", encrypted_password: "123456", first_name: "Stephen", last_name: "Peterson", age: 58, role: "teacher", zip: "61821", bio: "I am the director of bands at the University of Illinois.  I teach any and all instruments privately.  Please let me know if you want to learn your instrument seriously at a high level!  I am accepting advanced students of all wind and brass instruments.", lesson_location: "Urbana, IL", password: "123456"})
chris = User.create({email: "chris.neske@gmail.com", encrypted_password: "123456", first_name: "Christopher", last_name: "Neske", age: 34, role: "teacher", zip: "11730", bio: "I am a high school band director in East Islip, NY.  I am currently accepting students of all levels and all instruments, winds and brass.  Please message me if you want to level up on your instrument!", lesson_location: "East Islip, NY", password: "123456"})
gordon = User.create({email: "Gordon.Stout@gmail.com", encrypted_password: "123456", first_name: "Gordon", last_name: "Stout", age: 66, role: "teacher", zip: "14850", bio: "I have been teaching percussion for almost 40 years.  I am still thrilled to accept new students and would love to have you join my private lesson studio.  Please contact me for more information!  I look forward to working with you!", lesson_location: "Ithaca, NY", password: "123456"})
fonder = User.create({email: "Mark.Fonder@gmail.com", encrypted_password: "123456", first_name: "Mark", last_name: "Fonder", age: 65, role: "teacher", zip: "54911", bio: "I have been teaching band for over 35 years.  I am proficient in all wind and brass instruments, with trombone being my forte.  I am happy to accept students at all levels and all instruments.  Please contact me for more information!", lesson_location: "Appleton, WI", password: "123456"})
emily = User.create({email: "Emily.Sue@gmail.com", encrypted_password: "123456", first_name: "Emily", last_name: "Sue", age: 26, role: "teacher", zip: "53590", bio: "I teach private voice lessons!  Come and sing with me and see how much fun voice lessons can be!", lesson_location: "Sun Prairie, WI", password: "123456"})

Interest.create([
  { user_id: 1, instrument_id: 1}, { user_id: 1, instrument_id: 2}, { user_id: 1, instrument_id: 3}, { user_id: 1, instrument_id: 4}, { user_id: 1, instrument_id: 5}, { user_id: 1, instrument_id: 6},
  { user_id: 1, instrument_id: 7}, { user_id: 1, instrument_id: 8}, { user_id: 1, instrument_id: 9}, { user_id: 1, instrument_id: 10}, { user_id: 1, instrument_id: 11}, { user_id: 1, instrument_id: 12},
  { user_id: 1, instrument_id: 13}, { user_id: 1, instrument_id: 14}, { user_id: 1, instrument_id: 15}, { user_id: 1, instrument_id: 16},
  { user_id: 2, instrument_id: 1},
  { user_id: 3, instrument_id: 1}, { user_id: 3, instrument_id: 2}, { user_id: 3, instrument_id: 3}, { user_id: 3, instrument_id: 4}, { user_id: 3, instrument_id: 5}, { user_id: 3, instrument_id: 6},
  { user_id: 3, instrument_id: 7}, { user_id: 3, instrument_id: 8}, { user_id: 3, instrument_id: 9}, { user_id: 3, instrument_id: 10}, { user_id: 3, instrument_id: 11}, { user_id: 3, instrument_id: 12},
  { user_id: 4, instrument_id: 4},
  { user_id: 5, instrument_id: 13}, { user_id: 5, instrument_id: 14}, { user_id: 5, instrument_id: 15},
  { user_id: 6, instrument_id: 4},
  { user_id: 7, instrument_id: 12},
  { user_id: 8, instrument_id: 2}, { user_id: 8, instrument_id: 16},
  { user_id: 9, instrument_id: 1}, { user_id: 9, instrument_id: 2}, { user_id: 9, instrument_id: 3}, { user_id: 9, instrument_id: 4}, { user_id: 9, instrument_id: 5}, { user_id: 9, instrument_id: 6},
  { user_id: 9, instrument_id: 7}, { user_id: 9, instrument_id: 8}, { user_id: 9, instrument_id: 9}, { user_id: 9, instrument_id: 10}, { user_id: 9, instrument_id: 11}, { user_id: 9, instrument_id: 12},
  { user_id: 9, instrument_id: 13}, { user_id: 9, instrument_id: 14}, { user_id: 9, instrument_id: 15}, { user_id: 9, instrument_id: 16},
  { user_id: 10, instrument_id: 1}, { user_id: 10, instrument_id: 2}, { user_id: 10, instrument_id: 3}, { user_id: 10, instrument_id: 4}, { user_id: 10, instrument_id: 5}, { user_id: 10, instrument_id: 6},
  { user_id: 10, instrument_id: 7}, { user_id: 10, instrument_id: 8}, { user_id: 10, instrument_id: 9}, { user_id: 10, instrument_id: 10}, { user_id: 10, instrument_id: 11}, { user_id: 10, instrument_id: 12},
  { user_id: 10, instrument_id: 13}, { user_id: 10, instrument_id: 14}, { user_id: 10, instrument_id: 15}, { user_id: 10, instrument_id: 16},
  { user_id: 11, instrument_id: 2},
  { user_id: 12, instrument_id: 1}, { user_id: 12, instrument_id: 2}, { user_id: 12, instrument_id: 3}, { user_id: 12, instrument_id: 4}, { user_id: 12, instrument_id: 5}, { user_id: 12, instrument_id: 6},
  { user_id: 12, instrument_id: 7}, { user_id: 12, instrument_id: 8}, { user_id: 12, instrument_id: 9}, { user_id: 12, instrument_id: 10}, { user_id: 12, instrument_id: 11}, { user_id: 12, instrument_id: 12},
  { user_id: 12, instrument_id: 13}, { user_id: 12, instrument_id: 14}, { user_id: 12, instrument_id: 15}, { user_id: 12, instrument_id: 16},
  { user_id: 13, instrument_id: 4}
  ])
