import gql from "graphql-tag";
// 在$query存放要查询的对象
// 在调用方的函数是这样写的（总结：都有一个variables的定义，然后在$query使用）
// !!!const {loading, data} = useQuery(FIND_MOVIE, {variables:{...}})
//!!!const [updateMovie, {loading: updating}] = useMutation(UPDATE_MOVIE)    
//!!!loading 和 updating可以跟踪
  // 查找
  // const {loading, data} = useQuery(FIND_MOVIE, {
  //   variables: {
  //     query: {
  //       title: searchText
  //     }}
  // })
  // 更新
  // updateMovie({
  //   variables: {
  //     query: {
  //       title: movie.title,
  //       set: {title: newTitleText}
  //     }
  //   }
  // }) 
// 查找一个movie(query: MovieQueryInput): Movie  
export const FIND_MOVIE = gql`
  query FindMovie($query: MovieQueryInput!) {
    movie(query: $query) {
      _id
      title
      year
      runtime
      rated
      poster
    }
  }
`;



export const GET_POST_COMMENTS = gql` 
query FindComments($query: CommentQueryInput!){
  comments(query: $query) {
    _id
		body
		date
		like
		title_id
		user_id
		user_nickname
  }
}
  `
  ;

  export const GET_POSTS = gql` 
  query {
    posts {
      _id
      title
      body
      date
      like
      user_id
      user_nickname
    }
  }
    `
    ;
  export const INSERT_COMMENT = gql`
    mutation InsertComment($mutation: CommentInsertInput!) {
      insertOneComment(data: $mutation) {
          _id
          title_id
          user_id
          user_nickname
          body
          like
          date
      }
    }
  `;

// 更新一个updateOneMovie(set: MovieUpdateInput!query: MovieQueryInput): Movie
export const UPDATE_MOVIE = gql`
  mutation UpdateMovie($query: MovieQueryInput!, $set: MovieUpdateInput!) {
    updateOneMovie(query: $query, set: $set) {
      _id
      title
    }
  }
`;

export const INSERT_POST = gql`
 mutation InsertPost($mutation: PostInsertInput!) {
   insertOnePost(data: $mutation) { 
    _id 
    title 
    body
    user_id
    user_nickname
    like
    date
  }
 }
 `