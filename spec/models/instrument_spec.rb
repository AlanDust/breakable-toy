require 'rails_helper'

RSpec.describe Instrument, type: :model do
  it { should have_valid(:name).when("Flute") }
  it { should_not have_valid(:name).when(nil, "") }

  it { should have_valid(:picture).when("Picture Here") }
  it { should_not have_valid(:picture).when(nil, "") }
end
