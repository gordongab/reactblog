(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(50)},42:function(e,t,a){},44:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(9),s=a.n(o),r=a(16),c=a(2),i=a(3),u=a(5),m=a(4),h=a(6),d=a(7);a(42);var p=function(){return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"gabe"}),l.a.createElement("div",{className:"title"},"BootBlog Experience"))},b=(a(44),function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.show?l.a.createElement("div",{className:"backdropStyle"},l.a.createElement("div",{className:"modalStyle"},this.props.children,l.a.createElement("div",{className:"footer"},l.a.createElement("button",{type:"submit",className:"btn btn-primary Close",onClick:this.props.onClose},"Close")))):null}}]),t}(l.a.Component)),f=(a(46),function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(u.a)(this,Object(m.a)(t).call(this,e))).toggleModal=function(){a.setState({showModal:!a.state.showModal})},a.state={showModal:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{type:"submit",className:"btn btn-primary Open",onClick:this.toggleModal},"Post New Blog"),l.a.createElement(b,{show:this.state.showModal,onClose:this.toggleModal},l.a.createElement("div",{className:"insertPost"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Enter your name",className:"form-control",name:"author",onChange:this.handleChange,value:this.state.author})),l.a.createElement("div",{className:"form-group"},l.a.createElement("input",{type:"text",placeholder:"Enter a Title...",className:"form-control",name:"title",onChange:this.handleChange,value:this.state.title})),l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",{cols:"5",rows:"10",placeholder:"Enter post here...",className:"form-control",name:"body",onChange:this.handleChange,value:this.state.body})),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},"Add New Post"))))))}}]),t}(l.a.Component)),E=(a(48),function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={author:"",title:"",body:"",blogList:null},a.handleChange=function(e){e.preventDefault(),a.setState(Object(r.a)({},e.target.name,e.target.value),function(){console.log(this.state)})},a.handleSubmit=function(e){e.preventDefault(),d.post("/api/posts",{author:a.state.author,title:a.state.title,content:a.state.body}).then(function(e){a.getPosts(),a.handleReset()})},a.handleReset=function(){a.setState({author:"",title:"",body:""})},a.handleDelete=function(e){d.delete("/api/posts/".concat(e)).then(function(e){a.getPosts()})},a.getPosts=function(){d.get("/api/posts").then(function(e){a.setState({blogList:e.data})})},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.getPosts()}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(p,null),l.a.createElement("div",null,this.state.blogList?this.state.blogList.map(function(e){return l.a.createElement("div",null,l.a.createElement("div",{className:"insertedTitles"}," ",e.title),l.a.createElement("div",{className:"displayPic"}," ",l.a.createElement("span",{className:"insertedAuthors"},"by ",e.author," on Jan 22")),l.a.createElement("div",{className:"insertedBlogs"}," ",e.content," "),l.a.createElement("hr",null))}):""),l.a.createElement(f,null))}}]),t}(l.a.Component));s.a.render(l.a.createElement(E,null),document.getElementById("root"))}},[[17,2,1]]]);
//# sourceMappingURL=main.456829de.chunk.js.map