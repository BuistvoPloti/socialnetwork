import React from 'react';
import {create} from "react-test-renderer"
import ProfileStatus from "./ProfileStatus"

describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status="test-star1k"/>);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("test-star1k");
  });
});

describe("After creation span should be displayed", () => {
  test("span length should be 1", () => {
    const component = create(<ProfileStatus status="test-star1k"/>);
    const root = component.root
    let span = root.findByType('span')
    expect(span).not.toBeNull()
  });
});

describe("After creation input shouldnt be displayed", () => {
  test("span length should be 1", () => {
    const component = create(<ProfileStatus status="test-star1k"/>);
    const root = component.root
    expect(() => {
      let input = root.findByType('input')
    }).toThrow()
  });
});

describe("..sssssssss", () => {
  test("span should be test-star1k", () => {
    const component = create(<ProfileStatus status="test-star1k"/>);
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[0]).toBe('test-star1k')
  });
});

describe("input should be displayed in editMode instead of span", () => {
  test("span should be test-star1k", () => {
    const component = create(<ProfileStatus status="test-star1k"/>);
    const root = component.root
    let span = root.findByType('span')
    let spanValue = span.children[0]

    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe(spanValue)
  });
});

describe("callback should be called", () => {
  test("span should be test-star1k", () => {
    const mockCallback = jest.fn()
    const component = create(<ProfileStatus status={"test-star1k"} updateStatus={mockCallback}/>);
    const instance = component.getInstance()
    instance.deactivateEditMode()
    expect(mockCallback.mock.calls.length).toBe(1)
  });
});



