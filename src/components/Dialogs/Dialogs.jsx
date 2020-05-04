import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";
const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
          <div className={s.dialogsItem}>
              <div className={s.dialog + ' ' + s.active}>
                  <NavLink to={'/dialogs/1'}> Dmytro</NavLink>
              </div>
                <div className={s.dialog}>
                  <NavLink to={'/dialogs/2'}> Olga</NavLink>
              </div>
                <div className={s.dialog}>
                  <NavLink to={'/dialogs/3'}> Max</NavLink>
              </div>
                <div className={s.dialog}>
                  <NavLink to={'/dialogs/4'}> Viktor</NavLink>
              </div>
                <div className={s.dialog}>
                  <NavLink to={'/dialogs/5'}> Sweta</NavLink>
              </div>
          </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>How is you?</div>
                <div className={s.message}>Yo</div>
            </div>
        </div>
    )
}
export default Dialogs