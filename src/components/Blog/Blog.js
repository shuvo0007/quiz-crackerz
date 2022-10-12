import React from "react";

const Blog = () => {
  return (
    <div className="md:text-3xl h-screen mx-10">
      <h2 className="md:text-4xl sm:text-3xl font-bold text-blue-500 md:m-5 md:text-center text-left ">
        Blog Question
      </h2>
      <hr />
      <ol className="text-left mt-5">
        <li className="font-bold text-white">
          1. What is the purpose of react route?
          <p className="pl-8 font-normal text-gray-500 text-justify">
            <span className="text-green-500">Ans:</span> React Router is a
            standard library for routing in React. It enables the navigation
            among views of various components in a React Application, allows
            changing the browser URL, and keeps the UI in sync with the URL.
          </p>
        </li>
        <li className="font-bold text-white">
          2. how dose Context API works?
          <p className="pl-8 font-normal text-gray-500 text-justify">
            <span className="text-green-500">Ans:</span> It returns a consumer
            and a provider. Provider is a component that as it's names suggests
            provides the state to its children. It will hold the 'store' and be
            the parent of all the components that might need that store.
            Consumer as it so happens is a component that consumes and uses the
            state.
          </p>
        </li>
        <li className="font-bold text-white">
          3. What is Useref?
          <p className="pl-8 font-normal text-gray-500 text-justify">
            <span className="text-green-500">Ans:</span> The useRef Hook allows
            you to persist values between renders. It can be used to store a
            mutable value that does not cause a re-render when updated. It can
            be used to access a DOM element directly. useRef returns a mutable
            ref object whose .current property is initialized to the passed
            argument ( initialValue ). The returned object will persist for the
            full lifetime of the component. Essentially, useRef is like a “box”
            that can hold a mutable value in its .current property..
          </p>
        </li>
      </ol>
    </div>
  );
};

export default Blog;
