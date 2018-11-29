import TeachersContainer from '../../../app/javascript/react/containers/TeachersContainer'
import TeacherTile from '../../../app/javascript/react/components/TeacherTile'
import fetchMock from 'fetch-mock'

describe('TeachersContainer', () => {
  let wrapper;
  let teacherData;
  let instrument;

  beforeEach(() => {
    jasmineEnzyme();
    teacherData = {
      userList: [
        {id: 2,
        email: "patricia.deandres@gmail.com",
        first_name: "Patricia",
        last_name: "DeAndres",
        age: 33,
        lesson_location: "Lowell, MA",
        long_bio: "This is a long biography",
        short_bio: "This is a short biography",
        profile_photo: null,
        role: "teacher",
        zip: "01852"
        }
      ],
      current_user: {
        id: 1,
        email: "alan.dust@gmail.com",
        first_name: "Alan",
        last_name: "Dust",
        age: 34,
        lesson_location: "Lowell, MA",
        long_bio: "This is a long biography",
        short_bio: "This is a short biography",
        profile_photo: null,
        role: "teacher",
        zip: "01852"
      },
      interests: [
        {instrument_id: 1, user_id: 2, id: 2}
      ],
      interestId: "",
      currentInstrument: "Flute",
      zipCodeArray: ["01730", "01866", "01741", "01865", "01821", "01852"]
    }

    fetchMock.get(`/api/v1/instruments/${teacherData.interests.instrument_id}`, {
      status: 200,
      body: { current_user: teacherData.current_user }
    });

    fetchMock.get(`/api/v1/instruments`, {
      status: 200,
      body: { teacherData: teacherData }
    });

    wrapper = mount(
      <TeachersContainer
        params={ { id: teacherData.interests.id } }
      />
    )
  });

  afterEach(fetchMock.restore)

  describe('teacher show page', () => {
    it('should render the correct instrument on the page', (done) => {
      setTimeout(() => {
        instrument = wrapper.find('.currentInstrument')
        expect(instrument.text()).toEqual("Flute")
        done()
      }, 0)
    });
  })
})
