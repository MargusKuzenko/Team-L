const createPost = function({ post_body, img, date, likes, author}) {
    const posts = document.querySelector('.posts')
    const post = document.createElement('div');
    post.classList.add('post');

    //*Header*//
    const postHeader = document.createElement('div');
    postHeader.classList.add('post-header');
    //Profile IMG
    const profileImage = document.createElement('img');
    profileImage.src = 'assets/images/me.png';
    profileImage.alt = author;
    postHeader.appendChild(profileImage);
    //Date
    const postDate = document.createElement('div');
    postDate.classList.add('date');
    postDate.textContent = date;
    postHeader.appendChild(postDate);
    post.appendChild(postHeader);

    //*Post content*//
    const postContent = document.createElement('div');
    postContent.classList.add('content');
    //Post img if present
    if(img) {
        const Image = document.createElement('img');
        Image.src = img;
        postContent.appendChild(Image);
    }
    //Post text
    const PostText = document.createElement('p');
    PostText.textContent = post_body;
    postContent.appendChild(PostText);
    post.appendChild(postContent);

    //*Like*//
    const postLike = document.createElement('div');
    postLike.classList.add('like');
    //Icon
    const Icon = document.createElement('img');
    Icon.src = './assets/icons/heart-regular.svg';
    postLike.appendChild(Icon);
    //Like amount
    const likeAmount = document.createElement('p');
    likeAmount.textContent = likes;
    postLike.appendChild(likeAmount);
    post.appendChild(postLike);

    posts.appendChild(post);
}

fetch("./data/posts.json")
    .then(response => response.json())
    .then(posts => { 
        posts.forEach(post => {
            createPost(post);
        });
    });

/*
fetch("https://api.npoint.io/143d087b1d16e9eeafc7")
    .then(response => response.json())
    .then(posts => { 
        posts.forEach(post => {
            createPost(post);
        });
    });*/