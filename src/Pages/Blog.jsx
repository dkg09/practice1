// import React from 'react';
// import { Link } from 'react-router-dom';

// const blogPosts = [
//   {
//     id: 1,
//     title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
//     author: 'John Doe',
//     date: '27.07.2020 10:10',
//     comments: 15,
//     content:
//       'Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.',
//     image: 'assets/images/blog-image-1-940x460.jpg',
//   },
//   {
//     id: 2,
//     title: 'Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.',
//     author: 'John Doe',
//     date: '27.07.2020 10:10',
//     comments: 15,
//     content:
//       'Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
//     image: 'assets/images/blog-image-2-940x460.jpg',
//   },
//   {
//     id: 3,
//     title: 'Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil.',
//     author: 'John Doe',
//     date: '27.07.2020 10:10',
//     comments: 15,
//     content:
//       'Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.',
//     image: 'assets/images/blog-image-3-940x460.jpg',
//   },
// ];

// const Blog = () => {
//   return (
//     <>
//       <section className="section section-bg" id="call-to-action" style={{ backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)" }}>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-10 offset-lg-1">
//               <div className="cta-content">
//                 <br />
//                 <br />
//                 <h2>Read our <em>Blog</em></h2>
//                 <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section className="section" id="our-classes">
//         <div className="container">
//           <br />
//           <br />
//           <div className="row">
//             <div className="col-lg-8">
//               <section className="tabs-content">
//                 {blogPosts.map(post => (
//                   <article key={post.id}>
//                     <img src={post.image} alt="" />
//                     <h4>{post.title}</h4>
//                     <p>
//                       <i className="fa fa-user"></i> {post.author} &nbsp;|&nbsp; <i className="fa fa-calendar"></i> {post.date} &nbsp;|&nbsp; <i className="fa fa-comments"></i> {post.comments} comments
//                     </p>
//                     <p>{post.content}</p>
//                     <div className="main-button">
//                       <Link to="/blog-details">Continue Reading</Link>
//                     </div>
//                   </article>
//                 ))}
//               </section>
//             </div>

//             <div className="col-lg-4">
//               <h5 className="h5">Search</h5>

//               <div className="contact-form">
//                 <form id="search_form" name="gs" method="GET" action="#">
//                   <input type="text" name="q" className="searchText" placeholder="type to search..." autoComplete="on" />
//                 </form>
//               </div>

//               <h5 className="h5">Recent posts</h5>

//               <ul>
//                 {blogPosts.map(post => (
//                   <li key={post.id}>
//                     <p><Link to="/blog-details">{post.title}</Link></p>
//                     <small><i className="fa fa-user"></i> {post.author} &nbsp;|&nbsp; <i className="fa fa-calendar"></i> {post.date}</small>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

// export default Blog;


import React from 'react';
import { Link } from 'react-router-dom';
import BlogPost from './BlogPost'; // Import the BlogPost component

const blogPosts = [
  {
    id: 1,
    title: 'Lorem ipsum dolor sit amet, consectetur adipisicing.',
    author: 'John Doe',
    date: '27.07.2020 10:10',
    comments: 15,
    content:
      'Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.',
    image: 'assets/images/blog-image-1-940x460.jpg', // Use provided image link
  },
  {
    id: 2,
    title: 'Aspernatur excepturi magni, placeat rerum nobis magnam libero! Soluta.',
    author: 'John Doe',
    date: '27.07.2020 10:10',
    comments: 15,
    content:
      'Integer dapibus, est vel dapibus mattis, sem mauris luctus leo, ac pulvinar quam tortor a velit. Praesent ultrices erat ante, in ultricies augue ultricies faucibus. Nam tellus nibh, ullamcorper at mattis non, rhoncus sed massa. Cras quis pulvinar eros. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.',
    image: 'assets/images/blog-image-2-940x460.jpg', // Use provided image link
  },
  {
    id: 3,
    title: 'Sunt hic recusandae vitae explicabo quidem laudantium corrupti non adipisci nihil.',
    author: 'John Doe',
    date: '27.07.2020 10:10',
    comments: 15,
    content:
      'Fusce laoreet malesuada rhoncus. Donec ultricies diam tortor, id auctor neque posuere sit amet. Aliquam pharetra, augue vel cursus porta, nisi tortor vulputate sapien, id scelerisque felis magna id felis. Proin neque metus, pellentesque pharetra semper vel, accumsan a neque.',
    image: 'assets/images/blog-image-3-940x460.jpg', // Use provided image link
  },
];

const Blog = () => {
  return (
    <>
       <section className="section section-bg" id="call-to-action" style={{ backgroundImage: "url(assets/images/banner-image-1-1920x500.jpg)" }}>
         <div className="container">
           <div className="row">
             <div className="col-lg-10 offset-lg-1">
               <div className="cta-content">
                 <br />
                 <br />
                 <h2>Read our <em>Blog</em></h2>
                 <p>Ut consectetur, metus sit amet aliquet placerat, enim est ultricies ligula</p>
               </div>
             </div>
           </div>
         </div>
       </section>
       <br />
       <br />


      <section className="section" id="our-classes">
        <div className="container">
          <br />
          <br />
          <div className="row">
          {/* ... */}
          <div className="col-lg-8">
            <section className="tabs-content">
              {blogPosts.map(post => (
                <BlogPost key={post.id} post={post} /> // Render BlogPost component with data as props
              ))}
            </section>
          </div>
          <div className ="col-lg-4">
                    <h5 className="h5">Search</h5>
                    
                    <div className="contact-form">
                        <form id="search_form" name="gs" method="GET" action="#">
                          <input type="text" name="q" className="searchText" placeholder="type to search..." autocomplete="on"/>
                        </form>
                    </div>

                    <h5 className="h5">Recent posts</h5>

                    <ul>
                        <li>
                            <p><a href="blog-details.html">Dolorum corporis ullam, reiciendis inventore est repudiandae</a></p>
                            <small><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10</small>
                        </li>

                        <li><br/></li>

                        <li>
                            <p><a href="blog-details.html">Culpa ab quasi in rerum dolorum impedit expedita</a></p>
                            <small><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10</small>
                        </li>

                        <li><br/></li>

                        <li>
                          <p><a href="blog-details.html">Explicabo soluta corrupti dolor doloribus optio dolorum</a></p>

                          <small><i className="fa fa-user"></i> John Doe &nbsp;|&nbsp; <i className="fa fa-calendar"></i> 27.07.2020 10:10</small>
                        </li>
                    </ul>
                </div>
          </div>
      
      </div>
      </section>
      
    </>
  );
};

export default Blog;
