import IndividualTeacherContainer from '../../../app/javascript/react/containers/IndividualTeacherContainer'
import IndividualTeacherTile from '../../../app/javascript/react/components/IndividualTeacherTile'
import { mount } from 'enzyme';

describe('IndividualTeacherContainer', () => {
  let wrapper;
  let data = [{
    teacherData: [{
      id: 1,
      age: 34,
      long_bio: "This is a long bio",
      email: "alan.dust@gmail.com",
      first_name: "Alan",
      last_name: "Dust",
      lesson_location: "Lowell",
      profile_photo: "random profile photo here from AWS S3 bucket",
      zip: "01852",
      calendar: null
    }]
  }]
  beforeEach(() => {
    wrapper = mount(
      <IndividualTeacherTile
        key = {data[0].teacherData[0].id}
        id = {data[0].teacherData[0].id}
        age = {data[0].teacherData[0].age}
        long_bio = {data[0].teacherData[0].long_bio}
        email = {data[0].teacherData[0].email}
        first_name = {data[0].teacherData[0].first_name}
        last_name = {data[0].teacherData[0].last_name}
        lesson_location = {data[0].teacherData[0].lesson_location}
        profile_photo = {data[0].teacherData[0].profile_photo}
        zip = {data[0].teacherData[0].zip}
        calendar = {data[0].teacherData[0].calendar}
      />
    )
  })

  it('should render all the information about a specific teacher on the teacher show page', () => {
    setTimeout(() => {
      expect(wrapper.find(IndividualTeacherTile)).toBePresent();
    done()
    }, 0)
  });

  it('should render the full name', () => {
    setTimeout(() => {
      expect(wrapper.find(IndividualTeacherTile.props.first_name)).toBePresent();
      expect(wrapper.find(IndividualTeacherTile.props.last_name)).toBePresent();
    done()
    }, 0)
  });

  it('should render a long biography', () => {
    setTimeout(() => {
      expect(wrapper.find(IndividualTeacherTile.props.long_bio)).toBePresent();
    done()
    }, 0)
  });
});
