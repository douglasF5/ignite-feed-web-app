import { postsMockContent } from './utils/posts-mock-content';
import './global-styles.css';
import s from './app.module.css';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { PostContent } from './components/PostContent';
import { PostActionsBar } from './components/PostActionsBar';
import { CommentsSection } from './components/CommentsSection';

function App() {
  return (
    <div>
      <Header />
      <main className={s.mainContainer}>
        <h1 className={s.pageTitle}>Ignite Feed</h1>
        <div className={s.mainContentContainer}>
          <section className={s.profileSection}>
            <div className={s.stickyContainer}>
              <ProfileCard />
              <p className={s.disclosureText}>Ignite Feed © 2022</p>
              <p className={s.disclosureText}>As this is a basic frontend exercise, not all components are functional.</p>
            </div>
          </section>
          <section className={s.postsSection}>
            <div className={s.postsList}>
              {postsMockContent.map(post => (
                <div key={post.id} className={s.postContainer}>
                  <PostContent data={post} />
                  <PostActionsBar />
                  <CommentsSection commentsData={post.comments} />
                </div>
              ))}
            </div>
            <footer>🎉 <span className={s.footerText}>You&apos;re up to date!</span></footer>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
