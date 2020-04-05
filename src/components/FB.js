import React, {Component} from "react";

export default class FB extends Component{
    state = {
        videos: [
            {
                id: 1,
                fb_id: "3054179094650892"
            },
            {
                id: 2,
                fb_id: "692687181501274"
            },
            {
                id: 3,
                fb_id: "445360972937295"
            },
            {
                id: 4,
                fb_id: "2646930092220246"
            },
            {
                id: 5,
                fb_id: "572272760054384"
            },
            {
                id: 6,
                fb_id: "356735771903988"
            }
        ]
    }
    render(){
        const data = this.state.videos;
        return(
            <div className="container my-5">
                <div className="row">

                    {data.map(video => {
                        return (
                            <div className="col-6 col-md-4 my-2" key={video.id}>
                                <div
                                    class="fb-video bg-primary"
                                    data-href={"https://www.facebook.com/facebook/videos/" + video.fb_id}
                                    data-width="500" data-show-text="false">
                                        <blockquote
                                        cite="https://developers.facebook.com/facebookapp/videos/10153231379946729/"
                                        class="fb-xfbml-parse-ignore"><a href={"https://developers.facebook.com/facebookapp/videos/3054179094650892/" + video.fb_id}>
                                            How to Share With Just Friends</a><p>How to share with just friends.</p>
                                            Posted by <a href="https://www.facebook.com/facebookapp/">Facebook App</a> on Friday, December 5, 2014
                                        </blockquote>
                                </div>
                            </div>
                        )
                    })}
                    

                </div>
            </div>
        )
    }
}