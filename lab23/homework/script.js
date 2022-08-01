const getPost = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

const renderPostList = async () => {
  try {
    const { data } = await getPost();
    //bien doi mang obj -> html
    const html = data
      .map((post) => {
        return `
        <tr>
            <td class="post-title">${post.title}</td>
            <td class="post-body">${post.body}</td>
        </tr`;
      })
      .join("");

    document.querySelector(".post-list").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

renderPostList();

//cmt
const getCmt = () => {
  return axios.get("https://jsonplaceholder.typicode.com/comments");
};

const renderCmtList = async () => {
  try {
    const { data } = await getCmt();
    //bien doi mang obj -> html
    const html = data
      .map((cmt) => {
        return `
        <tr class="cmt">
            <td class="cmt-name">${cmt.name}</td>
            <td class="cmt-email">${cmt.email}</td>
            <td class="cmt-body">${cmt.body}</td>
        </tr>`;
      })
      .join("");

    document.querySelector(".cmt-list").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

renderCmtList();

//ablums
const getalbums = () => {
  return axios.get("https://jsonplaceholder.typicode.com/albums");
};

const renderalbumsList = async () => {
  try {
    const { data } = await getalbums();
    //bien doi mang obj -> html
    const html = data
      .map((albums) => {
        return `
        <div class="album">
            <div class="album-title"><b>Title</b>: ${albums.title}</div>
        </div>`;
      })
      .join("");

    document.querySelector(".albums-list").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

renderalbumsList();

//photos
const getphotos = () => {
  return axios.get("https://jsonplaceholder.typicode.com/photos");
};

const renderphotosList = async () => {
  try {
    const { data } = await getphotos();
    //bien doi mang obj -> html
    const html = data
      .map((photos) => {
        return `
        <tr class="photos">
            <td class="photos-title">${photos.title}</td>
            <td class="photos-url"><a href="${photos.url}">${photos.url}</a></td>
            <td class="photos-thumbnailurl"><img src="${photos.thumbnailUrl}" alt="non"></img></td>
        </tr>`;
      })
      .join("");

    document.querySelector(".photos-list").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

renderphotosList();

//todos
const gettodos = () => {
  return axios.get("https://jsonplaceholder.typicode.com/todos");
};

const rendertodosList = async () => {
  try {
    const { data } = await gettodos();
    //bien doi mang obj -> html
    const html = data
      .map((todos) => {
        if (todos.completed) {
          return `
        <tr class="todos">
            <td class="todos-title">${todos.title}</td>
            <td class="todos-check"><div class="icon-blue"><i class="bi bi-check2-square"></div></i></td>
        </tr>`;
        } else {
          return `
        <tr class="todos">
            <td class="todos-title">${todos.title}</td>
            <td class="todos-check"><div class="icon-red"><i class="bi bi-x-square"></i></div></i></td>
        </tr>`;
        }
      })
      .join("");

    document.querySelector(".todos-list").innerHTML = html;
  } catch (err) {
    console.log(err);
  }
};

rendertodosList();
