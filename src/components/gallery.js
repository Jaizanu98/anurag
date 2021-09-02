import { useEffect, useState } from "react";

const Gallery = () => {

    const [num, setNum] = useState(0);
    const [mainImg, setMainImg] = useState("");
    const img1 = "https://i.gadgets360cdn.com/products/large/asus-vivobook-15-m515ua-1198x800-1617113501.jpg";
    const img2 = "https://img.tatacliq.com/images/i7/437Wx649H/MP000000009581176_437Wx649H_202105182214507.jpeg";
    const img3 = "https://cdn.shopify.com/s/files/1/1684/4603/products/Asusvivobook15x512_Silver.png?v=1584185524";
    const img4 = "https://www.notebookcheck.net/fileadmin/Notebooks/Asus/Vivobook_15_F512DA-SH31/vivobook15x512.jpg";

    useEffect(() => {

        setNum(55);
        setMainImg(img1);

    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2">
                    <img onClick={(e) => { setMainImg(img1) }} src={img1} className="img-fluid" />
                    <img onClick={(e) => { setMainImg(img2) }} src={img2} className="img-fluid" />
                    <img onClick={(e) => { setMainImg(img3) }} src={img3} className="img-fluid" />
                    <img onClick={(e) => { setMainImg(img4) }} src={img4} className="img-fluid" />
                </div>
                <div className="col-md-10">
                    <img className="img-fluid" src={mainImg} />
                </div>
            </div>
        </div>
    )
}

export default Gallery;