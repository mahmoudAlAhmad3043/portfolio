import React, { Component } from "react";

class Experience2 extends Component {
  render() {
    return (
      <a
        href="#back-end"
        className="flex flex-col items-start gap-2 text-start bg-sky-400 p-8 pt-0 group transition-all duration-700"
      >
        <svg
          className="w-10 h-10 mt-8 text-zinc-50 group-hover:opacity-0 group-hover:mt-0 transition-all duration-700"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 20"
        >
          <path d="M8 5.625c4.418 0 8-1.063 8-2.375S12.418.875 8 .875 0 1.938 0 3.25s3.582 2.375 8 2.375Zm0 13.5c4.963 0 8-1.538 8-2.375v-4.019c-.052.029-.112.054-.165.082a8.08 8.08 0 0 1-.745.353c-.193.081-.394.158-.6.231l-.189.067c-2.04.628-4.165.936-6.3.911a20.601 20.601 0 0 1-6.3-.911l-.189-.067a10.719 10.719 0 0 1-.852-.34 8.08 8.08 0 0 1-.493-.244c-.053-.028-.113-.053-.165-.082v4.019C0 17.587 3.037 19.125 8 19.125Zm7.09-12.709c-.193.081-.394.158-.6.231l-.189.067a20.6 20.6 0 0 1-6.3.911 20.6 20.6 0 0 1-6.3-.911l-.189-.067a10.719 10.719 0 0 1-.852-.34 8.08 8.08 0 0 1-.493-.244C.112 6.035.052 6.01 0 5.981V10c0 .837 3.037 2.375 8 2.375s8-1.538 8-2.375V5.981c-.052.029-.112.054-.165.082a8.08 8.08 0 0 1-.745.353Z" />
        </svg>
        <div className="font-bold text-2xl text-zinc-50">Back-end</div>
        <p className="text-zinc-50 group-hover:mb-8 transition-all duration-700">
          I have an experience in Node Js ,SQL Server ,MySQL ,API and
          javaScript.
        </p>
      </a>
    );
  }
}

export default Experience2;
