// AUTHORS DATA
const authors = [
  {
    id: 1,
    name: 'Leslie Alexander',
    picture: './leslie-profile-pic.png',
    role: 'UI Designer',
  },
  {
    id: 2,
    name: 'Jane Cooper',
    picture: './jana-profile-pic.png',
    role: 'Frontend Developer',
  },
  {
    id: 3,
    name: 'Bessie Hardman',
    picture: './bessie-profile-pic.png',
    role: 'Full Stack Developer',
  },
];

// CURRENT USER DATA
export const currentUser = authors[0];

// POSTS DATA
export const postsMockContent = [
  {
    id: '1',
    authorInfo: authors[1],
    publishedAt: 'CHANGE ME',
    content: '<p>Hey folks 👋</p><br/><p>Just updated my portfolio. This is a project I worked on during NLW Return, an event by Rocketseat. Check out DoctorCare down below.</p><br/><p>👉&nbsp;&nbsp;<a href="#">jane.design/doctorcare</a></p><br/><p><a href="#">#newProject</a>&nbsp;<a href="#">#nlw</a>&nbsp;<a href="#">#rocketseat</a></p>',
    comments: [
      {
        id: '1c1',
        authorInfo: authors[0],
        publishedAt: 'CHANGE ME',
        content: '<p>So good, congrats!! 👏👏</p>',
        clapsCount: 6
      },
      {
        id: '1c2',
        authorInfo: authors[2],
        publishedAt: 'CHANGE ME',
        content: '<p>Way to go <a href="#">@Jane Cooper!</a> 🚀</p>',
        clapsCount: 2
      },
    ],
    clapsCount: 8
  },
  {
    id: '2',
    authorInfo: authors[2],
    publishedAt: 'CHANGE ME',
    content: '<p>Finally, the first version of my portfolio is out! 🙌 It was challenging to design and code the whole thing, but it turns out great.</p><br/><p>Check it out here -> <a href="#">bessie.dev</a></p><br/><p><a href="#">#portfolio</a> <a href="#">#frontend</a> <a href="#">#fullStack</a> <a href="#">#design</a></p>',
    comments: null,
    clapsCount: 11
  },
];