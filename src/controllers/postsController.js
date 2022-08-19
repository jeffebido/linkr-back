import { postsRepository } from "../repositories/postsRepository.js";
import urlMetadata from "url-metadata";

async function getUrlData(link) {
  //Pega informações de uma url

  let data = {};

  await urlMetadata(link).then(function (metadata) {
    data.urlImage = metadata.image;
    data.urlTitle = metadata.title;
    data.urlDescription = metadata.description;
  });
  return data;
}

async function getPostsWithUrlData(posts) {
  //Adiciona informações da URl ao array de posts
  let postsData = [];

  for await (let post of posts) {
    console.log(post.url);
    let UrlData = await getUrlData(post.url);
    postsData.push({ ...post, ...UrlData });
  }

  return postsData;
}

export async function getTimelinePosts(req, res) {
  try {
    const posts = await postsRepository.getTimelinePosts();

    if (posts.rows.length == 0) {
      return res.sendStatus(404);
    } else {
      const postData = await getPostsWithUrlData(posts.rows);
      return res.status(200).send(postData);
    }
  } catch (err) {
    console.log(err);
    return res.sendStatus(400);
  }
}
