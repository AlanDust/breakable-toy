# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_10_29_212449) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "contracts", force: :cascade do |t|
    t.bigint "teacher_id"
    t.bigint "student_id"
    t.index ["student_id"], name: "index_contracts_on_student_id"
    t.index ["teacher_id"], name: "index_contracts_on_teacher_id"
  end

  create_table "instruments", force: :cascade do |t|
    t.string "name", null: false
    t.string "picture", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "interests", force: :cascade do |t|
    t.bigint "instrument_id"
    t.bigint "user_id"
    t.index ["instrument_id"], name: "index_interests_on_instrument_id"
    t.index ["user_id"], name: "index_interests_on_user_id"
  end

  create_table "lessons", force: :cascade do |t|
    t.bigint "contract_id"
    t.index ["contract_id"], name: "index_lessons_on_contract_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", default: "", null: false
    t.string "encrypted_password", default: "", null: false
    t.string "first_name", default: "", null: false
    t.string "last_name", default: "", null: false
    t.string "profile_photo"
    t.integer "age", null: false
    t.string "role", default: "student", null: false
    t.string "ability"
    t.string "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer "sign_in_count", default: 0, null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true
  end

end
