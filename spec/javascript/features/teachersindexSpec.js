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

  it('should have a list of teachers on the teacher index page', () => {
    setTimeout(() => {
      expect(wrapper.find(TeachersContainer)).toBePresent();
    done()
    }, 0)
  });

  it('should render an h2 tag', () => {
    setTimeout(() => {
      expect(wrapper.find('h2')).toBePresent();
    done()
    }, 0)
  });

  it('should render an p tag', () => {
    setTimeout(() => {
      expect(wrapper.find('p')).toBePresent();
    done()
    }, 0)
  });

  it('should render the details of the lesson teachers', () => {
    setTimeout(() => {
      expect(wrapper.find('h2').text()).toContain("Lesson Teachers");
    done()
    }, 0)
  });

  it('should render the details of the lesson teachers', () => {
    setTimeout(() => {
      expect(wrapper.find('h2').text()).toContain("Lesson Teachers");
    done()
    }, 0)
  });
})
