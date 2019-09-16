import React from 'react';
import s from './../Profile.module.css';
import ProfileStatus from "./ProfileStatus";


const ProfileInfo = (props) => {
    // if (!props.profile) {
    //     return <p>No profile</p>
    // } else

    // let profileItem = props.users.map(pr => <img src={pr.photoUrl} />)
        return (
            <div>
                {/*<img className={s.content_img} alt='info'*/}
                {/*     src='https://sites.google.com/site/prirodanasevseegooglgfgf/_/rsrc/1463456237313/home/priroda_gory_nebo_ozero_oblaka_81150_1920x1080.jpg'/>*/}
                <div className={s.descriptionBlock}>
                    {props.profile.map(u => <div key={u.id}>
                        <div>
                            <div>
                                <img src={u.photoUrl}/>
                            </div>
                        </div>
                        <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
                    </div>)}
                    {/*{<img src={props.users.photoUrl} alt="no avatar"/>}*/}
                    {/*{profileItem}*/}
                    <ProfileStatus status={"Hello everyone!"}/>
                </div>
            </div>
        )
    }


export default ProfileInfo;