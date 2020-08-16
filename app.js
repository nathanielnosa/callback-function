// crate a dummy post
 const posts = [
   {title: 'Post One', body:'This is post one '},
   {title: 'Post Two', body: 'This is post two'}
 ]

 //synchronus callback function

  // // create a post
  //   function creatPost(post){
  //     setTimeout(function(){
  //       posts.push(post);
  //     },2000);
  //   }

  // //get the post
  // function getPost(){
  //   setTimeout(function(){
  //     let output='';
  //     posts.forEach(function(post){
  //       output+= `<li>${post.title}</li>`;
  //     });
  //     document.body.innerHTML = output;
  //   },1000);
  // }

  // creatPost({title:'Post Three', body:'This is post three'});
  // getPost();

  // Asynchronous callback

    //create post
  function creatPost(post,cb){
    setTimeout(function(){
      posts.push(post);
      cb();
    },2000);
  }
    
  //get post
  function getPost(){
    setTimeout(function(){
      let output='';
      posts.forEach(function(post){
        output += `<li>${post.title}</li>`;
      });
      document.body.innerHTML = output;
    },1000);
  }
  creatPost({title:'Post Three', body:'This is post three'},getPost);
