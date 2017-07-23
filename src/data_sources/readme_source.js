import task_data from './task_source';


let readme_data = {

  headline: "About app",
  info: "It's an app, which written in react; the main idea was a dynamicly renderenig any data. So now, app recursive render `js-objects` like item below. (see how it looks in menu's `template example`)",
  jsonify_example: JSON.stringify(task_data)

};

export default readme_data;
