import db from './lib/db'

async function careateUser() {
  try {
    const user = await db.user.create({
      data: {
        userName: 'cc',
        password: 'cc123456',
        nickName: 'cc',
        address: '地球'
      }
    })
    console.log('user created', user)
  } catch (error) {
    console.log('error creating user', error)
  }
}

// careateUser()

async function getUser() {
  const users = await db.user.findMany({})
  console.log('users', users)
}

// getUser()

async function createPost() {
  try {
    const user = await db.user.findFirst()
    const post = await db.post.create({
      data: {
        title: '第一篇文章的标题',
        content: '第一篇文章的内容',
        authorId: user?.id
      }
    })
    console.log('post created', post)
  } catch (error) {
    console.log('error creating post', error)
  }
}

// createPost()

async function getPosts() {
  try {
    const posts = await db.post.findMany({
      include: {
        author: true
      }
    })
    console.log(posts)
  } catch (error) {
    console.log('error getting posts', error)
  }
}

getPosts()
