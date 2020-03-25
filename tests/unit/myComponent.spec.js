import { mount } from '@vue/test-utils';
import MyComponent from '@/components/MyComponent.vue';

describe('MyComponent.vue', () => {
  it('渲染Counter组件', () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.element).toMatchSnapshot();
  });
  //   test('renders correctly', () => {
  //     const wrapper = mount(MyComponent);
  //     expect(wrapper.element).toMatchSnapshot();
  //   });

  it('初始化之为0', () => {
    const wrapper = mount(MyComponent);
    expect(wrapper.vm.count).toEqual(0);
  });

  it('加1', () => {
    const wrapper = mount(MyComponent);
    wrapper.vm.inc();
    expect(wrapper.vm.count).toEqual(1);
  });

  it('减1', () => {
    const wrapper = mount(MyComponent);
    wrapper.vm.dec();
    expect(wrapper.vm.count).toEqual(-1);
  });

  it('重置', () => {
    const wrapper = mount(MyComponent);
    wrapper.vm.reset();
    expect(wrapper.vm.count).toEqual(1);
  });

  it('因数为10加1操作', () => {
    const wrapper = mount(MyComponent, { propsData: { factor: 10 } });
    wrapper.vm.inc();
    expect(wrapper.vm.computedCount).toEqual(10);
  });
});

// Jest Matchers
// Matchers俗称断言库，例如上面的expect().toBe()便是其中之一，其他常见用法如下：
// 1.相等断言
// toBe(value)： 比较数字、字符串
// toEqual(value)： 比较对象、数组
// toBeNull()
// toBeUndefined()
// 2.包含断言
// toHaveProperty(keyPath, value)： 是否有对应的属性
// toContain(item)： 是否包含对应的值，括号里写上数组、字符串
// toMatch(regexpOrString)： 括号里写上正则
// 3.逻辑断言
// toBeTruthy()
// toBeFalsy()
// 在JavaScript中，有六个falsy值：false，0，''，null， undefined，和NaN。其他一切都是Truthy。
// toBeGreaterThan(number)： 大于
// toBeLessThan(number)： 小于
// 4.not
// expect('123').not.toContain('4')
//
