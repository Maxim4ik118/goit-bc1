import { Component } from 'react';
import { postsRequest } from 'services/api';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import PostList from './PostList/PostList';

class App extends Component {
  state = {
    posts: [],
    isLoading: false,
    error: '',
    modal: {
      isVisible: false,
      data: null,
    },
    page: 1,
  };

  onDeletePost = postId => {
    this.setState(prevState => {
      return {
        posts: prevState.posts.filter(post => post.id !== postId), // tacoId = 2 [{id: 1}, {id: 2}, {id: 3}] -> [{id: 1}, {id: 3}]
      };
    });
  };

  onNextPage = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  onModalOpen = ({ title, body }) => {
    this.setState({
      modal: {
        isVisible: true,
        data: { title, body },
      },
    });
  };

  onModalClose = () => {
    this.setState({
      modal: {
        isVisible: false,
        data: null,
      },
    });
  };
  // handleResizeScreen = e => {
  //   console.log(window.innerWidth);
  // };

  fetchPosts = async () => {
    try {
      // Встановлюємо індикатор завантаження та обнуляємо помилку, якщо була
      this.setState({ isLoading: true, error: '' });

      const postsData = await postsRequest();

      this.setState(prevState => ({
        posts: [...prevState.posts, ...postsData],
      }));
    } catch (err) {
      this.setState({ error: err.message });
    } finally {
      this.setState({ isLoading: false });
    }
  };

  componentDidMount() {
    // window.addEventListener('resize', this.handleResizeScreen);

    this.fetchPosts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      // prevState.page -> 1; this.state.page -> 2;
      console.log(`Page is changed to: ${this.state.page}`);
      // Запит на сервер з данними з нової сторінки
    }
  }

  componentWillUnmount() {
    // window.removeEventListener('resize', this.handleResizeScreen);
    // clearInterval()
    // clearTimeout()
  }

  render() {
    const {
      posts,
      error,
      isLoading,
      modal: { isVisible, data },
    } = this.state;

    return (
      <div className="app">
        {error && <p className="error">Some error occured: {error}</p>}
        {isLoading && <Loader />}
        <PostList
          posts={posts}
          onDeletePost={this.onDeletePost}
          onModalOpen={this.onModalOpen}
        />
        <button className="btn" onClick={this.onNextPage}>
          Next page
        </button>
        {isVisible && (
          <Modal onClose={this.onModalClose}>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
          </Modal>
        )}
      </div>
    );
  }
}

export { App };
