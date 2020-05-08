import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/messages_reducer";





const Dialogs = (props) => {


    let state = props.store.getState().dialogsPage;

    let dialogsElements = props.dialogData.map(dialog => <DialogItem name={dialog.name} id={dialog.id}/>);

    let messagesElements = props.messagesData.map(messag => <Message text={messag.text}/>);
    let newMessageBody = props.newMessageBody;

    let onMessageClick = () => {
       props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
          let body = e.target.value;
          props.store.dispatch(updateNewMessageBodyCreator(body))


    }


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                {
                    dialogsElements
                }

            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder={'Enter you message'}></textarea></div>
                    <div><button onClick={onMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs