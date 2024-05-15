import logo from './logo.svg';
import './App.css';

// firebase SDK
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/firestore';
import 'firebase/compat/auth';   
//firebase hooks
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { collection, query, onSnapshot, orderBy, getDoc} from 'firebase/firestore';
import { db, auth} from './firebase-config';
import { useAuthState } from 'react-firebase-hooks/auth';

//identifying firebase project from the firebase project site

//make a reference of the firebase sdk





function App() {
const [ user ] = useAuthState(auth);

  
  return (
    <div className="App">
      hi
     {user ? <ChatRoom />: <SignIn/>}
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }
  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}
function SignOut() {
  return auth.currentUser && (
    <button onClick={() => auth.signOut()}>Sign Out</button>
  )
}
function ChatRoom(){
  // make a ref to the firestore database when a user makes new msg under documentaion in firebase
  const messageRef = collection(db,'messages');
  // query the database by time stamp
  const queryMsg = query(messageRef);
  onSnapshot(queryMsg, (snapshat)=>{
    snapshat.forEach(doc => {
      console.log(doc.data())
    });

  })
  // this listens to any updates in realtime the data in the database with a useCollectionData hook
  // const [messages] = useCollectionData(query, {idField: 'id'});


  return (
    <>
    <div>

      {/* if there are msg maps over each msg and for each msg it has a key and msg */}
      {/* {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)} */}
    </div>
    </>
  )
}
function ChatMessage(props){
  const { text, uid } = props.message;
  return <p>{text}</p>
}
export default App;
