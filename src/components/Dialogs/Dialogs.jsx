import styles from './Dialogs.module.scss'
import {Dialog} from "./Dialog/Dialog";
import {Messages} from "./Messages/Messages";
import {addMessageCreator, updateNewMessageCreator} from "../../redux/dialogs-reducer";


export const Dialogs = ({store}) => {

    const state = store.getState().dialogsPage

    const onSendMessageClick = () => {
        store.dispatch(addMessageCreator())
    }

    const onMessageChange = (e) => {
        store.dispatch(updateNewMessageCreator(e.target.value))
    }

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogItems}>
                {
                    state.dialogs.map(item => (<Dialog id={item.id} name={item.name}/>))
                }
                <div>
                    <input className='input d-block mb-10' onChange={onMessageChange} type="text" placeholder={'Enter your message'}/>
                </div>
                <div>
                    <button className='addBtn' onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>

            <div className={styles.messages}>

                {
                    state.messages.map(item => <Messages massage={item.message}/>)

                }

                {/*<Routes>*/}
                {/*    <Route exact path='dialog/1' element={<Messages massage='Hello'/>}>*/}

                {/*    </Route>*/}
                {/*    <Route exact path='dialog/2' element={<Messages massage='How are you'/>}>*/}

                {/*    </Route>*/}
                {/*    <Route exact path='dialog/3' element={<Messages massage="What's your name"/>}>*/}

                {/*    </Route>*/}
                {/*    <Route exact path='dialog/4' element={<Messages massage='Yo'/>}>*/}

                {/*    </Route>*/}
            </div>

        </div>
    )
}