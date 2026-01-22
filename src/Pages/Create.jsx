import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar'


const Create = () => {
    const [caption, setCaption] = useState("")
    const [image, setImage] = useState(null)
    const [preview, setPreview] = useState(null)
    const navigate = useNavigate();

    function handleFileChange(e) {
        const file = e.target.files[0]

        if (!file) {
            alert("Please select an image");
            return
        }

        setImage(file);
        setPreview(URL.createObjectURL(file))
    }


    async function handleUpload(e) {
        e.preventDefault()
        const token = localStorage.getItem("token")
        if (!image) return alert("Please select an image");

        try {
            const form = new FormData()
            form.append("caption", caption)
            form.append("image", image)
            const res = await fetch("http://localhost:5000/api/posts", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: form
            });

            const data = await res.json()

            if (!res.ok) {
                alert("Upload failed");
                return
            }

            alert("Post uploaded")
            setCaption("")
            setImage(null)
            setPreview(null)
            navigate("/web/home")

        } catch (err) {
            alert("Something went wrong")
        }
    }

    return (
        <>
            <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Baloo+Bhai+2:wght@400..800&family=Bebas+Neue&family=Bungee+Shade&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monofett&family=Oswald:wght@200..700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&family=Source+Sans+3:ital,wght@0,200..900;1,200..900&display=swap');

    .pop{
    font-family:"Poppins";
    }
    `}
            </style>
            <div className='ml-10 pop text-5xl font-bold mt-5'>
                Create Post
            </div>
            <form onSubmit={handleUpload}>
                <div className='ml-5 mt-15'>
                    <div className='flex '>
                        <div className='pop text-3xl font-semibold'>
                            Upload photo to post
                        </div>
                        <div className='ml-20 mt-1.5 '>
                            <input
                                type="file"
                                onChange={handleFileChange}
                            />
                            <div> {preview && (
                                <img
                                    src={preview}
                                    alt="preview"
                                    style={{
                                        width: "400px",
                                        borderRadius: "15px",
                                        marginTop: "10px"
                                    }}
                                />
                            )}</div>
                        </div>

                    </div>
                    <div className='mt-10 font-semibold'>Caption:</div>
                    <div className=''><textarea className='w-100 h-25 p-3 bg-gray-200' onChange={e => setCaption(e.target.value)} id='caption' value={caption}></textarea></div>
                </div>
                <button type='submit' className='bg-indigo-700 w-30 h-15 text-white rounded-3xl ml-50 mt-10 text-3xl font-semibold '>Post</button>
            </form>
        </>
    )
}

export default Create