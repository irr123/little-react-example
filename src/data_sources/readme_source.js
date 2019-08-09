import resume_data from '../data_sources/resume_source';

let readme_data = {

  headline: "About app",
  info: "It's an app, which written in react; the main idea was a dynamicly renderenig any datastructure. So now, it's app is recursive render of `js-objects` like item below.",
  jsonify_example: function() { return JSON.stringify(resume_data, null, 2); },

};

export default readme_data;
