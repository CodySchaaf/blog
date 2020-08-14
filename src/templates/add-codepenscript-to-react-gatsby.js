import { Component } from 'react';

export default class BlogPost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      codepen: false,
    };
  }

  componentDidMount() {
    // Add Codepen script to <body> if we detect a Codepen embed
    const codepenElement = document.getElementsByClassName('codepen');
    if (codepenElement.length > 0) {
      // Check if we've already embedded the script
      const {
        state: { codepen },
      } = this;

      if (!document.getElementById('codepen-script') || !codepen) {
        // Create script element with Codepen embed JS lib
        const s = document.createElement('script');
        s.defer = true;
        s.async = true;
        s.src = '//static.codepen.io/assets/embed/ei.js';
        s.id = 'codepen-script';
        const { body } = document;
        if (body) {
          body.appendChild(s);
        }

        // Set state to true so the process doesn't run again
        this.setState({
          codepen: true,
        });
      }
    }
  }

  render() {
    return null;
  }
}


// export const BlogPost
