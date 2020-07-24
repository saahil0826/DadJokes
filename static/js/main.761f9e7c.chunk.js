(this.webpackJsonpdadjokes=this.webpackJsonpdadjokes||[]).push([[0],{22:function(e,t,a){e.exports=a(50)},27:function(e,t,a){},28:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),s=a(18),i=a.n(s),r=(a(27),a(28),a(8)),c=a(7),l=a.n(c),u=a(21),m=a(19),h=a(2),p=a(3),d=a(4),k=a(6),f=a(5),v=a(20),g=a.n(v),j=(a(47),a(48),function(e){Object(k.a)(a,e);var t=Object(f.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"getColor",value:function(){return this.props.votes>=15?"rgb(37, 173, 88)":this.props.votes>=12?"rgb(71, 204, 31)":this.props.votes>=19?"rgb(134, 244, 37)":this.props.votes>=6?"rgb(224, 217, 42)":this.props.votes>=3?"rgb(213, 172, 50)":this.props.votes>=0?"rgb(230, 151, 34)":"rgb(219, 31, 31)"}},{key:"getEmoji",value:function(){return this.props.votes>=15?"em em-rolling_on_the_floor_laughing":this.props.votes>=12?"em em-laughing":this.props.votes>=19?"em em-smiley":this.props.votes>=6?"em em-slightly_smiling_face":this.props.votes>=3?"em em-neutral_face":this.props.votes>=0?"em em-confused":"em em-angry"}},{key:"render",value:function(){return n.a.createElement("div",{className:"Joke"},n.a.createElement("div",{className:"Joke-buttons"},n.a.createElement("i",{className:"fas fa-arrow-up",onClick:this.props.upVote}),n.a.createElement("span",{className:"Joke-votes",style:{borderColor:this.getColor()}},this.props.votes),n.a.createElement("i",{className:"fas fa-arrow-down",onClick:this.props.downVote})),n.a.createElement("div",{className:"Joke-text"},this.props.text),n.a.createElement("div",{className:"Joke-smiley"},n.a.createElement("i",{className:this.getEmoji()})))}}]),a}(n.a.Component)),b=a(49).v4,E=function(e){Object(k.a)(a,e);var t=Object(f.a)(a);function a(e){var o;return Object(h.a)(this,a),(o=t.call(this,e)).state={jokes:JSON.parse(window.localStorage.getItem("jokes")||"[]"),loading:!1},o.seenJokes=new Set(o.state.jokes.map((function(e){return e.text}))),o.handleClick=o.handleClick.bind(Object(d.a)(o)),o}return Object(p.a)(a,[{key:"componentDidMount",value:function(){0===this.state.jokes.length&&this.getJokes()}},{key:"getJokes",value:function(){var e=Object(m.a)(l.a.mark((function e(){var t,a,o,n=this;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t=[];case 1:if(!(t.length<this.props.numJokesToGet)){e.next=10;break}return"https://icanhazdadjoke.com/",e.next=5,g.a.get("https://icanhazdadjoke.com/",{headers:{Accept:"application/json"}});case 5:a=e.sent,o=a.data.joke,this.seenJokes.has(o)?(console.log("found a duplicate"),console.log(o)):t.push({id:b(),text:o,votes:0}),e.next=1;break;case 10:this.setState((function(e){return{loading:!1,jokes:[].concat(Object(u.a)(e.jokes),t)}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(n.state.jokes))}));case 11:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"handleVote",value:function(e,t){var a=this;this.setState((function(a){return{jokes:a.jokes.map((function(a){return a.id===e?Object(r.a)(Object(r.a)({},a),{},{votes:a.votes+t}):a}))}}),(function(){return window.localStorage.setItem("jokes",JSON.stringify(a.state.jokes))}))}},{key:"handleClick",value:function(){this.setState({loading:!0},this.getJokes)}},{key:"render",value:function(){var e=this;if(this.state.loading)return n.a.createElement("div",{className:"JokeList-spinner"},n.a.createElement("i",{className:"far fa-5x fa-laugh fa-spin"}),n.a.createElement("h1",{className:"JokeList-title"},"Loading..."));var t=this.state.jokes.sort((function(e,t){return t.votes-e.votes}));return n.a.createElement("div",{className:"JokeList"},n.a.createElement("div",{className:"JokeList-sidebar"},n.a.createElement("h1",{className:"JokeList-title"},"Dad Jokes "),n.a.createElement("img",{src:"https://cdn4.iconfinder.com/data/icons/emoji-37/512/feeling-Emoji-face-emoticon-emotion-28-512.png",alt:"smiley"}),n.a.createElement("button",{className:"JokeList-getmore",onClick:this.handleClick},"New Jokes")),n.a.createElement("div",{className:"JokeList-joke"},t.map((function(t){return n.a.createElement(j,{key:t.id,votes:t.votes,text:t.text,upVote:function(){return e.handleVote(t.id,1)},downVote:function(){return e.handleVote(t.id,-1)}})}))))}}]),a}(n.a.Component);E.defaultProps={numJokesToGet:10};var J=E;var w=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(J,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(w,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.761f9e7c.chunk.js.map