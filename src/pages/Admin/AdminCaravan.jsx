import React, { useState, useEffect } from 'react'
import Layout from './Layout'
import './layout.css'
import axios from 'axios'
import { Link } from 'react-router-dom'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';


const AdminCaravan = () => {
  const imageTypeRegex = /image\/(png|jpg|jpeg)/gm;
  const [imageFiles, setImageFiles] = useState([]);
  const [images, setImages] = useState([]);
  const [err, setErr] = useState("");
  const [inputs, setInputs] = useState({
    caravan_title: "",
    road: "",
    fuel_type: "",
    caravan_type: "",
    price: "",
    location: "",
  })
  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleInsert = async e => {
  //   e.preventDefault()
  //   if (inputs.caravan_title === "" || inputs.road === "" || inputs.fuel_type === "" || inputs.caravan_type === "" || inputs.price === "" || inputs.location === "") {
  //     setErr("Hata Oluştu, Lütfen boşlukları doldurunuz!");
  //   } else {
  //     try {
  //       await Axios.post("http://104.247.164.103/api/caravan/add", inputs)
  //     }
  //     catch (err) {
  //       console.log(err)
  //     }
  //     getCaravan()
  //   }

  // }

  const [caravan_list, SetCaravan_list] = useState([]);

  const getCaravan = () => {
    axios.get("http://104.247.164.103/api/caravan/").then((response) => {
      SetCaravan_list(response.data)
    }, [])
  }

  useEffect(() => {
    getCaravan()
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


  const deleteItem = (id) => {
    axios.delete(`http://104.247.164.103/api/caravan/delete/${id}`).then((response) => {
      getCaravan()
    })
    getCaravan()
  }

  const [search, setSearch] = useState("");
  const [filterData, setFilterData] = useState("")

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

  const addUserData = async (e) => {
    e.preventDefault();
    if (inputs.caravan_title === "" || inputs.road === "" || inputs.fuel_type === "" || inputs.caravan_type === "" || inputs.price === "" || inputs.location === "") {
      setErr("Hata Oluştu, Lütfen boşlukları doldurunuz!");
    } else {
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

      await axios.post("http://104.247.164.103/api/caravan/upload-pp", formData, config).then((res)=> {
        console.log(res)
      });
      getCaravan()
    }
  }



  return (
    <div className='admin-panel'>
      <Layout />
      <div className="admin-page-content">

        <div className="insert-blog" style={{ padding: '35px 15px' }}>

          <span className='input-data'>
            <label>Karavan:</label>
            <input type="text" name='caravan_title' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Yol:</label>
            <input type="text" name='road' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Yakıt Türü:</label>
            <select name='fuel_type' onChange={handleChange} >
              <option disabled={true} value="" selected>
                Seç
              </option>
              <option value="Diesel">Diesel</option>
              <option value="Benzin">Benzin</option>
            </select>
          </span>
          <span className='input-data'>
            <label>Caravan Türü:</label>
            <select name='caravan_type' onChange={handleChange}>
              <option disabled={true} value="" selected>
                Seç
              </option>
              <option value="Çekme">Çekme</option>
              <option value="Moto">Moto</option>
            </select>
            {/* <input type="text" name='caravan_type' onChange={handleChange} /> */}
          </span>
          <span className='input-data'>
            <label>Fiyat:</label>
            <input type="text" name='price' onChange={handleChange} />
          </span>
          <span className='input-data'>
            <label>Konum:</label>
            <input type="text" name='location' onChange={handleChange} />

          </span>



          <div style={{ padding: 15, backgroundColor: '#fff', marginTop: 15 }}>
            <h4>Upload file:</h4>
            <input type="file" name='photo' onChange={setimgfile} multiple accept="image/png, image/jpg, image/jpeg" />
            {/* <button onClick={addUserData}>submit</button> */}
          </div>

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

          <button id='insert' onClick={addUserData} style={{ width: '100%' }}>Karavan Ekle</button>
          {
            err ? (
              <div>
                <p
                  style={{
                    color: 'white',
                    fontWeight: '400',
                    textAlign: 'center',
                    padding: 15,
                    margin: '20px 0',
                    backgroundColor: '#cc0000',
                    transition: '0.7s'
                  }}
                >
                  {err && err}
                </p>
              </div>
            )
              :
              (
                <div></div>
              )
          }
        </div>

        <div className="table">
          <div style={{ display: 'flex' }}>
            <input type="text" placeholder='search' onChange={(e) => setSearch(e.target.value)} />
            <select id='select-filter' onChange={(e) => setFilterData(e.target.value)}>
              <option value="id">ID</option>
              <option value="caravan_title">Karavan Başlığı</option>
              <option value="road">Yol</option>
              <option value="fuel_type">Yakıt Türü</option>
              <option value="caravan_type">Karavan Türü</option>
              <option value="price">Fiyat</option>
              <option value="location">İlçe</option>
              <option value="rented">Durumu</option>
              <option value="pr">PR</option>
            </select>
          </div>
          <table>
            <tr>
              <th>Karavan ID</th>
              <th>Karavan Başlığı</th>
              <th>Yol</th>
              <th>Yakıt türü</th>
              <th>Karavan türü</th>
              <th>Fiyat</th>
              <th>İlçe</th>
              <th>Durumu</th>
              <th>PR</th>

            </tr>
            {caravan_list.filter((val) => {
              if (filterData === 'caravan_title') {
                return search.toLowerCase() === '' ? val : val.caravan_title.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'road') {
                return search.toLowerCase() === '' ? val : val.road.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'fuel_type') {
                return search.toLowerCase() === '' ? val : val.fuel_type.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'caravan_type') {
                return search.toLowerCase() === '' ? val : val.caravan_type.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'price') {
                return search.toLowerCase() === '' ? val : val.price.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'location') {
                return search.toLowerCase() === '' ? val : val.location.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'rented') {
                return search.toLowerCase() === '' ? val : val.rented.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'pr') {
                return search.toLowerCase() === '' ? val : val.pr.toLowerCase()
                  .includes(search)
              }
              if (filterData === 'id') {
                return search === '' ? val : val.id.toString()
                  .includes(search)
              }
              else {
                return search === '' ? val : val
              }
            }).map((val, key) => {
              return (
                <tr key={key}>
                  <td>{val.id}</td>
                  <td>{val.caravan_title}</td>
                  <td>{val.road}</td>
                  <td>{val.fuel_type}</td>
                  <td>{val.caravan_type}</td>
                  <td>{val.price}</td>
                  <td>{val.location}</td>
                  <td>{val.rented}</td>
                  <td>{val.pr}</td>

                  <div style={{ display: 'flex', padding: 24 }}>
                    <Link to={`update/${val.id}`}><button style={{ margin: 10, backgroundColor: 'transparent' }}><ModeEditOutlineOutlinedIcon style={{ color: '#0B91C5' }} /></button></Link>
                    <button onClick={() => deleteItem(val.id)} style={{ margin: 10, backgroundColor: 'transparent' }}><DeleteOutlineOutlinedIcon style={{ color: 'grey' }} /></button>
                  </div>
                </tr>
              )
            })}
          </table>
        </div>


      </div>
    </div>
  )
}

export default AdminCaravan
