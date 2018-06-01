import React, { Component } from 'react';
import { connect } from 'react-redux';

class Blog extends Component {

  constructor() {
    super();
  }



  render() {
      return (
          <div className="blog">
              <div className="content-wrap">
                  <div id="fm-medium-embed"></div>

                  <script src="//data.feedmirror.com/embed.js"></script>
                  <script>
                      {/* var fmSettings = {
                          feedURL : 'https://data.feedmirror.com/-LDr_PwbNKbT_4iagliH.json',
                      integration: 'medium-embed',
                      linkOutText: 'Read more',
                      linkToMediumProfileText: 'Subscribe on Medium',
                      postsCount: 3,
                      element: 'fm-medium-embed'
                    }; */}
                    feedmirror.initialize(fmSettings);
                </script>
              </div>
          </div>
      );
  }
}

export default Blog;













            