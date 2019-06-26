import '../../../internals/test/helper';

import Pager from './pager-component';
import Select from '../select';

/** @test {Pager} */
describe('Pager component', () => {
/** @test {Pager#render} */
  describe('#render', () => {
    let wrapper;
    const props = {
      perpage: 10,
      length: 20,
      onLimitChange: jest.fn(),
      onClickPagination: jest.fn(),
      hasFirstLast: false,
      hasPagination: false,
      count: 100,
      limit: 15,
      offset: 20,
      limitList: [10, 15, 50],
    }
    beforeEach(() => {
      wrapper = shallow(
        <Pager {...props} />
      );

      jest.spyOn(props, 'onLimitChange');
      jest.spyOn(props, 'onClickPagination');
    })
    it('render correctly', () => {
      expect(wrapper).toMatchSnapshot();
    });

     it('render correctly with hasFirstLast', () => {
      wrapper.setProps({ hasFirstLast: true });
      expect(wrapper).toMatchSnapshot();
    });
    it('onClick pagination first button', () => {
      wrapper.setProps({ hasFirstLast: true });
      wrapper.find('.nav .btn').at(0).simulate('click');
      expect(props.onClickPagination).toBeCalledWith('first');
    });  

    it('onClick pagination prev button', () => {
      wrapper.setProps({ hasFirstLast: true });
      wrapper.find('.nav .btn').at(1).simulate('click');
      expect(props.onClickPagination).toBeCalledWith('prev');
    });

    it('onClick pagination next button', () => {
      wrapper.setProps({ hasFirstLast: true });
      wrapper.find('.nav .btn').at(2).simulate('click');
      expect(props.onClickPagination).toBeCalledWith('next');
    });

    it('onClick pagination last button', () => {
      wrapper.setProps({ hasFirstLast: true });
      wrapper.find('.nav .btn').at(3).simulate('click');
      expect(props.onClickPagination).toBeCalledWith('last');
    });

    it('render correctly with hasPagination', () => {
      wrapper.setProps({ hasPagination: true });
      expect(wrapper).toMatchSnapshot();
    });

    it('onClick pagination number button', () => {
      wrapper.setProps({ hasPagination: true });
      wrapper.find('.pagesWrap .btn').at(1).simulate('click');
      expect(props.onClickPagination).toBeCalledWith('number', 2);
    });

    it('return null when count is undefined', () => {
      wrapper.setProps({ count: undefined });
      expect(wrapper.html()).toEqual(null);
    });

    it('return null when perpage is undefined', () => {
      wrapper.setProps({ perpage: undefined });
      expect(wrapper.html()).toEqual(null);
    });
    
    it('should call function when changes perpage select', () => {
      const obj = { value: 10 };
      wrapper.find('.perpage').find(Select).prop('onSelect')(obj);
      expect(props.onLimitChange).toHaveBeenCalledWith(obj.value);
    });

    it('change start and end pages when currentPage <= 6', () => {
      wrapper.setProps({ offset: 60, hasPagination: true, count: 500 });
      expect(wrapper).toMatchSnapshot();
    });

    it('change start and end pages when currentPage + 4 >= maxPages', () => {
      wrapper.setProps({ offset: 300, hasPagination: true, count: 300 });
      expect(wrapper).toMatchSnapshot();
    });

    it('change start and end pages when is a default value', () => {
      wrapper.setProps({ offset: 100, hasPagination: true, count: 500 });
      expect(wrapper).toMatchSnapshot();
    });
  });
});
