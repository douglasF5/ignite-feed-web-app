import './global-styles.css';
import s from './app.module.css';
import { Header } from './components/Header';
import { ProfileCard } from './components/ProfileCard';
import { Post } from './components/Post';

function App() {
  const postsMockContent = [
    {
      authorPicture: './jana-profile-pic.png',
      authorName: 'Jane Cooper',
      authorRole: 'Frontend Developer',
      content: '<p>Hey folks 👋</p><br/><p>Just updated my portfolio. This is a project I worked on during NLW Return, an event by Rocketseat. Check out DoctorCare down below.</p><br/><p>👉&nbsp;&nbsp;<a href="#">jane.design/doctorcare</a></p><br/><p><a href="#">#newProject</a>&nbsp;<a href="#">#nlw</a>&nbsp;<a href="#">#rocketseat</a></p>'
    },
    {
      authorPicture: './bessie-profile-pic.png',
      authorName: 'Bessie Cooper',
      authorRole: 'Full Stack Developer',
      content: '<p>Finally, the first version of my portfolio is out! 🙌 It was challenging to design and code the whole thing, but it turns out great.</p><br/><p>Check it out here -> <a href="#">bessie.dev</a></p><br/><p><a href="#">#portfolio</a> <a href="#">#frontend</a> <a href="#">#fullStack</a> <a href="#">#design</a></p>'
    }
  ];

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
              {postsMockContent.map((post, idx) => (
                <Post key={idx} data={post} />
              ))}
            </div>
            <footer className={s.footer}>🎉 You&apos;ve got to the end!</footer>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
