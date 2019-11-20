import React, { Component } from "react";
import TextType from "./textType";

class Article extends Component {
  state = {
    visible: false
  };

  scrollFade = () => {
    const elementStats = document
      .getElementById(this.props.chapter.id)
      .getBoundingClientRect();
    if (
      elementStats.y + elementStats.height + window.scrollY >=
        window.scrollY + 100 &&
      elementStats.y + window.scrollY <=
        window.scrollY - 100 + window.innerHeight
    ) {
      this.setState({ visible: true });

      // this.changeURL();
    } else {
      this.setState({ visible: false });
    }
  };

  componentDidMount() {
    this.scrollFade();
    document.addEventListener("scroll", this.scrollFade);
  }

  componentWillUnmount() {
    document.removeEventListener("scroll", this.scrollFade);
  }

  render() {
    const chapter = this.props.chapter;
    return (
      <article
        id={chapter.id}
        name={chapter.link}
        style={{
          opacity: this.state.visible ? 1 : 0,
          transform: this.state.visible ? "scale(1)" : "scale(1.1)"
        }}
        className="mx-auto"
      >
        <div className="articleFakeBorder">
          <h1>{chapter.name}</h1>
          {chapter.sections.map((section, key) => {
            return (
              <TextType
                key={key}
                type={section.type}
                content={section.content}
              />
            );
          })}
        </div>
      </article>
    );
  }
}

export default Article;
