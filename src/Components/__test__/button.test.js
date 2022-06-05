import React from 'react'
// import ReactDOM from 'react-dom'; 
import Button from '../button/button';
import { Button2  } from '../button/button';
import "@testing-library/jest-dom"
import { createRoot } from 'react-dom/client';
// ReactDOM.render is no longer supported in React 18. Use createRoot instead. 
// Until you switch to the new API, your app will behave as if it’s running React 17.
import {  render ,screen,cleanup} from '@testing-library/react';
// import {TestEvents,Button} from '../button/button'
import ShallowRenderer from 'react-shallow-renderer';

// cleanup is passed as a parameter to afterEach to just clean up everything after each test to avoid memory leaks.

afterEach(cleanup)

it("rendres without crashing",()=>
{
    const div=document.createElement("div");
    const root = createRoot(div);
    // we are gonna attach that component with the div
    root.render(<Button></Button>,div);
});
it("render button correctly",()=>
{
    render(<Button label="click"/>)
    expect(screen.getByTestId('button')).toBeInTheDocument("click")
});

it("render button2 correctly",()=>
{
    render(<Button2 label="save"/>)
    expect(screen.getByTestId('button1')).toBeInTheDocument("save")
});
// When you're writing tests, you often need to check that values meet certain conditions. 
// expect gives you access to a number of "matchers" that let you validate different things.
it("matches snapshots",()=>
{
    render(<Button label="click"/>)
    expect(screen.getByTestId('button')).toMatchSnapshot("click")
    
});
// How snapshot testing works is that it compares the component with 
// the generated blueprint (snapshot). If they don't match, the test will fail.
it("matches snapshots 2",()=>
{
    render(<Button label="click"/>)
    expect(screen.getByTestId('button')).toMatchSnapshot("click me please")
    
});

//Sallow rendering
// You can think of the shallowRenderer as a “place” to render the component
//  you’re testing, and from which you can extract the component’s output.

// shallowRenderer.render()
//  is similar to root.render() but it doesn’t require
//   DOM and only renders a single level deep. 
//   This means you can test components isolated from how their children are implemented.

// const renderer = new ShallowRenderer();
// render(<span className="heading"/>)
// renderer.getRenderOutput();
// expect(renderer.type).toBe('div');
// expect(renderer.props).toEqual([
//   <span className="heading">Title</span>
// ]);