import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import styles from "./App.module.css";
import Home from "./Home/Home.jsx";
import Foo from "./Foo/Foo.jsx";
import Photos from "./Photos/Photos.jsx";
import Blogs from "./Blogs/Blogs.jsx";
import Bar from "./Bar/Bar.jsx";
import Baz from "./Baz/Baz.jsx";
import Error from "./Error/Error.jsx";
import Activities from "./Activities/Activities.jsx";
import SignUp from "./Support/SignUp.jsx";
import AboutUs from "./Support/AboutUs.jsx";
import DetailBlog from "./DetailBlog/DetailBlog.jsx";
import DetailPhoto from "./DetailPhoto/DetailPhoto.jsx";

// import iconWechat from "./data/icons/wechat.png";
// here is some external content. look at the /baz route below
// to see how this content is passed down to the components via props
const externalContent = {
  id: "article-1",
  title: "An blog",
  author: "Stephen",
  text: "hiking in the mountains",
};

function App() {
  return (
    <Router>
      <header>
        <nav className={styles.nav}>
          <ul className={styles.ul}>
            {/* these links should show you how to connect up a link to a specific route */}

            <Link to="/">Adventures</Link>
            <li>
              <Link to="/signUp">Sign up</Link>
            </li>
            <li>
              <Link to="/aboutUs">About us</Link>
            </li>
            <li>
              <Link to="/photos">Photos</Link>
            </li>
            <li>
              <Link to="/blogs">Blogs</Link>
            </li>
            {/* <li>
              <Link to="/foo">Foo</Link>
            </li> */}
            {/* <li>
              <Link to="/bar/hats/sombrero">Bar</Link>
            </li>
            <li>
              <Link to="/detailBlog/hats/sombrero">DetailBlog</Link>
            </li>
            <li>
              <Link to="/detailPhoto/hats/sombrero">DetailPhoto</Link>
            </li> */}
            {/* <li>
              <Link to="/baz">Baz</Link>
            </li> */}

            <li>
              <Link to="/activities/*">Activities</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className={styles.bodyDiv}>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route
            path="/activities/:categoryId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props
              <Activities categoryId={match.params.categoryId} />
            )}
          />
          <Route path="/foo" exact component={Foo} />
          <Route path="/photos" exact component={Photos} />
          <Route path="/blogs" exact component={Blogs} />
          <Route path="/signUp" exact component={SignUp} />
          <Route path="/aboutUs" exact component={AboutUs} />
          {/* passing parameters via a route path */}
          <Route
            path="/bar/:categoryId/:productId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props
              <Bar
                categoryId={match.params.categoryId}
                productId={match.params.productId}
              />
            )}
          />
          <Route
            path="/detailBlog/:blogId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props
              <DetailBlog blogId={match.params.blogId} />
            )}
          />
          <Route
            path="/detailPhoto/:blogId"
            exact
            render={({ match }) => (
              // getting the parameters from the url and passing
              // down to the component as props
              <DetailPhoto blogId={match.params.blogId} />
            )}
          />
          <Route
            path="/baz"
            exact
            render={() => <Baz content={externalContent} />}
          />

          <Route component={Error} />
        </Switch>
      </div>

      <footer>
        <div className={styles.categoryContainer}>
          <div className={styles.tabcontent}>
            <h1>Useful Travel Resources</h1>
            <h2>How To Travel The World</h2>
            <h2>Saving Money For Travel</h2>
          </div>

          <div className={styles.tabcontent}>
            <h1>Follow On Social Media</h1>
            <div className={styles.socialMedias}>
              <p>Instagram</p>
              <p>Youtube</p>
              <p>Twitter</p>
              <p>Facebook</p>
              <p>Wechat</p>
            </div>
          </div>

          <div className={styles.tabcontent}>
            <h1>Adventure Travel Photography</h1>
            <h2>How To Improve Your Photos</h2>
            <h2>What's In My Camera Bag</h2>
          </div>
        </div>
      </footer>
    </Router>
  );
}

export default App;
