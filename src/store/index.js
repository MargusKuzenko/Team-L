import { createStore } from 'vuex'

export default createStore({
  state: {
    posts: [ {"id":1, "post_body": "Tartu 2024", "img": "tartu.jpg", "date": "Oct 07, 2024", "likes": 213, "author": "Madis12" }, 
      { "id":2, "post_body": "Anyone knows in which room is the lab today?", "img": "", "date": "Oct 13, 2024", "likes": 3, "author": "Eesti Kalevipoeg" }, 
      { "id":3, "post_body": "Peep this goofy ahh meme lmao", "img": "meme.jpg", "date": "Nov 03, 2024", "likes": 8, "author": "user12123214" }, 
      { "id":4, "post_body": "Cow vibing in the matrix with max Sigma aura.", "img": "polish-cow-cow.gif", "date": "Oct 17, 2024", "likes": 666, "author": "Tõnu Kidra" }, 
      { "id":5, "post_body": "AHHAHAHAHAHAHA so many skibidi bops and Kai Cenat yaps", "img": "", "date": "Oct 27, 2024", "likes": 13, "author": "Koit T00m3" }, 
      { "id":6, "post_body": "Why can't you trust atoms?\nThey make up everything.", "img": "cat.png", "date": "Oct 07, 2024", "likes": 23, "author": "Trucker" }, 
      { "id":7, "post_body": "Hawk Tuah this Hawk Tuah that why don't you try to Talk Tuah Therapist", "img": "", "date": "Oct 07, 2024", "likes": 125, "author": "Mike Oxlong" }, 
      { "id":8, "post_body": "Under Kamala, the ice cream machine's always broken. Have you noticed this!?", "img": "trump.jpg", "date": "Oct 07, 2024", "likes": 34, "author": "Sofa King" }, 
      { "id":9, "post_body": "This cringe homework's got me skibidi tweaking; I might just drop out and become a sigma chicken farmer in Ohio.", "img": "chicken.png", "date": "Oct 07, 2024", "likes": 3, "author": "RekkaMees69" }, 
      { "id":10, "post_body": "Just saw a post about quitting college and mogging on some chickens in Ohio ngl seems like a sigma grindset plan might just Skibidi and do it 🐔💪.", "img": "delfi.png", "date": "Oct 07, 2024", "likes": 3, "author": "Alo" } 
    ]
  },
  getters: {
  },
  mutations: {
    IncreaseLike: (state, id) => {
      const post = state.posts.find(post => post.id === id);
      if (post) post.likes++;
    },
    ResetLikes: state => {
      state.posts.forEach(post => {
          post.likes = 0;
      })
  }
  },
  actions: {
    IncreaseLike: (act, id) => {
      setTimeout(function() {
          act.commit("IncreaseLike", id);
      }, 100)
    },
    ResetLikesAct: act => {
      setTimeout(function() {
          act.commit("ResetLikes")
      }, 100)
  }
  },
})
