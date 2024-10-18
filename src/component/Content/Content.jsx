import React from 'react'
import './Content.css';
export default function Content() {
  return (
    <div className="content-container">
      <article className="content-article">
        <h1 className="content-title">Article Title Goes Here</h1>
        <p className="content-author">By John Doe | October 13, 2024</p>
        <img
          className="content-image"
          src="https://via.placeholder.com/800x400"
          alt="Article"
        />
        <section className="content-body">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget justo vel
            velit pharetra lacinia sit amet id orci. Vivamus auctor, lacus ut scelerisque
            sodales, nisi dui dapibus nisi, eget vulputate enim metus vel purus.
          </p>
          <p>
            Maecenas eget risus sit amet leo posuere scelerisque. Donec congue, mauris in
            sollicitudin facilisis, erat orci condimentum odio, in sodales justo velit id
            orci. Praesent vitae magna et urna fringilla pellentesque in nec purus.
          </p>
          <h2>Subtitle or Section Heading</h2>
          <p>
            Proin tincidunt vestibulum turpis in commodo. Integer vestibulum tempor sapien,
            vel vehicula nunc volutpat vel. Suspendisse et orci at quam viverra elementum.
          </p>
          <p>
            Nam et sem in mauris dapibus feugiat. Aenean tincidunt ligula quis nulla
            sollicitudin, id tempor leo efficitur. Cras venenatis sit amet odio nec
            ultricies.
          </p>
        </section>
      </article>
    </div>
  );
}
