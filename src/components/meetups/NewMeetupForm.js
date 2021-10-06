import { useRef } from 'react'
import Card from '../ui/Card'
import style from './NewMeetupFrom.module.css'
function NewMeetupForm(props) {

    const titleInputRef = useRef()
    const imageInputRef = useRef()
    const addressInputRef = useRef()
    const descriptionInputRef = useRef()
    const handleSubmit =(e)=>{
        e.preventDefault();
        const enterTitle = titleInputRef.current.value;
        const enterImage = imageInputRef.current.value;
        const enterAddress = addressInputRef.current.value;
        const enterDescrption = descriptionInputRef.current.value;
        const meetupData = {
            title: enterTitle,
            image: enterImage,
            address: enterAddress,
            description: enterDescrption,
        };
        props.onAddMeetup(meetupData)
    }
    return (
        <Card>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.control}>
                    <label htmlFor='title'>Meetup Title</label>
                    <input type='text' required id="title" ref={titleInputRef} />
                </div>
                <div className={style.control}>
                    <label htmlFor='image'>Meetup Image</label>
                    <input type='url' required id="image" ref={imageInputRef} />
                </div>
                <div className={style.control}>
                    <label htmlFor='address'>Address</label>
                    <input type='text' required id="address" ref={addressInputRef} />
                </div>
                <div className={style.control}>
                    <label htmlFor='description'>Description</label>
                    <textarea id='description' required rows='5' ref={descriptionInputRef}></textarea>
                </div>
                <div className={style.actions}>
                    <button>Add Meetup</button>
                </div>
            </form>
        </Card>
    )
}

export default NewMeetupForm
