import React, { useState, useRef, useEffect } from 'react'
import './style.css'
import bg from './bg.png'
import Axios from 'axios'
import { useContext } from 'react'
import { AuthContext } from '../../../context/authContext'
const KirayaVerinComp = () => {
    const interviewDateRef = useRef();
    const handleInterviewDateClick = () => {
        interviewDateRef.current.focus();
    };
    const [inputs, setInputs] = useState({
        startDate: "",
        endDate: "",
        marka: "",
        model_year: "",
        made_year: "",
        price: "",
        caravan_type: "",
        first_name: "",
        last_name: "",
        number: "",
        email: "",
        description: "",
        location: "",
        fuel_type: "",
    })
    const handleChange = (e) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const { currentUser } = useContext(AuthContext)
    const handleClick = async e => {
        e.preventDefault()
        var formData = new FormData();

        for (const file of files) {
            formData.append('files', file)

        }
        formData.append('inputs', JSON.stringify(inputs))
        const config = {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        }
        try {
            await Axios.post(`https://caravinn-test.herokuapp.com/api/rent/send-requset/${currentUser.id}`, formData, config).then((response) => {
                console.log(response)
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
    const [imageFiles, setImageFiles] = useState([]);
    const [images, setImages] = useState([]);
    useEffect(() => {

        const images = [], fileReaders = [];
        let isCancel = false;
        if (imageFiles.length) {
            imageFiles.forEach((file) => {
                const fileReader = new FileReader();
                fileReaders.push(fileReader);
                fileReader.onload = (e) => {
                    const { result } = e.target;
                    if (result) {
                        images.push(result)
                    }
                    if (images.length === imageFiles.length && !isCancel) {
                        setImages(images);
                    }
                }
                fileReader.readAsDataURL(file);
            })
        };
        return () => {
            isCancel = true;
            fileReaders.forEach(fileReader => {
                if (fileReader.readyState === 1) {
                    fileReader.abort()
                }
            })
        }
    }, [imageFiles]);

    const [files, setFile] = useState("");
    const setimgfile = (e) => {
        setFile(e.target.files)
        const { files } = e.target;
        const validImageFiles = [];
        for (let i = 0; i < files.length; i++) {
            const file = files[i];
            if (file.type.match(imageTypeRegex)) {
                validImageFiles.push(file);
            }
        }
        if (validImageFiles.length) {
            setImageFiles(validImageFiles);
            return;
        }
        alert("Selected images are not of valid type!");
    }

    return (
        <div className='kiraya-verin-comp'>
            <div className="kiraya-verin-left">
                <span>Karavanınızı</span>
                <h1>Kiraya verin</h1>

                <span id='child-2'>Karavan Bilgileri</span>
                <div className="kiraya-verin-radio-btn">
                    <div className="radio-btn" >
                        <input onChange={handleChange} type="radio" name='caravan_type' value={'Moto'} />
                        <label className='label'>Moto Karavan</label>
                    </div>
                    <div className="radio-btn" style={{ marginLeft: 15 }}>
                        <input onChange={handleChange} type="radio" name='caravan_type' value={'Çekme'} />
                        <label className='label'>Çekme Karavan</label>
                    </div>
                </div>
                <input onChange={handleChange} id='bedel' type="text" name='marka' placeholder='Marka' />
                <input onChange={handleChange} id='bedel' type="text" name='model_year' placeholder='Araç Model yılı' />
                <input onChange={handleChange} id='bedel' type="text" name='made_year' placeholder='Karavan Yapım Yılı' />
                <input onChange={handleChange} id='bedel' type="text" name='location' placeholder='Karavan yeri' />
                <input onChange={handleChange} id='bedel' type="text" name='fuel_type' placeholder='Karavan yakıt türü' />
                <input onChange={handleChange} id='bedel' type="text" name='price' placeholder='Günlük Kiralama Bedeli' />
                <label> Ne zaman kiralamak isterseniz:</label>
                <div className="dates" style={{ display: 'flex', width: '100%', marginTop: '5px' }}>
                    <input style={{ width: '49%' }} onChange={handleChange} id='bedel' type="date" name='startDate' />
                    <input style={{ width: '49%', marginLeft: '15px' }} onChange={handleChange} onClick={handleInterviewDateClick} ref={interviewDateRef} id='bedel' type="date" name='endDate' />
                </div>
                <div className="file-images">
                    <input type="file" name='photo' onChange={setimgfile} multiple accept="image/png, image/jpg, image/jpeg" />
                    {
                        images.length > 0 ?
                            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                {
                                    images.map((image, idx) => {
                                        return <p key={idx}> <img src={image} alt="" style={{ width: '200px' }} /> </p>
                                    })
                                }
                            </div>
                            :
                            <div>
                                <p>...</p>
                            </div>
                    }
                </div>
                <div className="kisisel-bilgi">
                    <span>Kişisel Bilgiler</span>
                    <div className="name">
                        <input onChange={handleChange} type="text" name='first_name' placeholder=' Adınız' />
                        <input onChange={handleChange} type="text" name='last_name' placeholder=' Soyadı' />
                    </div>
                    <input onChange={handleChange} type="text" name='number' placeholder=' Telefon' />
                    <input onChange={handleChange} type="text" name='email' placeholder=' Eposta' />
                    {/* <input type="text" placeholder=' Şifre' />
                    <input type="text" placeholder=' Şifre Tekrar' /> */}
                    <textarea onChange={handleChange} id='aciklama' name='description' type="text" placeholder=' Açıklama Girin' />

                    <input id='btn-gonder' type="button" value=' Gönder' onClick={handleClick} />
                </div>
            </div>
            <div className="kiraya-verin-right">
                <img src={bg} alt="" />
            </div>
        </div>
    )
}

export default KirayaVerinComp
