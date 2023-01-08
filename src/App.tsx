import { useContent } from './utils/ContentContext';
import { useState } from 'react';
import './global-styles.css';
import s from './app.module.css';
import { DeleteDialog } from './components/DeleteDialog';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { PostContent } from './components/PostContent';
import { PostActionsBar } from './components/PostActionsBar';
import { CommentsSection } from './components/CommentsSection';

function App() {
  const [hasCommentSectionVisible, setHasCommentSectionVisible] = useState<string | null>(null);
  const {
    postsContent,
    updatePostClapsCount,
  } = useContent();

  function handleCommentSection(postId: string) {
    if (postId === hasCommentSectionVisible) {
      setHasCommentSectionVisible(null);
      return;
    }

    setHasCommentSectionVisible(postId);
  }

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
              {/* <p className={s.disclosureText}>As this is a basic frontend exercise, not all components are functional.</p> */}
            </div>
          </section>
          <section className={s.postsSection}>
            <div className={s.postsList}>
              {postsContent.map(post => (
                <div key={post.id} className={s.postContainer}>
                  <PostContent data={post} />
                  <PostActionsBar
                    updateClapsCount={() => updatePostClapsCount(post.id)}
                    commentsCount={post.comments ? post.comments.length : null}
                    clapsCount={post.clapsCount}
                    isClapped={post.isClapped}
                    toggleCommentsSection={() => handleCommentSection(post.id)}
                    isCommentsSectionVisible={hasCommentSectionVisible === post.id}
                  />
                  {hasCommentSectionVisible === post.id && (
                    <CommentsSection
                      postId={post.id}
                      commentsData={post.comments}
                    />
                  )}
                </div>
              ))}
            </div>
            <footer>🎉 <span className={s.footerText}>You&apos;re up to date!</span></footer>
          </section>
        </div>
      </main>
      <DeleteDialog />
    </div>
  );
}

export default App;
