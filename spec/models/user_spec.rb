require 'rails_helper'

RSpec.describe User, type: :model do
  it "is an teacher if the role is teacher" do
    user = FactoryBot.create(:user, first_name: "Alan", last_name: "Dust", age: 34, zip: 11111, role: "teacher")
    expect(user.teacher?).to eq(true)
  end

  it "is not an teacher if the role is not teacher" do
    user = FactoryBot.create(:user, first_name: "Alan", last_name: "Dust", age: 34, zip: 11111, role: "student")
    expect(user.teacher?).to eq(false)
  end

  it { should have_valid(:first_name).when("Alan") }
  it { should_not have_valid(:first_name).when(nil, "") }

  it { should have_valid(:last_name).when("Dust") }
  it { should_not have_valid(:last_name).when(nil, "") }

  it { should have_valid(:zip).when(11111) }
  it { should_not have_valid(:zip).when(nil, "") }
  it { should_not have_valid(:zip).when("string") }

  it { should have_valid(:age).when(34) }
  it { should_not have_valid(:age).when(nil, "") }

  it { should have_valid(:email).when("alan.dust@gmail.com") }
  it { should_not have_valid(:email).when(nil, "") }
  it { should_not have_valid(:email).when("alan.dust") }

  it { should have_valid(:encrypted_password).when("password") }
  it { should_not have_valid(:encrypted_password).when(nil, "") }
end
