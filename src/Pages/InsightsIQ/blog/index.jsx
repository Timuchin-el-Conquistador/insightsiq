import React from "react";

import PulledBlog from "./blog";




class Blog extends React.Component{
    componentWillUnmount() {
        document.body.classList.remove("bg-insightsIq");
        document.body.classList.add("default");
      }
      componentDidMount() {
        document.body.classList.remove("default");
        document.body.classList.add("bg-insightsIq");
        window. scrollTo(0,0)
    
      }

    render(){

        return (
            <div className="position-relative">
            <PulledBlog/>
            </div>
        )
    }
}



export default Blog