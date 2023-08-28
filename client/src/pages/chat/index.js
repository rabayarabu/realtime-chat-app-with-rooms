import styles from './styles.modules.css';
import MessagesReceived from './messages';

const Chat = ({ socket }) => {
  return (
    <div className={styles.chatContainer}>
      <div>
        <MessagesReceived socket={socket} />
      </div>
    </div>
  );
};

export default Chat;