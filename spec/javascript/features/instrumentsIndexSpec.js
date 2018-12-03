import InstrumentsContainer from '../../../app/javascript/react/containers/InstrumentsContainer'
import InstrumentTile from '../../../app/javascript/react/components/InstrumentTile'
import { mount } from 'enzyme';

describe('InstrumentsContainer', () => {
  let wrapper;
  let data = [{
    instrumentList: [{
      id:1,
      name: "Random Instrument",
      picture: "random instrumet picture url here from amazon AWS",
    }]
  }]
  beforeEach(() => {
    wrapper = mount(
      <InstrumentTile
        key = {data[0].instrumentList[0].id}
        id = {data[0].instrumentList[0].id}
        name = {data[0].instrumentList[0].name}
        picture = {data[0].instrumentList[0].picture}
      />
    )
  })

  it('should have a list of instruments on the instrument index page', () => {
    setTimeout(() => {
      expect(wrapper.find(InstrumentTile)).toBePresent();
    done()
    }, 0)
  });


  it('should render specific text on the page ', () => {
    setTimeout(() => {
      expect(wrapper.text()).toMatch("A website to connect music teachers with students");
      expect(wrapper.text()).toMatch("Duet");
    done()
    }, 0)
  });

  it('should render a specific instrument picture', () => {
    setTimeout(() => {
      expect(wrapper.find(InstrumentTile.props.picture)).toBePresent();
    done()
    }, 0)
  });

  it('should render a specific instrument name', () => {
    setTimeout(() => {
      expect(wrapper.find(InstrumentTile.props.name)).toBePresent();
    done()
    }, 0)
  });
});
